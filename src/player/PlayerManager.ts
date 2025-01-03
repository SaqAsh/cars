// this is the file that manages the assignments of players, placing this.users in rooms

import { Socket } from "socket.io";

export class PlayerManager {

    public users: Socket[];

    constructor() {
        this.users = [];
    }

    public HandleConnections(): void {
        if (this.users.length === 2) {
            for ( let i = 0; i < 2; i++){
                if(this.users[i].rooms.has('waiting')) this.users[i].rooms.delete('waiting'); // in the case that the user was in the waiting room before they joined we are gonna remove the waiting stage
                this.users[i].join("game");
                this.users[i].emit('waitingLobby', { message: 'Welcome to the game!' });
                console.log(this.users[i].rooms);
            }          
        } else if (this.users.length > 2) {
            for (let i = 2; i < this.users.length; i++) {
                this.users[i].join("waiting");
                this.users[i].emit('waitingLobby', { message: 'You are in the waiting lobby. Please wait for a player to disconnect.' });
                console.log(this.users[i].rooms);
            }
        }
    }

    public HandleMovement(socket: Socket): void{
        socket.on("keypress", (arg : any)=>{
            if(this.users.length < 2){
                return;
            }
            if(Object.keys(arg)[0] === this.users[0].id){
                socket.emit("car1", 20);
            }
            if(Object.keys(arg)[0] === this.users[1].id){
                socket.emit("car2", 20);
            }
        });

        socket.on("car1Position", (arg:any) =>{
            this.users[1].emit("car1Position", arg);
        })

        socket.on("car2Position", (arg:any) =>{
            this.users[0].emit("car2Position", arg);
        })
    }

}
