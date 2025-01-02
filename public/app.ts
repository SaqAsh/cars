// all of this stuff will be abstracted to the backend


document.addEventListener('keydown', keyDownHandler);


    const car1: any = document.getElementById("car1");
    const car2: any = document.getElementById("car2");

    car1.style.position = 'absolute';
    car1.style.left = '80px';
    car1.style.top = `${screen.height/2}px`;

    car2.style.position = 'absolute';
    car2.style.left = '80px';
    car2.style.top = `${screen.height/3}px`;

    let offsetX_car1: number;
    let offsetX_car2: number;

// function keyDownHandler(e: KeyboardEvent) {
//     if (e.repeat) return;
//     if (e.key.toLowerCase() === 'w' && parseInt(car1.style.left ||'0',10) < (screen.width-230)) {
//         offsetX_car1 = parseInt(car1.style.left || '0', 10); 
//         car1.style.left = `${offsetX_car1+ 20}px`; 
//         // socket.emit('the x value of the car is', car1.style.left);
//     }
//     if (e.key.toLowerCase() === 'm'&& parseInt(car2.style.left ||'0',10) < (screen.width-230)){
//         offsetX_car2 = parseInt(car2.style.left || '0', 10);
//         car2.style.left = `${offsetX_car2 + 20}px`; 
//         // socket.emit('the x value of the car is', car2.style.left);
//     }
// }
    socket.on("car1Position", (args:any)=>{
        console.log(args);
        car1.style.left = args;
    });
    
    socket.on("car2Position", (args:any)=>{
        console.log(args);
        car2.style.left = args;
    });

    socket.on("car1", (arg: any) =>{
        offsetX_car1 = parseInt(car1.style.left || '0', 10);
        car1.style.left = `${offsetX_car1 + arg}px`;
        socket.emit("car1Position", car1.style.left);
    });

    socket.on("car2", (arg: any)=>{
        offsetX_car2 = parseInt(car2.style.left || '0', 10);
        car2.style.left = `${offsetX_car2 + arg}px`;
        socket.emit("car2Position", car2.style.left);
    })

function keyDownHandler(e: KeyboardEvent){
    if(e.repeat) return;

    if(e.key.toLowerCase() ==='w'){
        socket.emit("keypress", { [socket.id]: "w" });
    }

}