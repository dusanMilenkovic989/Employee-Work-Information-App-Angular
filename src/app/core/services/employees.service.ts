import type { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import type { EmployeeEntryData } from '../../../types/models/employee.model'
import { ENVIRONMENT } from '../../../environments/environment'

@Injectable({
    providedIn: 'root'
})
class EmployeesService 
{
    constructor(private httpClient: HttpClient) { }

    public getEmployeeData(): Observable<EmployeeEntryData[]>
    {
        return this.httpClient.get<EmployeeEntryData[]>(ENVIRONMENT.employeesDataUrl)
    }
}

export { EmployeesService }
