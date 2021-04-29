import './App.css';
import React, {useState, useEffect} from 'react';
import AddMessageField from './containers/AddMessageField';
import MessagesContainer from './containers/MessagesContainer';
import SideBarContainer from './containers/SideBarContainer';
import {Modal} from './components/Modal';
import {connect} from 'react-redux';
import {addUser} from './actions/types';
import ID from './utils/utils';
import {configureSocket} from './sockets/configureSocket';
import {sagaMiddleware} from './index';
import handleNewMessage from './sagas/handleNewMessage';
import {randomColor} from './utils/utils';

function _App({onEnterYourName, dispatch}) {
  const [show,setShow] = useState(true);
  const [currName,setCurrName] = useState('');
  const [color,setColor] = useState('');
  const [user,setUser] = useState({
    username: '',
    id: '',
  });
  useEffect(() => {
    if (currName !== '') {
      const socket = configureSocket(dispatch,user);
      sagaMiddleware.run(handleNewMessage, {socket, username: currName})
      const color = randomColor();
      setColor(color);
    }
  },[currName])

  function handleShow(value) {
    setShow(false);
    const newUser = {
      name: value,
      id: ID(),
    };
    onEnterYourName(newUser);
    setCurrName(value);
    setUser(newUser)
  }
  let component = null;
  if (show) {
    component = <Modal handleShow={handleShow}/>
  } else {
    component = <div id="container">
    <SideBarContainer color={color} currName={currName}/>
    <section id="main">
      <MessagesContainer/>
      <AddMessageField currName={currName}/>
    </section>
  </div>
  }
  return component
}

function mapDispatchToProps(dispatch) {
  return {
    onEnterYourName: (data) => dispatch(addUser(data)),
    dispatch
  }
};

const App = connect(null,mapDispatchToProps)(_App);
export default App;
