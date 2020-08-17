Silica is an HTML / JavaScript / webGL / twgl material simulator that renders different materials in browser. Users can click on the 2D Canvas to generate different sand, water, or wall. Each material has different physical properties, and it is up to the user's imagination to play around with the simulation and test how these materials interact with eachother. 

In future releases, this project will include other additional materials and more complex interactions between these materials.

# MVP & Functionality

1. Game Board / Reset Game Board

2. Select canvas with mouse to deploy materials

3. Materials own 'attributes' that dictate how they interact with eachother / gravity

4. Toggle different material types with a material selector at the bottom of the page

# Wireframe

![Image of Silica](https://i.imgur.com/mPsutv4.png)

# Architecture and Technologies

Silica will utilize the following technologies: 

1. JavaScript for game physics / logic

2. HTML for canvas rendering

3. WebGL API for drawing 2D graphics

4. twgl for WebGL QOL improvements

5. CSS for styling

6. Webpack for managing node modules

# Implementation Timeline

## Day 1

1. Have a fully functional project skeleton set up (no code) This means webpack up and running, and file structure set up accordingly.

2. Review online resources regarding utilization of WebGL and twgl.

3. Render anything with a singular click on 2D Canvas.

## Day 2

1. Research implementation of attributes for different material types

2. Write code for 'gravity' for objects that are effected by gravity

3. By end of day, have an object that 'falls' when rendered on the canvas, and interacts with other materials drawn on page

## Day 3

1. Finalize Day 2 goals

2. Fine tune how much sand is created on click, add functionality for mouse hold

3. Improve UI / UX

## Day 4

1. Fine tune day 3 goals

2. BONUS: Add more material types