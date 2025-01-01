

const car1: any = document.getElementById("car1");
const car2: any = document.getElementById("car2");


car1.style.position = 'absolute';
car1.style.left = '80px';
car1.style.top = `${screen.height/2}px`;

car2.style.position = 'absolute';
car2.style.left = '80px';
car2.style.top = `${screen.height/3}px`;
document.addEventListener('keydown', keyDownHandler);

let offsetX_car1: number;
let offsetX_car2: number;


function keyDownHandler(e: KeyboardEvent) {
    if (e.repeat) return;
    if (e.key.toLowerCase() === 'w' && parseInt(car1.style.left ||'0',10) < (screen.width-230)) {
        offsetX_car1 = parseInt(car1.style.left || '0', 10); 
        car1.style.left = `${offsetX_car1+ 10}px`; 
        // socket.emit('the x value of the car is', car1.style.left);
    }
    if (e.key.toLowerCase() === 'm'&& parseInt(car2.style.left ||'0',10) < (screen.width-230)){
        offsetX_car2 = parseInt(car2.style.left || '0', 10);
        car2.style.left = `${offsetX_car2 + 10}px`; 
        // socket.emit('the x value of the car is', car2.style.left);
    }
}

