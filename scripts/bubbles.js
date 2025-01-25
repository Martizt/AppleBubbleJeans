console.log("Bubbles.js script loaded");
//All functions with the characters should go here, such as character appearing, changing assets, talking, reacting. etc.

function displayBubble()
{
    switch(background)
    {
        case 0:
            bubbleIMG.src = "assets/art/bubbles/bubble0.png";
        break;
        case 1:
            bubbleIMG.src = "assets/art/bubbles/bubble1.png";
        break;
        case 2:
            bubbleIMG.src = "assets/art/bubbles/bubble2.png";
        break;
        case 3:
            bubbleIMG.src = "assets/art/bubbles/bubble3.png";
        break;
        case 4:
            bubbleIMG.src = "assets/art/bubbles/bubble4.png";
        break;

    }
}
