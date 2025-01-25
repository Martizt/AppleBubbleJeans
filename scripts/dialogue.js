console.log("Dialogue.js script loaded");
//All things dialogue related go here, we'll see how that goes.
function increaseDialogue()
{
    dialogue = dialogue + 1;
}

function dialogueBubble1()
{
  switch( background)
  {
    case 1:


        break;
    case 2:
        break;
    case 3:
        break;
    case 4:
        break;
    case 5:
        break; 
  }
}




function loadDialogue()
{

    switch( background)
    {

    }
}



let  bubbleEntryDialogue = [
    // sudsana
    [  
        "Hey, I'm just floating around here, waiting for someone who knows how to handle a bubble like me. Are you ready to join me on this float?", 
        "Some bubbles pop faster than others, but I’m here for a slow rise. Are you the type to enjoy the journey, or do you want a quick burst of fun?",
        "Bubbles like me don’t just stick around for anyone. What’s it gonna take for you to prove you’re the one who can handle me?",
        "You know, some bubbles pop after just a moment, but the ones that last, they float and shimmer together forever. What’s your take on that?",
        "You know, I’ve got a lot of layers. Not everyone gets to see all of them… but maybe I’ll let you take a peek if you can handle the pressure", 
        "I’ve been floating around for a while, and let me tell you, not every player can handle the pressure. Think you’re up for the challenge?",
        "I’ve got a lot of sparkle in me, but sometimes I need someone to help me shine brighter. Can you handle the shine, or are you just here for a quiet bubble?"
    
    
    ], 
    // bubblo 
    [
        "", ""
    ], 
    //bubbela
    [
         "", ""
    ], 
    // Bubnald glump
    [
       "", ""
    ], 
    // michael bubbly
    [
         "", ""
    ]
]


function getEntryDiaglogue()
{
    console.log( bubbleEntryDialogue[background][dialogue]);
    return bubbleEntryDialogue[background][dialogue];
}




let bubbleResponseDialogue =[
    
    // sudsana
    [  
        // bad
       [

       ], 
       // mutual
       [

       ],
       // good
       [

       ]
    ], 
    // bubblo 
    [
        // bad
       [

       ], 
       // mutual
       [

       ],
       // good
       [

       ]
    ], 
    //bubbela
    [
        // bad
        [

        ], 
        // mutual
        [

        ],
        // good
        [

        ]
    ], 
    // Bubnald glump
    [
        // bad
       [

       ], 
       // mutual
       [

       ],
       // good
       [

       ]
    ], 
    // michael bubbly
    [
        // bad
       [

       ], 
       // mutual
       [

       ],
       // good
       [

       ]
    ]

]

let playerDialgoue =
[

    // sudsana
    [   
        // bad
       [

       ], 
       // mutual
       [

       ],
       // good
       [

       ]
    ], 
    // bubblo 
    [
        // bad
       [

       ], 
       // mutual
       [

       ],
       // good
       [

       ]
    ], 
    //bubbela
    [
        // bad
       [

       ], 
       // mutual
       [

       ],
       // good
       [

       ]
    ], 
    // Bubnald glump
    [
        // bad
       [

       ], 
       // mutual
       [

       ],
       // good
       [

       ]
    ], 
    // michael bubbly
    [
    
       // bad
       [

       ], 
       // mutual
       [

       ],
       // good
       [

       ]
        
    ]
]


