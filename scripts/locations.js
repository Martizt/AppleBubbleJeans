console.log("Locations.js script loaded");
//All functions relating to changing locations go here
//For Map functions go to Global.js

//This checks if map is opened, then allows for changing of location, currently only changes the bg image
//And its for ANYWHERE on the map FOR NOW
//This will have to be nearly mostly rewritten somewhat when we get a map and locations, but works for 2 locations
function changeLocation()
{
    if(mapOpen == 1)
    {
        //kitchen
        if(MouseX >= 480 && MouseX <= 800 && MouseY >= 560 && MouseY <= 700)
        {
            backgroundIMG.src = "assets/art/locations/kitchen.png";
            background = 0;
            mapOpen = 0;
            textChange();
        }
        //garage
        if(MouseX >= 820 && MouseX <= 1250 && MouseY >= 560 && MouseY <= 700)
        {
            backgroundIMG.src = "assets/art/locations/garage.png";
            background = 1;
            mapOpen = 0;
            textChange();
        }
        //bedroom
        if(MouseX >= 475 && MouseX <= 800 && MouseY >= 400 && MouseY <= 540)
        {
            backgroundIMG.src = "assets/art/locations/bedroom.png";
            background = 2;
            mapOpen = 0;
            textChange();
        }
        //office
        if(MouseX >= 815 && MouseX <= 1250 && MouseY >= 400 && MouseY <= 540)
        {
            backgroundIMG.src = "assets/art/locations/office.png";
            background = 3;
            mapOpen = 0;
            textChange();
        }
        //attic
        if(MouseX >= 475 && MouseX <= 800 && MouseY >= 270 && MouseY <= 390)
        {
            backgroundIMG.src = "assets/art/locations/attic.png";
            background = 4;
            mapOpen = 0;
            textChange();
        }
    }
}

//400,150,1200,600