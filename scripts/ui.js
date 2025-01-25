console.log("UI.js script loaded");
//All UI functions will go here, such as dialogue boxes, menus, map to change location etc.


//The text box for the UI
function UITextBox() 
{
    if (canvas.getContext) {

      dialogueText = bubbleEntryDialogue[background][dialogue];
      ctx.drawImage(textBoxIMG, 60, 750, 1800, 180);
      ctx.drawImage(textBoxIMG, 80, 950, 550, 100);
      ctx.drawImage(textBoxIMG, 680, 950, 550, 100);
      ctx.drawImage(textBoxIMG, 1280, 950, 550, 100);

      ctx.font = "40px Arial";
      ctx.fillStyle = "black";

      ctx.fillText(dialogueText, 70, 800, 1790);

      ctx.font = "30px Arial";
      ctx.fillStyle = "black";

      ctx.fillText(response1Text, 90, 1000, 540);
      ctx.fillText(response2Text, 690, 1000, 540);
      ctx.fillText(response3Text, 1290, 1000, 540);

      if (dialogue <= 4)
      {
      if (conversationStatus == 1)
        {
          responseNPCText = bubbleResponseDialogue[background][buttonPressed][dialogue];
          ctx.drawImage(textBoxIMG, 60, 750, 1800, 300);
          ctx.font = "40px Arial";
          ctx.fillStyle = "black";

          ctx.fillText(responseNPCText, 70, 800, 1790);
        }
      }
      else
      {
          ctx.drawImage(textBoxIMG, 60, 750, 1800, 300);
          ctx.font = "40px Arial";
          ctx.fillStyle = "black";

          ctx.fillText(finisherText, 70, 800, 1790);
      }
    }
}

//this is for the menu, like checking stats with character, or changing location to visit the characters, very simple
function UIMenuBox()
{
    if (canvas.getContext) {
      ctx.drawImage(mapIconIMG, 1800, 25, 100, 100);
      ctx.drawImage(bubbleMeter, 25, 25, 100, 100);
      ctx.fillStyle = "black";
      ctx.fillRect(150,25,520,100);
      ctx.fillStyle = "cyan";
      ctx.fillRect(160,30,(50 * affection),90);
      ctx.fillStyle = "blue";
      ctx.font = "60px Arial";
      ctx.fillText("Suddy Meter", 160, 100);
    }
}

