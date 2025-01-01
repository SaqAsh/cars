// This file is going to be the one that handles the dom manipulation for the waiting room. What will happen is that when the user is put in the waiting room
// It will only show the waiting screen which is literally just nothing lol

//getting the dom elements that we need to actually show the game queue
const waitingRoom: HTMLElement | null = document.getElementById('waiting-area');
const game: HTMLElement | null = document.getElementById('game');
///////////////////////////////////////////////////////////////////////////////////
var socket = io();
function showGame(waitingRoom?: HTMLElement, game?: HTMLElement): void {
    try {
        if (game && waitingRoom) {
            game.style.display = 'block';
            waitingRoom.style.display = 'none';
        }
    } catch (error) {
        console.error("Error in showGame function:", error);
    }
}

function showWaitingRoom(waitingRoom?: HTMLElement, game?: HTMLElement): void {
    try {
        if (game && waitingRoom) {
            game.style.display = 'none';
            waitingRoom.style.display = 'block';
        }
    } catch (error) {
        console.error("Error in showGame function:", error);
    }
}

//handles the socket stuff
function main(): void{
    socket.on("waitingLobby", (data:any) => {
        let message = data.message;
        if(message === 'You are in the waiting lobby. Please wait for a player to disconnect.'){
            console.log(message);
            showWaitingRoom(waitingRoom!, game!);
        }else{
            showGame(waitingRoom!, game!);
            console.log(message);
        }
    });
    socket.on("connect", () =>{
        console.log(socket.id);
    });
}


main();