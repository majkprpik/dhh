import * as RolesActions from '../store/roles.actions';
import { Role } from '../../../models/role.model';

const initialState = {
    roles: [
        new Role('sd6f5s6f0', 'sdf3sd5f4'),
    ],
};
export function rolesReducer(state = initialState, action: RolesActions.RolesActions) {
    switch (action.type) {
        case RolesActions.SET_ROLES:
            return {
                ...state,
                roles: [...action.payload],
            };
        case RolesActions.ADD_ROLE:
            return {
                ...state,
                roles: [...state.roles, action.payload],
            };
        case RolesActions.UPDATE_ROLE:
            const role = state.roles[action.payload.id];
            const updatedRole = {
            ...role,
            ...action.payload.updatedRole,
            };
            const roles = [...state.roles];
            roles[action.payload.id] = updatedRole;
            return {
            ...state,
            roles: roles,
            };
        case RolesActions.DELETE_ROLE:
            const oldRoles = [...state.roles];
            oldRoles.splice(action.payload, 1);
            return {
            ...state,
            roles: oldRoles,
            };
        default:
            return state;
    }
}
