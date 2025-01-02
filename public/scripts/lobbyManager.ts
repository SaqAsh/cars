export class WaitingRoomManager {
    public socket: any;
    public waitingRoom: HTMLElement | null;
    public game: HTMLElement | null;

    constructor(socket: any, waitingRoomID: string, gameId: string) {
        this.socket = socket;
        this.waitingRoom = document.getElementById(waitingRoomID);
        this.game = document.getElementById(gameId);
        this.initializeSocketEvents();
    }

    private showGame(): void {
        try {
            if (this.game && this.waitingRoom) {
                this.game.style.display = "block";
                this.waitingRoom.style.display = "none";
            }
        } catch (error) {
            console.error("Error in showGame function:", error);
        }
    }

    private showWaitingRoom(): void {
        try {
            if (this.game && this.waitingRoom) {
                this.game.style.display = "none";
                this.waitingRoom.style.display = "block";
            }
        } catch (error) {
            console.error("Error in showGame function:", error);
        }
    }

    private initializeSocketEvents(): void {
        this.socket.on("waitingLobby", (data: any) => {
            let message = data.message;
            if (
                message ===
                "You are in the waiting lobby. Please wait for a player to disconnect."
            ) {
                this.showWaitingRoom();
            } else {
                this.showGame();
            }
        });
        this.socket.on("connect", () => {
            console.log(this.socket.id);
        });
    }
}
