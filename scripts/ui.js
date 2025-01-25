console.log("UI.js script loaded");
//All UI functions will go here, such as dialogue boxes, menus, map to change location etc.


//The text box for the UI
function UITextBox() 
{
    if (canvas.getContext) {
      ctx.drawImage(textBoxIMG, 60, 800, 1800, 250);
      ctx.font = "50px Arial";
      ctx.fillText(dialogueText, 70, 850);
    }
}

//this is for the menu, like checking stats with character, or changing location to visit the characters, very simple
function UIMenuBox()
{
    if (canvas.getContext) {
      ctx.drawImage(mapIconIMG, 1800, 25, 100, 100);
    }
}

