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
let titleScreenIMG = new Image();
titleScreenIMG.src = "assets/art/menu/titlescreen.png";
let mapIMG = new Image();
mapIMG.src = "assets/art/menu/map.png";
let bubbleMeter = new Image();
bubbleMeter.src = "assets/art/menu/bubblemeter.png";
let mapIconIMG = new Image();
mapIconIMG.src = "assets/art/menu/mapIcon.png";
let textBoxIMG = new Image();
textBoxIMG.src = "assets/art/menu/textBox.png";

let backgroundIMG = new Image ();
backgroundIMG.src = "assets/art/locations/kitchen.png";
let bubbleIMG = new Image ();
bubbleIMG.src = "assets/art/bubbles/bubble1.png";

let endingIMG = new Image();
endingIMG.src = "assets/art/endings/neutral.png";

//mouse position coords, needed to open and close map, and then click to locations
let MouseX = 0;
let MouseY = 0;
//map check! it helps open and close it, also select locations when the map IS open
// 0 for close, 1 for open (I DONT DO BOOLEONS OKAY?)
let mapOpen = 0;
//this is for changing locations, as player moves this value changes dont worry about it :P
let background = 0;

//all the dialogue variables
let dialogue = 0;
let dialogueText = bubbleEntryDialogue[0][0];
let responseNPCText = bubbleResponseDialogue[0][0][0];
let response1Text = playerDialgoue[0][0][0];
let response2Text = playerDialgoue[0][1][0];
let response3Text = playerDialgoue[0][2][0];
let nameText = " ";
let finisherText = " ";
let buttonPressed = -1;


//all the affection based variables
let bubble1affection = 5;
let bubble2affection = 5;
let bubble3affection = 5;
let bubble4affection = 5;
let bubble5affection = 5;
let affection = 5;

//variables for keeping track of who you talked to and how much
let bubble1talk = 0;
let bubble2talk = 0;
let bubble3talk = 0;
let bubble4talk = 0;
let bubble5talk = 0;

//keeps track of if you are responding or they are.
let conversationStatus = 0;

let scene = 0;

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
//ctx.drawImage(textBoxIMG, 80, 950, 550, 100);
//ctx.drawImage(textBoxIMG, 680, 950, 550, 100);
//ctx.drawImage(textBoxIMG, 1280, 950, 550, 100);
function answerBox1()
{
    if (MouseX >= 80 && MouseX <= 630 && MouseY >= 950 && MouseY <= 1050 && dialogue <=4)
    {
        MouseX = 0;
        buttonPressed = 0;
        console.log("button 1 clicked");
        conversationStatus = 1;
        if (background == 0)
        {
            bubble1talk++;
            bubble1affection--;
        }
        if (background == 1)
        {
            bubble2talk++;
            bubble2affection--;
        }
        if (background == 2)
        {
            bubble3talk++;
            bubble3affection--;
        }
        if (background == 3)
        {
            bubble4talk++;
            bubble4affection--;
        }
        if (background == 4)
        {
            bubble5talk++;
            bubble5affection--;
        }
    }
}
function answerBox2()
{
    if (MouseX >= 680 && MouseX <= 1230 && MouseY >= 950 && MouseY <= 1050 && dialogue <=4)
        {
            MouseX = 0;
            buttonPressed = 1;
            console.log("button 2 clicked");
            conversationStatus = 1;
            if (background == 0)
            {
                bubble1talk++;
                bubble1affection = bubble1affection + 0.5;
            }
            if (background == 1)
            {
                bubble2talk++;
                bubble2affection = bubble2affection + 0.5;
            }
            if (background == 2)
            {
                bubble3talk++;
                bubble3affection = bubble3affection + 0.5;
            }
            if (background == 3)
            {
                bubble4talk++;
                bubble4affection = bubble4affection + 0.5;
            }
            if (background == 4)
            {
                bubble5talk++;
                bubble5affection = bubble5affection + 0.5;
            }
        }
}
function answerBox3()
{
    if (MouseX >= 1280 && MouseX <= 1830 && MouseY >= 950 && MouseY <= 1050 && dialogue <=4)
        {
            MouseX = 0;
            buttonPressed = 2;
            console.log("button 3 clicked");
            conversationStatus = 1;
            if (background == 0)
            {
                bubble1talk++;
                bubble1affection++;
            }
            if (background == 1)
            {
                bubble2talk++;
                bubble2affection++;
            }
            if (background == 2)
            {
                bubble3talk++;
                bubble3affection++;
            }
            if (background == 3)
            {
                bubble4talk++;
                bubble4affection++;
            }
            if (background == 4)
            {
                bubble5talk++;
                bubble5affection++;
            }
        }
}

function dateButton()
{
    if (MouseX >= 1600 && MouseX <= 1850 && MouseY >= 660 && MouseY <= 740 && dialogue == 5)
    {
        scene = 2;
        MouseX = 0;
    }
}

// MOUSE FUNCTION
//it gets mouse position necessary for opening map, changing location etc.
function getMousePosition(event)
{
    MouseX = event.clientX;
    MouseY = event.clientY;
    textChange();
    if (conversationStatus == 1)
    {
        conversationStatus = 0;
    }
    console.log(MouseX,MouseY);
}







////-----BIG GAME FUNCTIONS-----////
//These functions should be last, as they call upon previous snippets of code, make sure to put new functions in update() otherwise it wont work!

//draws any nessecary sprites, or whatever
function draw()
{
    if (scene == 1)
    {
        ctx.drawImage(backgroundIMG,0,0,1920, 1080);
        ctx.drawImage(bubbleIMG, 450, 100, 900,1200);
    }

    //draws the map ON TOP when it should be draw, refer to the functions openMap, closeMap
    if (mapOpen == 1)
    {
        ctx.drawImage(mapIMG,400,150,1200,600);
    }
}

//calls and updates all functions in the game
function update()
{
    if (scene == 0)
    {
        introMoment();
    }
    if (scene == 1)
    {
        UITextBox();
        UIMenuBox();
        changeLocation();
        displayBubble();
        openMap();
        closeMap();
        answerBox1();
        answerBox2();
        answerBox3();
        finishText();
        dateButton();
    }
    if (scene == 2)
    {
        ctx.drawImage(endingIMG,0,0,1920, 1080);
        ctx.drawImage(bubbleIMG, 150, 50, 800,1100);
        endingMoment();
    }
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
canvas.addEventListener("click", textChange());

