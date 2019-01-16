import { Action } from '@ngrx/store';
import { NewShift } from '../../../models/NewShift.model';

export const SET_SHIFTS = 'SET_SHIFTS';
export const ADD_SHIFT = 'ADD_SHIFT';
export const UPDATE_SHIFT = 'UPDATE_SHIFT';
export const DELETE_SHIFT = 'DELETE_SHIFT';
export const FETCH_SHIFT = 'FETCH_SHIFT';
export const STORE_SHIFT = 'STORE_SHIFT';

export class SetShifts implements Action {
    readonly type = SET_SHIFTS;

    constructor(public payload: NewShift[]) {}
  }
export class AddShift implements Action {
    readonly type = ADD_SHIFT;
    constructor(public payload: NewShift) {
    }
}
export class UpdateShift implements Action {
    readonly type = UPDATE_SHIFT;
    constructor(public payload: {id: string, updatedShift: NewShift}) {
    }
}

export class DeleteShift implements Action {
    readonly type = DELETE_SHIFT;
    constructor(public payload: number ) {
    }
}

export class FetchShift implements Action {
    readonly type = FETCH_SHIFT;
}

export class StoreShift implements Action {
    readonly type = STORE_SHIFT;
}
export type ShiftsActions = SetShifts | AddShift | UpdateShift | DeleteShift | FetchShift | StoreShift;
