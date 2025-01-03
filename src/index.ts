import express from "express";
import http from "http";
import path from "path";
import { Server, Socket } from "socket.io";
import { PlayerManager } from "./player/PlayerManager";

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const playerManager = new PlayerManager();

app.use(express.static(path.join(__dirname, "../public")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

function ManageConnections(): void {
    io.on("connection", (socket: Socket) => {
        playerManager.HandleMovement(socket);

        playerManager.users.push(socket);
        console.log(
            `User connected: ${socket.id}. Total: ${playerManager.users.length}`
        );

        playerManager.HandleConnections();
        socket.on("disconnect", () => {
            playerManager.users.splice(
                playerManager.users.findIndex((user) => user.id === socket.id),
                1
            );
            console.log(
                `User disconnected: ${socket.id}. Total: ${playerManager.users.length}`
            );
            playerManager.HandleConnections();
        });
    });
}

ManageConnections();
server.listen(3000, () => {
    console.log("listening on *:3000");
});
