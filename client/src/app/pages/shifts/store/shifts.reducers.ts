import * as ShiftActions from '../store/shifts.actions';
import { NewShift } from '../../../models/NewShift.model';

const initialState = {
    shifts: [
        new NewShift('sdf534df3sdf', 'Dummy smjena', 1, 24, true),
    ],
};
export function shiftsReducer(state = initialState, action: ShiftActions.ShiftsActions) {
    switch (action.type) {
        case ShiftActions.SET_SHIFTS:
            return {
                ...state,
                shifts: [...action.payload],
            };
        case ShiftActions.ADD_SHIFT:
            return {
                ...state,
                shifts: [...state.shifts, action.payload],
            };
        case ShiftActions.UPDATE_SHIFT:
            const shift = state.shifts[action.payload.id];
            const updatedShift = {
            ...shift,
            ...action.payload.updatedShift,
            };
            const shifts = [...state.shifts];
            shifts[action.payload.id] = updatedShift;
            return {
            ...state,
            shifts: shifts,
            };
        case ShiftActions.DELETE_SHIFT:
            const oldShifts = [...state.shifts];
            oldShifts.splice(action.payload.id, 1);
            return {
            ...state,
            shifts: oldShifts,
            };
        default:
            return state;
    }
}
