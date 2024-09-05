import { createAction, props } from '@ngrx/store'
import type { EmployeeEntryData } from '../../types/models/employee.model'
import { ACTIONS } from '../../constants/actions'

type PAYLOAD_SUCCESS = { employeeEntryDataCollection: EmployeeEntryData[] }
type PAYLOAD_FAILURE = { error: unknown }

const getEmployeeEntryDataCollection = createAction(ACTIONS.getEmployeeEntryDataCollection, props<PAYLOAD_SUCCESS>())
const getEmployeeEntryDataCollectionSuccess = createAction(ACTIONS.getEmployeeEntryDataCollectionSuccess, props<PAYLOAD_SUCCESS>())
const getEmployeeEntryDataCollectionFailure = createAction(ACTIONS.getEmployeeEntryDataCollectionFailure, props<PAYLOAD_FAILURE>())

export type { PAYLOAD_SUCCESS, PAYLOAD_FAILURE }
export { getEmployeeEntryDataCollection, getEmployeeEntryDataCollectionSuccess, getEmployeeEntryDataCollectionFailure }