console.log("Bubbles.js script loaded");
//All functions with the characters should go here, such as character appearing, changing assets, talking, reacting. etc.

function displayBubble()
{
    switch(background)
    {
        case 0:
            bubbleIMG.src = "assets/art/bubbles/bubble0.png";
            dialogue = bubble1talk;
            affection = bubble1affection;
        break;
        case 1:
            bubbleIMG.src = "assets/art/bubbles/bubble1.png";
            dialogue = bubble2talk;
            affection = bubble2affection;
        break;
        case 2:
            bubbleIMG.src = "assets/art/bubbles/bubble2.png";
            dialogue = bubble3talk;
            affection = bubble3affection;
        break;
        case 3:
            bubbleIMG.src = "assets/art/bubbles/bubble3.png";
            dialogue = bubble4talk;
            affection = bubble4affection;
        break;
        case 4:
            bubbleIMG.src = "assets/art/bubbles/bubble4.png";
            dialogue = bubble5talk;
            affection = bubble5affection;
        break;

    }
}
