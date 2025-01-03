import { WaitingRoomManager } from "./scripts/lobbyManager";
import { GameStateManager } from "./scripts/gameState";

var socket = io();
const waitingRoomManager = new WaitingRoomManager(
    socket,
    "waiting-area",
    "game"
);
const gameStateManager = new GameStateManager(
    "winning-state",
    "losing-state",
    "car1",
    "car2"
);
document.addEventListener("keydown", keyDownHandler);

gameStateManager.winningState!.style.display = "none";
gameStateManager.losingState!.style.display = "none";
gameStateManager.racingCar1!.style.position = "absolute";
gameStateManager.racingCar1!.style.left = "80px";
gameStateManager.racingCar1!.style.top = `${screen.height / 1.5}px`;

gameStateManager.racingCar2!.style.position = "absolute";
gameStateManager.racingCar2!.style.left = "80px";
gameStateManager.racingCar2!.style.top = `${screen.height / 3}px`;

let offsetX_racingCar1: number;
let offsetX_racingCar2: number;

//this is the other user telling me that I lost cuz of his position
socket.on("car1Position", (args: any) => {
    if (
        parseInt(gameStateManager.racingCar1!.style.left || "0", 10) >=
        screen.width - 230
    ) {
        gameStateManager.HandleLosingState(
            waitingRoomManager.game!,
            waitingRoomManager.waitingRoom!
        );
    }
    gameStateManager.racingCar1!.style.left = args;
});

socket.on("car2Position", (args: any) => {
    if (
        parseInt(gameStateManager.racingCar2!.style.left || "0", 10) >=
        screen.width - 230
    ) {
        gameStateManager.HandleLosingState(
            waitingRoomManager.game!,
            waitingRoomManager.waitingRoom!
        );
    }
    gameStateManager.racingCar2!.style.left = args;
});

socket.on("car1", (arg: any) => {
    offsetX_racingCar1 = parseInt(
        gameStateManager.racingCar1!.style.left || "0",
        10
    );
    gameStateManager.racingCar1!.style.left = `${offsetX_racingCar1 + arg}px`;
    if (
        parseInt(gameStateManager.racingCar1!.style.left || "0", 10) >=
        screen.width - 230
    )
        gameStateManager.HandleWinningState(
            waitingRoomManager.game!,
            waitingRoomManager.waitingRoom!
        );
    socket.emit(
        "car1Position",
        gameStateManager.racingCar1!.style.left
    );
});

socket.on("car2", (arg: any) => {
    offsetX_racingCar2 = parseInt(
        gameStateManager.racingCar2!.style.left || "0",
        10
    );
    gameStateManager.racingCar2!.style.left = `${offsetX_racingCar2 + arg}px`;
    if (
        parseInt(gameStateManager.racingCar2!.style.left || "0", 10) >=
        screen.width - 230
    )
        gameStateManager.HandleWinningState(
            waitingRoomManager.game!,
            waitingRoomManager.waitingRoom!
        );
    socket.emit(
        "car2Position",
        gameStateManager.racingCar2!.style.left
    );
});

function keyDownHandler(e: KeyboardEvent) {
    if (e.repeat) return;

    if (e.key.toLowerCase() === "w") {
        socket.emit("keypress", { [socket.id]: "w" });
    }
}
