export class GameStateManager {
    public winningState: HTMLElement | null;
    public losingState: HTMLElement | null;
    public racingCars: HTMLElement[];
    constructor(
        winningState: string,
        losingState: string,
        racingCarIds: string[] | null = []
    ) {
        this.winningState = document.getElementById(winningState);
        this.losingState = document.getElementById(losingState);
        this.racingCars = [];
        for(let i = 0; i < racingCarIds!.length; i++) {
            const carElement = document.getElementById(racingCarIds![i]);
            if (carElement) {
                this.racingCars.push(carElement);
            }
        }
    }

    public HandleWinningState(
        game: HTMLElement,
        waitingRoom: HTMLElement
    ): void {

        for(let i = 0; i < this.racingCars.length; i++) {
            this.racingCars[i].style.display = "none";
        }
        game!.style.display = "none";
        waitingRoom!.style.display = "none";
        this.winningState!.style.display = "block";
        this.losingState!.style.display = "none";
    }

    public HandleLosingState(
        game: HTMLElement,
        waitingRoom: HTMLElement
    ): void {
        for(let i = 0; i < this.racingCars.length; i++) {
            this.racingCars[i].style.display = "none";
        }
        game!.style.display = "none";
        waitingRoom!.style.display = "none";
        this.winningState!.style.display = "none";
        this.losingState!.style.display = "block";
    }
}
