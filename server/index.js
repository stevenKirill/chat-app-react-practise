const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8989 });

let users = [];

// Функци которая отправляет всем сокетами кроме текущего данные так как текуший сокет
// может менять view на клиенте
const broadcast = (data,socket) => {
    wss.clients.forEach((client) => {
		if (client.readyState === WebSocket.OPEN && client !== socket ) {
			client.send(JSON.stringify(data))
		}
	})
}

wss.on('connection', (socket) => {
    let id;
    socket.on('message',(message) => {
        const data = JSON.parse(message);
        switch(data.type) {
            case 'ADD_USER':
                const {userData} = data;
                id = userData.id;
                users.push({name: userData.name, id: userData.id});
                // отправляем самому сокету
                socket.send(JSON.stringify({
                    type: 'LIST_OF_USERS',
                    users
                }));
                // отправляем всем кроме сокета
                broadcast({
                    type: 'LIST_OF_USERS',
                    users
                }, socket);
                break
            case 'ADD_MESSAGE':
                broadcast({
                    type: 'RECEIVE_MESSAGE',
                    payload: data.payload
                }, socket)
                break
        }
    })

    socket.on('close', () => {
        //console.log(users,'=>> users')
        users = users.filter((user) => user.id !== id);
		broadcast({
			type: 'LIST_OF_USERS',
			users
		}, socket)
	})
})