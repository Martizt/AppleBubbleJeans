//This is for the intro scene, game, then end screen!//this is the intro scene/play game


function introMoment()
{
    ctx.drawImage(titleScreenIMG, 0, 0);
    if (MouseX >= 700 && MouseX <= 1200 && MouseY >= 450 && MouseY <= 600)
    {
        scene = 1;
    }
}

// make end scenes for the game below, so check attraction, and based on that give ending

function endingMoment()
{
    if (affection <= 3)
    {
        endingIMG.src = "assets/art/player/badending.png"
    }
    if (affection <= 9 && affection > 3)
    {
        endingIMG.src = "assets/art/player/neutralending.png"
    }
    if (affection > 9)
    {
        endingIMG.src = "assets/art/player/goodending.png"
    }
}
//also add a date button once all dialogue is expended
//also finally add names above text boxes to characters