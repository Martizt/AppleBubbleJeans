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




let bubbleResponseDialogue =[
    
    // sudsana
    [  
        // bad
       [

        "Oof, ouch, that stings a little. But hey, I’m tough—maybe I can change your mind. Stick around, I’ll show you I’m not just any bubble.",
        "Quick pop, huh? Alright, well, not everyone’s cut out for a slow rise. I guess we’ll have a brief moment, and I’ll leave you with something to remember.",
        "Not here for a challenge? Hmm… well, I guess not every bubble is for everyone. But if you change your mind, I’ll be floating around.",
        "A quick thrill, huh? Well, not every bubble is meant to last. We can have a flashy moment, but if that’s all you’re looking for, I’ll float off and leave you with a pop.",
        "Not into mystery? Fair enough. Some bubbles are better left unexplored, I guess. But I’ll float off if you’re not ready for what’s inside.",
        "Well, if you’re not feeling it, I can’t force you. Maybe I’m just too much bubble for you to handle. I’ll float off… but no hard feelings.",
        "Low-key? Hmm, I get it, not everyone’s ready for the spotlight. Maybe I’ll float on by quietly, no big show. But hey, I’ll be here if you change your mind.",
       ], 
       // mutual
       [
            
        "Well, that’s fair. A little hesitation is normal. We’ll float together and see how things go. No pressure, just a fun little bubble adventure.",
        "I like your open mind. Let’s see what happens—we could have a fun float, or we could pop in a spectacular way. Who knows?",
        "I get it. No need to rush. We’ll take our time, float along, and see where this bubble takes us. It could turn into something pretty sweet.",
        "That’s fair. Sometimes, you just need to float and see where it takes you. No promises, just bubbles. But maybe something will come of it.",
        "Curious, huh? I like that. Maybe we’ll float a little longer, and when the time’s right, I’ll show you what makes me tick.",
        "Fair enough, no need to rush it. We’ll see where the current takes us. No pressure—just let the bubbles lead the way.",
        "I like that. A little sparkle never hurt anyone, but I’ll keep it balanced. Let’s see if we can find that perfect bubble shine together.",

       ],
       // good
       [
        "Ah, music to my bubbly ears! Looks like we’re already off to a good start. Let’s float to the top and make some bubbles worth talking about!",
        "Ah, now you’re talking my language. A long float, huh? That sounds like the perfect ride. I’ll take you all the way up and let’s make this the best bubble we’ve ever seen.",
        "Oh, now that’s the spirit! A challenge makes everything more interesting. Let’s see if you can handle all this bubbly energy. I’ve got layers you’ll want to explore.",
        "Ah, now we’re on the same page! A long float together, seeing how far we can rise… that’s my kind of bubble. Let’s make something lasting here.",
        "Oh, you want to see what’s beneath the surface? I like your boldness. Get ready—this bubble’s got a lot more to offer than you might think.",
        "Now you’re speaking my language! I like someone who can handle the heat. Let’s turn up the pressure and see if we both can float to the top.",
        "Oh, now you’re talking! Let’s light up the sky and make this bubble shine brighter than ever. I’m ready to sparkle together.",
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
            "I’m not sure I’m into bubbles. They’re too fragile for me.", 
            "I don’t have time for slow. I’m just here for the pop.", 
            "I don’t need to prove anything. I’m not here for a challenge.",
            "I’m just here for the quick thrill, not looking for anything lasting.",
            "I’m not really into the whole mystery thing.",
            "Honestly, I don’t think I can handle the pressure. I’m not feeling it.",
            "I’m not really looking for anything too flashy. I prefer my bubbles low-key."
       ], 
       // mutual
       [
            "I mean, I guess I could give it a shot.",
            "I’m okay with either. We’ll see where it goes.",
            "Well, let’s see if we can make it work and float along.",
            "I don’t know. Maybe I’m just enjoying the moment for now.",
            "I’m curious, but no rush to reveal everything just yet.",
            "I’m not sure. But I’m open to seeing what happens.",
            "I don’t mind a little sparkle, but I’m not looking to be blinded."

       ],
       // good
       [
            "I’ve been looking for the right bubble all day. Let’s do this!",
            "I’m definitely in for the long float. Let’s see how high we can go!",
            "I love a challenge. I’m in, let’s see if I can keep up with you.",
            "I’m all about the long float. Let’s see if we can make it last.",
            "I’m intrigued. Show me what’s inside.",
            "Bring it on! I love a good challenge. Let’s see what you’ve got!",
            "I can handle sparkle and shine! Let’s light this up together."

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



function textChange()
{
    if( conversationStatus == 0)
    {
        dialogueText = bubbleEntryDialogue[background][dialogue];
        conversationStatus++;
    }
    else
    {
        dialogueText = bubbleResponseDialogue[background][dialogue][buttonPressed];
        conversationStatus = 0;
    }

    response1Text = playerDialgoue[background][0][dialogue];
    response2Text = playerDialgoue[background][1][dialogue];
    response3Text = playerDialgoue[background][2][dialogue];
}
