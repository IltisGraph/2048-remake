class tile{
    constructor(number, x, y){
        this.x = x;
        this.y = y;
        this.num = number;
        this.iNum;
        this.getInum();
        this.img = [
            document.getElementById("2"),
            document.getElementById("4"),
            document.getElementById("8"),
            document.getElementById("16"),
            document.getElementById("32"),
            document.getElementById("64"),
            document.getElementById("128"),
            document.getElementById("256"),
            document.getElementById("1024")
        ];
        
    }
    getInum(){
        switch(this.num){
            case 2:
                this.iNum = 0;
                break;
            case 4:
                this.iNum = 1;
                break;
            case 8:
                this.iNum = 2;
                break;
            case 16:
                this.iNum = 3;
                break;
            case 32:
                this.iNum = 4;
                break;
            case 64:
                this.iNum = 5;
                break;
            case 128:
                this.iNum = 6;
                break;
            case 256:
                this.iNum = 7;
                break;
            case 512:
                 //TODO: add 512
                break;
            case 1024:
                this.iNum = 8;
                break;
        }
    }
    draw(){
        ctx.drawImage(this.img[this.iNum], this.x + CENTERX, this.y + CENTERY, getDrawingLengthX(), getDrawingLengthY());
    }
   

}






const ctx = document.getElementById("Screen").getContext("2d");
let ctx2 = document.getElementById("Screen");

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
//const HEIGHT = 500;
//const WIDTH = 500;
const X = 10 + 1;
const Y = 10 + 1;

let Tiles = [];
Tiles.push(new tile(2, Math.floor(Math.random() * (X - 1)) * getDrawingLengthX(), Math.floor(Math.random() * (Y - 1)) * getDrawingLengthY()))
let keyUps = [false, false, false, false];

const CENTERX = Number(WIDTH / 2 - 250);
const CENTERY = Number(HEIGHT / 2 - 250)

ctx2.width = WIDTH;
ctx2.height = HEIGHT;



document.addEventListener("keydown", (event) => {
    let key = event.keyCode;
    

    switch(key){
        case 38:
            if(keyUps[0] != true){
                keyUps[0] = true;
                break;
            }
        case 39:
            if(keyUps[1] != true){
                keyUps[1] = true;
                break;
            }
        case 40:
            if(keyUps[2] != true){
                keyUps[2] = true;
                break;
            }
        case 37:
            if(keyUps[3] != true){
                keyUps[3] = true;
                break;
            }
    }
});

document.addEventListener("keyup", (event) => {
    switch(event.keyCode){
        case 38:
            keyUps[0] = false;
            break;
        case 39:
            keyUps[1] = false;
            break;
        case 40:
            keyUps[2] = false;
            break;
        case 37:
            keyUps[3] = false;
            break;
    }
});


//console.log(getDrawingLengthX());

//DEBUG
//const t1 = new tile(2, 450, 0);

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

    for(let tile of Tiles){
        tile.draw();
    }

    requestAnimationFrame(GameLoop);
}

GameLoop();

function getDrawingLengthX(){
    return Number(500 / (X - 1));
}

function getDrawingLengthY(){
    return Number(500 / (Y - 1));
}