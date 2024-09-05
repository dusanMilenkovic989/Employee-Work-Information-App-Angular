const EMPLOYEES = {
    tableDescription: 'Employee List',
    chartDescription: 'Employee part in total hours',
    notDetermined: 'N/A',
    hoursWorkedUnderWhichAreEmphasized: 100,
    hoursWorkedColumnFormat: (hours: number): string => `${hours} hrs`
} as const

export { EMPLOYEES }