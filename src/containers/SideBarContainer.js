import {connect} from 'react-redux';
import SideBar from '../components/Sidebar';

const _SideBarContainer = (props) => {
    const {users,color,currName} = props;
    return <SideBar users={users} color={color} currName={currName}/>
};

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

const SideBarContainer = connect(mapStateToProps)(_SideBarContainer);

export default SideBarContainer;