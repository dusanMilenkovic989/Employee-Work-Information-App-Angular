import { mergeMap, catchError, map, of, Observable } from 'rxjs'
import type { Action } from '@ngrx/store'
import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import type { EmployeeEntryData } from '../../types/models/employee.model'
import { EmployeesService } from '../core/services/employees.service'
import { getEmployeeEntryDataCollection, getEmployeeEntryDataCollectionFailure, getEmployeeEntryDataCollectionSuccess } from './employees.actions'

@Injectable()
class EmployeesEffects
{
    // Actions would not be available if provided through constructor and the DI container
    // Stepped away from syntax consistency as a choice in front of editting TS compiler config in order to compile classes the old way, before ES2022
    public actions$ = inject(Actions)

    public employeeEntryDataCollection$ = createEffect((): Observable<Action> => 
        this.actions$.pipe(
            ofType(getEmployeeEntryDataCollection),
            mergeMap((): Observable<Action> => this.employeesService.getEmployeeData()
                .pipe(
                    map((employeeEntryDataCollection: EmployeeEntryData[]): Action => getEmployeeEntryDataCollectionSuccess({ employeeEntryDataCollection })),
                    catchError((error: unknown): Observable<Action> => of(getEmployeeEntryDataCollectionFailure({ error })))
                ) 
            )
    ))

    constructor(private employeesService: EmployeesService) {}
}

export { EmployeesEffects }