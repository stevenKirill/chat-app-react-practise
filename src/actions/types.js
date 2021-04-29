export function addUser(payload) {
    return {
        type: 'ADD_USER',
        payload
    };
};

export function listOfUsers(payload) {
    return {
        type: 'LIST_OF_USERS',
        payload
    }
};

export function addMessage(payload) {
    return {
        type: 'ADD_MESSAGE',
        payload
    }
};

export function receiveMessages(payload) {
    return payload
};