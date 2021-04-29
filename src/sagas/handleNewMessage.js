import { takeEvery } from 'redux-saga/effects'

const handleNewMessage = function* handleNewMessage(params) {
	yield takeEvery('ADD_MESSAGE', (action) => {
		params.socket.send(JSON.stringify(action))
	})
}

export default handleNewMessage