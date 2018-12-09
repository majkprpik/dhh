import * as DhhdashboardActions from '../store/dhhdashboard.actions';
import {Day} from '../../../models/days.model'
import {Shift} from '../../../models/shift.model'
import { Schedule } from '../../../models/schedule.model';

export const ADD_SCHEDULE = 'ADD_SCHEDULE';
const initialState = {
    schedules: [
        new Schedule('fffsfdfsfs5544sd54f4f', 5)
    ],
};
export function dhhdashboardReducer(state = initialState, action: DhhdashboardActions.DhhdashboardActions) {
    switch (action.type) {
        case DhhdashboardActions.ADD_SCHEDULE:
            return {
                ...state,
                schedules: [...state.schedules, action.payload],
            };
        default:
            return state;
    }
}
