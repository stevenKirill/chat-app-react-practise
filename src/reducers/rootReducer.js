import {combineReducers} from 'redux';
import {messagesReducer} from './messagesReducer';
import {usersReducer} from './usersReducer';

const rootReducer = combineReducers({
        users: usersReducer,
        messages: messagesReducer
    });
export default rootReducer