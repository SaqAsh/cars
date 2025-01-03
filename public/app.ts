import { WaitingRoomManager } from "./scripts/lobbyManager";
import { GameStateManager } from "./scripts/gameState";
var socket = io();

const racingCarIDs = ["car1", "car2"]; // we are gonna expand this when we can make an unlimited number of cars based off of sockets joining
const waitingRoomManager = new WaitingRoomManager(
    socket,
    "waiting-area",
    "game"
);
const gameStateManager = new GameStateManager(
    "winning-state",
    "losing-state",
    racingCarIDs
);
document.addEventListener("keydown", keyDownHandler);
gameStateManager.winningState!.style.display = "none";
gameStateManager.losingState!.style.display = "none";

const racingCars = gameStateManager.racingCars;
for (let i = 0; i < racingCars.length; i++) {
    racingCars[i].style.position = "absolute";
    racingCars[i].style.left = "80px";
    racingCars[i].style.top = `${(screen.height / (i + 1)) * 0.5}px`;
}

let offsetXRacingCars = [];

for (let i = 0; i < racingCars.length; i++) {
    socket.on(`car${i + 1}Position`, (args: any) => {
        if (
            parseInt(racingCars[i]!.style.left || "0", 10) >=
            screen.width - 230
        ) {
            gameStateManager.HandleLosingState(
                waitingRoomManager.game!,
                waitingRoomManager.waitingRoom!
            );
        }
        racingCars[i].style.left = args;
    });
}

for (let i = 0; i < racingCars.length; i++) {
    socket.on(`car${i + 1}`, (args: any) => {
        offsetXRacingCars[i] = parseInt(racingCars[i]!.style.left || "0", 10);
        racingCars[i]!.style.left = `${offsetXRacingCars[i] + args}px`;
        if (
            parseInt(racingCars[i]!.style.left || "0", 10) >=
            screen.width - 230
        ) {
            gameStateManager.HandleWinningState(
                waitingRoomManager.game!,
                waitingRoomManager.waitingRoom!
            );
        }
        socket.emit(
            `car${i + 1}Position`,
            gameStateManager.racingCars[i]!.style.left
        );
    });
}

function keyDownHandler(e: KeyboardEvent) {
    if (e.repeat) return;

    if (e.key.toLowerCase() === "w") {
        socket.emit("keypress", { [socket.id]: "w" });
    }
}
