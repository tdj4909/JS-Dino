var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var img2 = new Image();
img2.src = 'dino.webp';

var dino = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
        // ctx.fillStyle = 'green';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img2, this.x, this.y);
    }
}

var img1 = new Image();
img1.src = 'cactus.webp'


class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        // ctx.fillStyle = 'red';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img1, this.x, this.y);
    }
}



var timer = 0;
var cactus여러개 = [];
var 점프timer = 0;
var animation;

function 프레임마다실행() {
    animation = requestAnimationFrame(프레임마다실행);
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (timer % 240 === 0) {
        var cactus = new Cactus();
        cactus여러개.push(cactus);
    }

    cactus여러개.forEach((a, i, o) => {
        if (a.x < 0) {
            o.splice(i, 1);
        }
        a.x--;

        충돌확인(dino, a);

        a.draw();
    });

    if (점프중 == true) {
        dino.y--;
        점프timer++;
    }
    if (점프중 == false) {
        if (dino.y < 200) {
            dino.y++;
        }
    }
    if (점프timer > 100) {
        점프중 = false;
        점프timer = 0;
    }

    dino.draw();
}

프레임마다실행();

function 충돌확인(dino, cactus){
    var x축차이 = cactus.x - (dino.x + dino.width);
    var y축차이 = cactus.y - (dino.y + dino.height);
    if(x축차이 < 0 && y축차이 < 0){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animation);
    }
    
}




var 점프중 = false;
document.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
        점프중 = true;
    }
})