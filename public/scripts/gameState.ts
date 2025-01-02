export class GameStateManager {
    public winningState: HTMLElement | null;
    public losingState: HTMLElement | null;
    public racingCar1: HTMLElement | null;
    public racingCar2: HTMLElement | null;

    constructor(
        winningState: string,
        losingState: string,
        racingCar1: string,
        racingCar2: string
    ) {
        this.winningState = document.getElementById(winningState);
        this.losingState = document.getElementById(losingState);
        this.racingCar1 = document.getElementById(racingCar1);
        this.racingCar2 = document.getElementById(racingCar2);
    }

    public HandleWinningState(
        game: HTMLElement,
        waitingRoom: HTMLElement
    ): void {
        this.racingCar1!.style.display = "none";
        this.racingCar2!.style.display = "none";
        game!.style.display = "none";
        waitingRoom!.style.display = "none";
        this.winningState!.style.display = "block";
        this.losingState!.style.display = "none";
    }

    public HandleLosingState(
        game: HTMLElement,
        waitingRoom: HTMLElement
    ): void {
        this.racingCar1!.style.display = "none";
        this.racingCar2!.style.display = "none";
        game!.style.display = "none";
        waitingRoom!.style.display = "none";
        this.winningState!.style.display = "none";
        this.losingState!.style.display = "block";
    }
}
