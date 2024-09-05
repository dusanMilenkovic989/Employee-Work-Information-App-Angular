import { EmployeeDataForRendering, EmployeeDataBeforeRendering } from './models/employee.model'

interface DataForTableRendering
{
    data: EmployeeDataForRendering
    emphasize: Boolean
}

interface DataBeforeRendering
{
    data: EmployeeDataBeforeRendering
    emphasize: Boolean
}

export type { DataForTableRendering, DataBeforeRendering }