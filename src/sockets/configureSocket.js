import {receiveMessages,addUser,listOfUsers} from '../actions/types';

export function configureSocket(dispatch,userData) {
    const socket = new WebSocket('ws://localhost:8989');

    socket.onopen = () => {
        // при открытии сокета потпраялем имя пользователя
        socket.send(JSON.stringify({
            type: 'ADD_USER',
            userData
        }))
    };
    // на событие сообщения реагируем
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        switch(data.type) {
            case 'RECEIVE_MESSAGE':
                dispatch(receiveMessages(data))
                break;
            case 'ADD_USER':
                dispatch(addUser(data.users))
                break;
            case 'LIST_OF_USERS':
                dispatch(listOfUsers(data.users))
            default:
                break;
        }
    }

    socket.onclose = () => {
        // при открытии сокета потпраялем имя пользователя
        console.log(userData,'=>> userData')
        socket.send(userData)
    }
    return socket;
}