import type { Observable } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import type { EmployeeEntryData, EmployeeDataBeforeRendering, EmployeeDataForRendering } from '../../types/models/employee.model'
import type { DataBeforeRendering, DataForTableRendering } from '../../types/employees.component.type'
import { select, Store } from '@ngrx/store'
import { AppState } from '../../types/models/app.state.model'
import { getEmployeeEntryDataCollection } from './employees.actions'
import { STATE_PROPERTIES } from '../../constants/stateProperties'
import { EMPLOYEE_COLUMN_NAMES } from '../../constants/employeeColumnNames'
import { EMPLOYEES } from '../../constants/employees'
import { TableData } from '../../types/table.component.type'

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrl: './employees.component.css'
})
class EmployeesComponent implements OnInit
{
    private employeeEntryDataCollection$: Observable<EmployeeEntryData[]>
    public employeesTableDescription = EMPLOYEES.tableDescription
    public dataForTableRendering: TableData<EmployeeDataForRendering>[] = []
    public employeesTableColumnNames = [EMPLOYEE_COLUMN_NAMES.name, EMPLOYEE_COLUMN_NAMES.totalTimeInMonth, EMPLOYEE_COLUMN_NAMES.action]

    constructor(private store: Store<AppState>)
    {
        this.employeeEntryDataCollection$ = this.store.pipe(select(STATE_PROPERTIES.employeeEntryDataCollection))
    }

    public ngOnInit(): void 
    {
        this.store.dispatch(getEmployeeEntryDataCollection({ employeeEntryDataCollection: [] }))
        
        this.employeeEntryDataCollection$.subscribe((employeeEntryDataCollection) =>
        {   
            const EMPLOYEE_DATA_BEFORE_RENDERING_COLLECTION: DataBeforeRendering[] = []
            
            employeeEntryDataCollection.forEach((employeeEntry: EmployeeEntryData): void =>
            {
                if (employeeEntry.DeletedOn)
                {
                    return
                }

                const EMPLOYEE: EmployeeDataBeforeRendering = {
                    name: employeeEntry.EmployeeName || EMPLOYEES.notDetermined,
                    hoursWorked: this.determineEmployeeHoursWorked(employeeEntry)
                }

                const EXISTING_EMPLOYEE_DATA = EMPLOYEE_DATA_BEFORE_RENDERING_COLLECTION.find(({ data: { name } }: DataBeforeRendering): Boolean => name.toLowerCase() === EMPLOYEE.name.toLowerCase())

                if (!EXISTING_EMPLOYEE_DATA)
                {
                    EMPLOYEE_DATA_BEFORE_RENDERING_COLLECTION.push({ data: EMPLOYEE, emphasize: this.determineIfShouldBeEmphasized(EMPLOYEE.hoursWorked) })
                }
                else
                {
                    EXISTING_EMPLOYEE_DATA.data.hoursWorked += EMPLOYEE.hoursWorked
                    EXISTING_EMPLOYEE_DATA.emphasize = this.determineIfShouldBeEmphasized(EXISTING_EMPLOYEE_DATA.data.hoursWorked)
                }
            })

            this.dataForTableRendering = EMPLOYEE_DATA_BEFORE_RENDERING_COLLECTION
                .sort((a: DataBeforeRendering, b: DataBeforeRendering): number => 
                    b.data.hoursWorked - a.data.hoursWorked
                )
                .map(({ data: { name, hoursWorked }, emphasize }: DataBeforeRendering): DataForTableRendering => ({
                    data: {
                        name,
                        hoursWorked: EMPLOYEES.hoursWorkedColumnFormat(Math.ceil(hoursWorked)),
                        action: ''
                    },
                    emphasize
                })
            )
        })
    }

    private determineEmployeeHoursWorked(employeeEntry: EmployeeEntryData): number
    {
        const START_TIME_UTC = (new Date(employeeEntry.StarTimeUtc)).getTime()
        const END_TIME_UTC = (new Date(employeeEntry.EndTimeUtc)).getTime()

        return (END_TIME_UTC - START_TIME_UTC) / 1000 / 60 / 60
    }

    private determineIfShouldBeEmphasized(hoursWorked: number)
    {
        return hoursWorked < EMPLOYEES.hoursWorkedUnderWhichAreEmphasized
    }
}

export { EmployeesComponent }
