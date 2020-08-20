

var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

var x = "black",
    y = 6;

function initialize() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    width = canvas.width;
    height = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
}

function color(obj) {
    x = obj;
    if (x == "white") y = 14;
    else y = 2;
}


function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

function erase() {
    var m = confirm("Erase all your hard work?");
    if (m) {
    ctx.clearRect(0, 0, width, height);
    }

}
function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}

function download() {
    var download = document.getElementById("download");
    var image = document.getElementById("myCanvas").toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
}

function setRound() {
    ctx.lineCap = 'round';
    ctx.lineJoin = "round";
    ctx.strokeStyle = '#2b39c0';
}

function setSquare() {
    ctx.lineCap = 'butt';
    ctx.lineJoin = "miter";
    ctx.strokeStyle = '#c0392b';
}

function setLineWidth(e) {
    y = parseInt(e.currentTarget.value);
}

document.getElementById("red").addEventListener("click", () => color("red"))
document.getElementById("orange").addEventListener("click", () => color("orange"))
document.getElementById("silica").addEventListener("click", () => color("yellow"))
document.getElementById("green").addEventListener("click", () => color("green"))
document.getElementById("water").addEventListener("click", () => color("blue"))
document.getElementById("purple").addEventListener("click", () => color("purple"))
document.getElementById("wall").addEventListener("click", () => color("black"))
document.getElementById("void").addEventListener("click", () => color("white"))
document.getElementById("garbage").addEventListener("click", () => erase())
document.getElementById("download").addEventListener("click", () => download())
document.getElementById("round").addEventListener("click", () => setRound())
document.getElementById("square").addEventListener("click", () => setSquare())
document.getElementById("font-dropdown").addEventListener("change", (e) => setLineWidth(e))





initialize();