var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

var x = "silica",
    y = 2;

function initialize() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
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
    switch (obj.id) {
        case "silica":
            x = "silica";
            break;
        case "wall":
            x = "wall";
            break;
        case "water":
            x = "water";
            break;
        case "void":
            x = "void";
            break;
    }
    if (x == "void") y = 14;
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
    // var m = confirm("Want to clear");
    // if (m) {
        ctx.clearRect(0, 0, width, height);
        document.getElementById("myCanvas").style.display = "none";
    // }
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

console.log("hello");
initialize();

{/* <body onload="initialize()"> */}
 

        // <div style="position:absolute;top:12%;left:43%;">Choose Color</div>
        // <div style="position:absolute;top:15%;left:45%;width:10px;height:10px;background:green;" id="green" onclick="color(this)"></div>
        // <div style="position:absolute;top:20%;left:43%;">Eraser</div>
        // <input type="button" value="save" id="btn" size="30" onclick="save()" style="position:absolute;top:55%;left:10%;">
        // <input type="button" value="clear" id="clr" size="23" onclick="erase()" style="position:absolute;top:55%;left:15%;">
