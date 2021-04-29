import {connect} from 'react-redux';
import AddMessage from '../components/AddMessage';
import {addMessage} from '../actions/types';

const _AddMessageField = (props) => {
    return <AddMessage onAddMessage={props.onAddMessage} currName={props.currName}/>
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: (payload) => dispatch(addMessage(payload))
    }
};

const AddMessageField = connect(null,mapDispatchToProps)(_AddMessageField);

export default AddMessageField;