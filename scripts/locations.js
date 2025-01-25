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
        if(MouseX >= 400 && MouseX <= 1600 && MouseY >= 150 && MouseY <= 750)
        {
            switch(background)
            {
                case 0:
                    backgroundIMG.src = "assets/art/locations/background2.png";
                    background = 1;
                    mapOpen = 0;
                break;
                case 1: 
                    backgroundIMG.src = "assets/art/locations/background1.png";
                    background = 0;
                    mapOpen = 0;
                break;
            }
        }
    }
}

//400,150,1200,600