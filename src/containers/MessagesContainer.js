import {connect} from 'react-redux';
import MessagesList from '../components/MessageList';

const _MessagesContainer = (props) => {
    return <MessagesList messages={props.messages}/>
};

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
};

const MessagesContainer = connect(mapStateToProps)(_MessagesContainer);

export default MessagesContainer;