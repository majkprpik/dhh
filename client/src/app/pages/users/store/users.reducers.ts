import * as UserActions from '../store/users.actions';
import { User } from '../../../models/user.model';

const initialState = {
    users: [
        new User('df6g5g55g', 'klara@vuckovic.com', 'klara',
            'vuckovic', 'fg45d65gdf', '150'),
    ],
};
export function usersReducer(state = initialState, action: UserActions.UsersActions) {
    switch (action.type) {
        case UserActions.SET_USERS:
            return {
                ...state,
                users: [...action.payload],
            };
        case UserActions.ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case UserActions.UPDATE_USER:
            const user = state.users[action.payload.index];
            const updatedUser = {
            ...user,
            ...action.payload,
            };
            const users = [...state.users];
            users[action.payload.index] = updatedUser;
            return {
            ...state,
            users: users,
            };
        case UserActions.DELETE_USER:
            const oldUsers = [...state.users];
            oldUsers.splice(action.payload.index, 1);
            return {
            ...state,
            users: oldUsers,
            };
        default:
            return state;
    }
}
