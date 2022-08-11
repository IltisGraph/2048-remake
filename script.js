const ctx = document.getElementById("Screen").getContext("2d");
let ctx2 = document.getElementById("Screen");

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
//const HEIGHT = 500;
//const WIDTH = 500;
const X = 10 + 1;
const Y = 10 + 1;

const CENTERX = Number(WIDTH / 2 - 250);
const CENTERY = Number(HEIGHT / 2 - 250)

ctx2.width = WIDTH;
ctx2.height = HEIGHT;


console.log(getDrawingLengthX());

function GameLoop(dt){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);


    //Hintergrund
    ctx.fillStyle = "#8DB952";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);


    //raster
    ctx.fillStyle = "#CCCCCC";
    //oben nach unten
    for(let x = 0; x < X; x++){
        ctx.fillRect(x * getDrawingLengthX() + CENTERX, CENTERY, 1 , HEIGHT  - CENTERY * 2);
        //console.log("Done ", x)
    }
    //links nach rechts
    for(let y = 0; y < Y; y++){
        ctx.fillRect(CENTERX, y * getDrawingLengthY() + CENTERY, WIDTH - CENTERX * 2, 1);
    }


    ctx.fillStyle = "#f00";
    //ctx.fillRect(WIDTH - CENTERX + 3, 0, CENTERX, 500);

    requestAnimationFrame(GameLoop);
}

GameLoop();

function getDrawingLengthX(){
    return Number(500 / (X - 1));
}

function getDrawingLengthY(){
    return Number(500 / (Y - 1));
}