// all of this stuff will be abstracted to the backend


document.addEventListener('keydown', keyDownHandler);


    const car1: HTMLElement | null = document.getElementById("car1");
    const car2: HTMLElement | null= document.getElementById("car2");

    const winningState: HTMLElement | null = document.getElementById('winning-state')
    const losingState: HTMLElement | null = document.getElementById('losing-state');

    winningState!.style.display = 'none';
    losingState!.style.display = 'none';
    car1!.style.position = 'absolute';
    car1!.style.left = '80px';
    car1!.style.top = `${screen.height/2}px`;

    car2!.style.position = 'absolute';
    car2!.style.left = '80px';
    car2!.style.top = `${screen.height/3}px`;

    let offsetX_car1: number;
    let offsetX_car2: number;

    //handle winner and loser state

    function HandleWinningState(){
        car1!.style.display = 'none';
        car2!.style.display = 'none';
        game!.style.display = 'none';
        winningState!.style.display ='block';
        losingState!.style.display = 'none';
    }
    function HandleLosingState() {
        car1!.style.display = 'none';
        car2!.style.display = 'none';
        game!.style.display = 'none';
        winningState!.style.display ='none';
        losingState!.style.display = 'block';
    }
    //this is the other user telling me that I lost cuz of his position
    socket.on("car1Position", (args:any)=>{
        if(parseInt(car1!.style.left || '0', 10) >=(screen.width -230)) HandleLosingState();
        car1!.style.left = args;
    });
    
    socket.on("car2Position", (args:any)=>{
        if(parseInt(car2!.style.left || '0', 10) >=(screen.width -230)) HandleLosingState();
        car2!.style.left = args;
    });

    socket.on("car1", (arg: any) =>{
        offsetX_car1 = parseInt(car1!.style.left || '0', 10);
        car1!.style.left = `${offsetX_car1 + arg}px`;
        if(parseInt(car1!.style.left || '0', 10) >=(screen.width -230)) HandleWinningState();
        socket.emit("car1Position", car1!.style.left);
    });

    socket.on("car2", (arg: any)=>{
        offsetX_car2 = parseInt(car2!.style.left || '0', 10);
        car2!.style.left = `${offsetX_car2 + arg}px`;
        if(parseInt(car2!.style.left || '0', 10) >=(screen.width -230)) HandleWinningState();
        socket.emit("car2Position", car2!.style.left);
    })

function keyDownHandler(e: KeyboardEvent){
    if(e.repeat) return;

    if(e.key.toLowerCase() ==='w'){
        socket.emit("keypress", { [socket.id]: "w" });
    }

}