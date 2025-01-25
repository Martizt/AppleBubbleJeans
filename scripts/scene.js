//This is for the intro scene, game, then end screen!//this is the intro scene/play game


function introMoment()
{
    ctx.drawImage(titleScreenIMG, 0, 0);
    if (MouseX >= 700 && MouseX <= 1200 && MouseY >= 450 && MouseY <= 600)
    {
        scene = 1;
    }
}