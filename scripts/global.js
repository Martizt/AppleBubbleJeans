console.log("Global.js script loaded");
////doesnt allow for arrow keys and space bar to move the screen
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

////------------------------------ALL VARIABLES USED ACROSS THE GAME SHOULD BE DECLARED HERE AS WELL AS MAIN FUNCTIONS TO GET THE GAME WORKING.

//-- VARIABLES --//

////canvas setup
//gets canvas from the html
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//mouse click event, recognsised when mouse is clicked.
canvas.addEventListener("click", getMousePosition);

//image variables so a lot
let mapIMG = new Image();
mapIMG.src = "assets/art/menu/map.png";
let mapIconIMG = new Image();
mapIconIMG.src = "assets/art/menu/mapIcon.png";
let textBoxIMG = new Image();
textBoxIMG.src = "assets/art/menu/textBox.png";

let backgroundIMG = new Image ();
backgroundIMG.src = "assets/art/locations/background1.png";
let bubbleIMG = new Image ();
bubbleIMG.src = "assets/art/bubbles/bubble1.png";

//mouse position coords, needed to open and close map, and then click to locations
let MouseX = 0;
let MouseY = 0;
//map check! it helps open and close it, also select locations when the map IS open
// 0 for close, 1 for open (I DONT DO BOOLEONS OKAY?)
let mapOpen = 0;
//this is for changing locations, as player moves this value changes dont worry about it :P
let background = 0;

let dialogue = 0;
let dialogueText = " ";






////----------------- MAP FUNCTIONS
//function for opening the map
//it checks if click is within bounds, flips homemade bool, and resets mouse so its not in a cycle, trust me it works.
function openMap()
{
    if (MouseX >= 1800 && MouseX <= 1900 && MouseY >= 25 && MouseY <= 125 && mapOpen == 0)
    {
        mapOpen = 1;
        MouseX = 0;
        console.log("map opened");
    }
}
//function for closing the map
// same as open but in reverse :O
function closeMap()
{
    if (MouseX >= 1800 && MouseX <= 1900 && MouseY >= 25 && MouseY <= 125 && mapOpen == 1)
    {
        mapOpen = 0;
        MouseX = 0;
        console.log("map closed");
    }
}


// MOUSE FUNCTION
//it gets mouse position necessary for opening map, changing location etc.
function getMousePosition(event)
{
    MouseX = event.clientX;
    MouseY = event.clientY;
    console.log(MouseX,MouseY);
}








////-----BIG GAME FUNCTIONS-----////
//These functions should be last, as they call upon previous snippets of code, make sure to put new functions in update() otherwise it wont work!

//draws any nessecary sprites, or whatever
function draw()
{
    ctx.drawImage(backgroundIMG,0,0,1920, 1080);

    //draws the map ON TOP when it should be draw, refer to the functions openMap, closeMap
    if (mapOpen == 1)
    {
        ctx.drawImage(mapIMG,400,150,1200,600);
    }
}

//calls and updates all functions in the game
function update()
{
    UITextBox();
    UIMenuBox();
    changeLocation();
    openMap();
    closeMap();
    dialogueBubble1();
    getEntryDiaglogue();
}

//should be called LAST
//draws and updates the game 60fps for a no animation game BABY!
function gameLoop()
{

    draw();
    update();

    requestAnimationFrame(gameLoop);
}
window.requestAnimationFrame(gameLoop);

