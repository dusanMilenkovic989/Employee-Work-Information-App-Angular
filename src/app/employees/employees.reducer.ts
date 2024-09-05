import { createReducer, on } from '@ngrx/store'
import type { EmployeeEntryData } from '../../types/models/employee.model'
import { getEmployeeEntryDataCollection, getEmployeeEntryDataCollectionSuccess, getEmployeeEntryDataCollectionFailure, PAYLOAD_SUCCESS, PAYLOAD_FAILURE } from './employees.actions'

const INITIAL_STATE: EmployeeEntryData[] = []

const employeeReducer = createReducer(
    INITIAL_STATE,
    on(getEmployeeEntryDataCollection, (): EmployeeEntryData[] => INITIAL_STATE),
    on(getEmployeeEntryDataCollectionSuccess, (state: EmployeeEntryData[], { employeeEntryDataCollection }: PAYLOAD_SUCCESS): EmployeeEntryData[] => 
        [...state, ...employeeEntryDataCollection]
    ),
    on(getEmployeeEntryDataCollectionFailure, (state: EmployeeEntryData[], { error }: PAYLOAD_FAILURE): EmployeeEntryData[] =>
    {
        if (error instanceof Error)
        {
            console.warn(error.message)
        }

        return state
    })
)

export { employeeReducer }