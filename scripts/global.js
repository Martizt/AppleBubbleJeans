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
const context = canvas.getContext("2d");
//mouse click event, recognsised when mouse is clicked.
canvas.addEventListener("click", function(){console.log("meow");});














////-----BIG GAME FUNCTIONS-----////
//These functions should be last, as they call upon previous snippets of code, make sure to put new functions in update() otherwise it wont work!

//draws any nessecary sprites, or whatever
function draw()
{
    //console.log("I AM DRAWING");
}

//calls and updates all functions in the game
function update()
{
    UITextBox();
    UIMenuBox();
    //console.log("I AM UPDATING");
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

