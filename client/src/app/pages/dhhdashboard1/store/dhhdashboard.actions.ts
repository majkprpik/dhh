import { Action } from '@ngrx/store';
import { Schedule } from '../../../models/schedule.model';

export const ADD_SCHEDULE = 'ADD_SCHEDULE';
export const FETCH_SCHEDULE = 'FETCH_SCHEDULE';
export const SET_SCHEDULE = 'SET_SCHEDULE';
export const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';
export const STORE_SCHEDULE = 'STORE_SCHEDULE';

export class AddSchedule implements Action {
    readonly type = ADD_SCHEDULE;
    constructor(public payload: Schedule) {
    }
}
export class SetSchedule implements Action {
    readonly type = SET_SCHEDULE;

    constructor(public payload: Schedule[]) {}
  }
export class FetchSchedule implements Action {
    readonly type = FETCH_SCHEDULE;

}
export class UpdateSchedule implements Action {
    readonly type = UPDATE_SCHEDULE;
    constructor(public payload: {id: string, updatedSchedule: Schedule}) {
    }
}
export class StoreSchedule implements Action {
    readonly type = STORE_SCHEDULE;
}
export type DhhdashboardActions = AddSchedule | FetchSchedule | StoreSchedule | UpdateSchedule | SetSchedule;
