import * as DhhdashboardActions from '../store/dhhdashboard.actions';

import { Schedule } from '../../../models/schedule.model';

export const ADD_SCHEDULE = 'ADD_SCHEDULE';

const initialState = {
    schedules: [
        new Schedule('Apples', 5),
        new Schedule('Turtles', 10),
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
