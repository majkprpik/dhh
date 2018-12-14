import * as UserActions from '../store/users.actions';
import { User } from '../../../models/user.model';


export const ADD_USER = 'ADD_USER';

const initialState = {
    users: [
        new User('df6g5g55g', 'klara@vuckovic.com', 'klara',
            'vuckovic', 'fg45d65gdf', '150'),
    ],
};
export function usersReducer(state = initialState, action: UserActions.UsersActions) {
    switch (action.type) {
        case UserActions.ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        default:
            return state;
    }
}
