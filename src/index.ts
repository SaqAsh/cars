import express from "express";
const app = express();
import http from 'http';
const server = http.createServer(app);
import path from 'path'
import { Server } from "socket.io";
const io = new Server(server);



app.use(express.static(path.join(__dirname, '../public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

function ManageConnections(): void {
    const users: any[] = [];

    io.on('connection', (socket) => {
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
                users[i].join("game");
                users[i].emit('waitingLobby', { message: 'Welcome to the game!' });
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

