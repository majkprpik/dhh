import * as DhhdashboardActions from '../store/dhhdashboard.actions';
import {Day} from '../../../models/days.model';
import {Shift} from '../../../models/shift.model';
import { Schedule } from '../../../models/schedule.model';

export const ADD_SCHEDULE = 'ADD_SCHEDULE';

const initialState = {
    schedules: [
        new Schedule('fffsfdfsfs5544sd54f4f', 1 , [new Day('56df5g6g', 1, 'Blagdan', 'PON',
            [new Shift('f6gdf5g', 'dfg6d5g6', '5g6df5g')])] ),
    ],
};
export function dhhdashboardReducer(state = initialState, action: DhhdashboardActions.DhhdashboardActions) {
    switch (action.type) {
        case DhhdashboardActions.SET_SCHEDULE:
            return {
                ...state,
                schedules: [...action.payload],
            };
        case DhhdashboardActions.ADD_SCHEDULE:
            return {
                ...state,
                schedules: [...state.schedules, action.payload],
            };
        case DhhdashboardActions.UPDATE_SCHEDULE:
            const schedule = state.schedules[action.payload.id];
            const updatedSchedule = {
                ...schedule,
               ...action.payload.updatedSchedule,
            };
            const schedules = [...state.schedules];
                schedules[action.payload.id] = updatedSchedule;
                return {
                    ...state,
                    shifts: schedules,
                };
        default:
            return state;
    }
}
