
export function messagesReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_MESSAGE':
        case 'RECEIVE_MESSAGE':
            const {message, author} = action.payload;
            const newMessage = [{
                    message,
                    author
                }];
            return state.concat(newMessage);
        default:
            return state
    }
};