interface EmployeeEntryData 
{
    Id: string 
    EmployeeName: string
    StarTimeUtc: Date
    EndTimeUtc: Date
    EntryNotes: string
    DeletedOn: Date
}

interface EmployeeDataForRendering
{
    name: string
    hoursWorked: string,
    action: ''
}

interface EmployeeDataBeforeRendering
{
    name: string
    hoursWorked: number
}

export type { EmployeeEntryData, EmployeeDataForRendering, EmployeeDataBeforeRendering }