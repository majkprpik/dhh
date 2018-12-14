import * as DhhdashboardActions from '../store/dhhdashboard.actions';
import {Day} from '../../../models/days.model';
import {Shift} from '../../../models/shift.model';
import { Schedule } from '../../../models/schedule.model';

export const ADD_SCHEDULE = 'ADD_SCHEDULE';

export interface FutureState {
    schedules: State;
}
export interface State {
    schedules: Schedule[];
}
const initialState = {
    schedules: [
        new Schedule('fffsfdfsfs5544sd54f4f', 1 , [new Day('56df5g6g', 1, 'Blagdan', 'PON',
            [new Shift('f6gdf5g', 'dfg6d5g6', '5g6df5g')])] ),
        new Schedule('fffsfdfsfs5544sd54f4f', 12 , [new Day('56df5g6g', 12, 'Blagdan', 'UT',
            [new Shift('f6gdf5g', 'dfg6d5g6', '5g6df5g')])] ),
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
