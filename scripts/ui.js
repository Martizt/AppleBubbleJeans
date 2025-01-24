console.log("UI.js script loaded");
//All UI functions will go here, such as dialogue boxes, menus, map to change location etc.


//The text box for the UI
function UITextBox() 
{
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      ctx.fillRect(60, 800, 1800, 250);
    }
}

//this is for the menu, like checking stats with character, or changing location to visit the characters, very simple
function UIMenuBox()
{
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      ctx.fillRect(1800, 25, 100, 100);
    }
}