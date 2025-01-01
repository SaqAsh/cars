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

io.on('connection', (socket)=>{
    console.log('a user connected'); 
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})

server.listen(3000, () => {
    console.log('listening on *:3000');
});

