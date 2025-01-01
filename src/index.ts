import express from "express";
const app = express();
import http from 'http';
const server = http.createServer(app);
import path from 'path'
import { Server, Socket } from "socket.io";
const io = new Server(server);

class ServerHandler{



}

app.use(express.static(path.join(__dirname, '../public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

function ManageConnections(): void {
    const users: Socket[] = [];

    io.on('connection', (socket: Socket) => {
        users.push(socket); 
        console.log(`User connected: ${socket.id}. Total: ${users.length}`);

        HandleConnections();

        socket.on('disconnect', () => {
            users.splice(
                users.findIndex((user) => user.id === socket.id),1
            );
            console.log(`User disconnected: ${socket.id}. Total: ${users.length}`);
            HandleConnections();
        });
    });

    function HandleConnections(): void {
        if (users.length === 2) {
            for ( let i = 0; i < 2; i++){

                if(users[i].rooms.has('waiting')) users[i].rooms.delete('waiting'); // in the case that the user was in the waiting room before they joined we are gonna remove the waiting stage

                users[i].join("game");
                users[i].emit('waitingLobby', { message: 'Welcome to the game!' });
                console.log(users[i].rooms);
            }          
        } else if (users.length > 2) {
            for (let i = 2; i < users.length; i++) {
                users[i].join("waiting");
                users[i].emit('waitingLobby', { message: 'You are in the waiting lobby. Please wait for a player to disconnect.' });
                console.log(users[i].rooms);
            }
        }
    }
}

ManageConnections();
server.listen(3000, () => {
    console.log('listening on *:3000');
});

