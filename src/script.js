
canvas = document.getElementById('myCanvas');
gl = canvas.getContext('webgl');

const vertexData = [
    1.0, -1.0, 1.0,
    -1.0, -1.0, -1.0,
    1.0, -1.0, -1.0,

    1.0, -1.0, 1.0,
    -1.0, -1.0, 1.0,
    -1.0, -1.0, -1.0,

    1.0, 1.0, -1.0,
    -1.0, -1.0, -1.0,
    -1.0, 1.0, -1.0, 
    
    1.0, 1.0, -1.0,
    1.0, -1.0, -1.0,
    -1.0, -1.0, -1.0,

    1.0, 1.0, 1.0,
    1.0, 1.0, -1.0,
    -1.0, 1.0, -1.0,

    1.0, 1.0, 1.0,
    -1.0, 1.0, -1.0,
    -1.0, 1.0, 1.0,

    -1.0, -1.0, -1.0,
    -1.0, -1.0, 1.0,
    -1.0, 1.0, 1.0, 

    -1.0, -1.0, -1.0,
    -1.0, 1.0, 1.0,
    -1.0, 1.0, -1.0,

    -1.0, 1.0, 1.0,
    -1.0, -1.0, 1.0,
    1.0, -1.0, 1.0,

    1.0, 1.0, 1.0,
    1.0, -1.0, -1.0,
    1.0, 1.0, -1.0,

    1.0, -1.0, -1.0,
    1.0, 1.0, 1.0,
    1.0, -1.0, 1.0,

    1.0, 1.0, 1.0,
    -1.0, 1.0, 1.0,
    1.0, -1.0, 1.0
];

// const colorData = [
//     1, 0, 0, // V1.color
//     0, 1, 0, // V2.color
//     0, 0, 1, // V3.color
// ];

function randColor(){
    return [Math.random(), Math.random(), Math.random()];
}

let colorData = [];
for (let i = 0; i < 6; i++) {
    let fc = randColor();
    for (let v = 0; v < 6; v++) {
        colorData.push(...fc);
    }
}
const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);

const colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData), gl.STATIC_DRAW);


const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, `
precision mediump float;

attribute vec3 position;
attribute vec3 color;
varying vec3 vColor;

uniform mat4 matrix;

void main() {
    vColor = color;
    gl_Position = matrix * vec4(position, 1);
}
`); //this is a string because it is run on openGL shading language (runs on GPU, gl will compile string for us)
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER); //gl_FragColor = vec4(rgba)
gl.shaderSource(fragmentShader, `
precision mediump float;
varying vec3 vColor;

void main() {
    gl_FragColor = vec4(vColor, 1);
}
`);
gl.compileShader(fragmentShader);

const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

const positionLocation = gl.getAttribLocation(program, `position`);
gl.enableVertexAttribArray(positionLocation);
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

const colorLocation = gl.getAttribLocation(program, `color`);
gl.enableVertexAttribArray(colorLocation);
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);


gl.useProgram(program);
gl.enable(gl.DEPTH_TEST);
const uniformLocations = {
    matrix: gl.getUniformLocation(program, `matrix`),
}

const matrix = glMatrix.mat4.create();
// glMatrix.mat4.translate(matrix, matrix, [.2, .5, 0]);
glMatrix.mat4.scale(matrix, matrix, [0.2, 0.2, 0.2]);

function animate(){
    glMatrix.mat4.rotateZ(matrix, matrix, Math.PI / 90);
    glMatrix.mat4.rotateX(matrix, matrix, Math.PI / 90);

    gl.uniformMatrix4fv(uniformLocations.matrix, false, matrix);
    gl.drawArrays(gl.TRIANGLES, 0, vertexData.length / 3);
    requestAnimationFrame(animate);
}

animate();