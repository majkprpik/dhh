import { Action } from '@ngrx/store';
import { Schedule } from '../../../models/schedule.model';

export const ADD_SCHEDULE = 'ADD_SCHEDULE';

export class AddSchedule implements Action {
    readonly type = ADD_SCHEDULE;
    constructor(public payload: Schedule){
    }
}

export type DhhdashboardActions = AddSchedule;