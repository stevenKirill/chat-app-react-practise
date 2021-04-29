export function usersReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_USER':
            const {name,id} = action.payload;
            const newUser = [{
                name,
                id
            }];
            return state.concat(newUser);
        case 'LIST_OF_USERS':
            return action.payload
        default:
            return state;
    }
};