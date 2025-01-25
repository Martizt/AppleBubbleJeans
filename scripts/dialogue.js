console.log("Dialogue.js script loaded");
//All things dialogue related go here, we'll see how that goes.


let bubbleEntryDialogue = [
    // Sudsana
    [
        "Hey, I'm just floating around here, waiting for someone who knows how to handle a bubble like me. Are you ready to join me on this float?",
        "Some bubbles pop faster than others, but I’m here for a slow rise. Are you the type to enjoy the journey, or do you want a quick burst of fun?",
        "Bubbles like me don’t just stick around for anyone. What’s it gonna take for you to prove you’re the one who can handle me?",
        "You know, some bubbles pop after just a moment, but the ones that last, they float and shimmer together forever. What’s your take on that?",
        "I’ve got a lot of sparkle in me, but sometimes I need someone to help me shine brighter. Can you handle the shine, or are you just here for a quiet bubble?"
    ],
    // Bubblo
    [
        "Yo, I’m Bubblo. I like to keep things chill—no stress, just a smooth drift. Think you can vibe with that?",
        "Floating through life is my thing. I’m not about big splashes, just peaceful moments. Are you in?",
        "Not everyone can appreciate the art of going with the flow. You look like you might get it. Am I right?",
        "I’m all about the steady float. No need to rush—let’s just see where the current takes us.",
        "Some call it lazy, I call it zen. What’s your take on a bubble with a calm, steady rhythm?"
    ],
    // Bubbela
    [
        "Darling, I’m Bubbela. Sophistication and sparkle wrapped into one. Do you think you’re ready for all this shimmer?",
        "I’m not just a pretty bubble. Beneath this sparkle lies a depth few can handle. Do you dare to find out?",
        "Some bubbles shine bright, but I dazzle. Can you handle the glow, or will it blind you?",
        "Elegance is my middle name. If you’re looking for ordinary, I’m afraid you’ll have to float elsewhere.",
        "Not everyone can keep up with a bubble like me. Are you ready to prove you’re one of the few who can?"
    ],
    // Bubnald Glump
    [
        "Listen here, I’m the best bubble. No other bubble floats like I do. Can you appreciate greatness?",
        "I’m a bubble who knows what I want. Loyalty, admiration, and maybe a little fun. Are you in or out?",
        "Other bubbles? Fake news. I’m the real deal. Are you ready to make bubbles great again?",
        "The pressure doesn’t bother me. I thrive under it. Can you handle a bubble with this much confidence?",
        "I’m not just floating—I’m dominating. Do you have what it takes to rise with me, or are you just hot air?"
    ],
    // Michael Bubbly
    [
        "Hello, I’m Michael Bubbly. I float smooth, I shine bright, and I’ve got the voice to match. Care to duet?",
        "They say bubbles fade fast, but my sparkle’s eternal. Think you can keep up with my rhythm?",
        "Music’s in my soul, but I’m looking for harmony. Can we create something truly bubbly together?",
        "I’ve popped hearts all over the bubble world, but you might just be the duet partner I’ve been seeking.",
        "Not everyone can float in perfect pitch. Do you think you can rise to the occasion?"
    ]
];






let playerDialgoue = [
    // Sudsana
    [
        // bad
        [
            "Bubbles are fragile. I don’t think I can handle you.",
            "I don’t have time for slow. I’m just here for the pop.",
            "I’m not here to prove myself to a bubble.",
            "I’m just looking for a quick thrill, not something that lasts.",
            "I’m not really into the mystery. I prefer things simple."
        ],
        // mutual
        [
            "I might give it a shot, but I’m not sure.",
            "I’m open to seeing what you’ve got.",
            "I don’t know about forever, but I’ll float along for now.",
            "I guess we can take it slow, see where it leads.",
            "I’m interested, but let’s not rush this bubble."
        ],
        // good
        [
            "I’ve been looking for a bubble like you!",
            "Absolutely, I love the idea of a slow, shimmering float.",
            "Forever sounds magical. Let’s make it happen.",
            "I’m all in. Let’s float to the top and make something amazing!",
            "You’ve got my attention—let’s see how high we can go!"
        ]
    ],
    // Bubblo
    [
        // bad
        [
            "I’m not into this chill vibe thing.",
            "I prefer big splashes over peaceful floats.",
            "Zen is too slow for me.",
            "I need some excitement, not just floating around.",
            "Your laid-back style doesn’t quite do it for me."
        ],
        // mutual
        [
            "I can try to vibe with it.",
            "Peaceful moments sound nice, but I’m not sure yet.",
            "Zen is okay sometimes, but I need variety.",
            "I’m curious, but I’ll see how it feels.",
            "I’m not sure yet, but I’m open to seeing how it goes."
        ],
        // good
        [
            "Absolutely, I love the chill approach.",
            "Peaceful moments? Count me in!",
            "Zen? I’m all in. Let’s keep it calm and steady.",
            "I can vibe with this. Let’s take it easy together.",
            "I love a calm ride. Let’s just see where the flow takes us."
        ]
    ],
    // Bubbela
    [
        // bad
        [
            "I’m not really into fancy bubbles.",
            "Depth? Sounds exhausting.",
            "Your glow might be too much for me.",
            "I prefer simple and casual, not too much sparkle.",
            "I’m not ready to dive into something so complex."
        ],
        // mutual
        [
            "I appreciate the elegance, but I’m unsure if I’m ready.",
            "I’m curious, but I’ll take it slow.",
            "You’re dazzling, but let’s not blind each other.",
            "I’m intrigued by your shine, but let’s go easy.",
            "I’m willing to see where this goes, but no promises."
        ],
        // good
        [
            "You’re the perfect mix of sparkle and depth.",
            "Absolutely, I’m ready to explore your layers.",
            "Your glow is mesmerizing. Let’s dazzle together.",
            "You shine brighter than I expected. Let’s go deep.",
            "I love the way you shine. Let’s make something beautiful."
        ]
    ],
    // Bubnald Glump
    [
        // bad
        [
            "Greatness? Sounds like a lot of hot air.",
            "Loyalty? I’m not sure about that.",
            "Confidence is good, but you’re overdoing it.",
            "I don’t need a bubble with that much pressure.",
            "I’m not impressed by self-proclaimed greatness."
        ],
        // mutual
        [
            "You seem sure of yourself. Let’s see if it’s justified.",
            "I’m open to seeing if you’re the real deal.",
            "Confidence is attractive. Let’s see how it goes.",
            "I’m not sure about all that domination, but I’m curious.",
            "I’m intrigued by your confidence. Show me what you’ve got."
        ],
        // good
        [
            "Your energy is contagious. Let’s make bubbles great together!",
            "I’m all in for the loyalty and admiration!",
            "Your confidence is inspiring. Let’s dominate together!",
            "I like your drive! Let’s rise to the occasion.",
            "You’ve got the energy I need. Let’s take on the world."
        ]
    ],
    // Michael Bubbly
    [
        // bad
        [
            "I’m not into music or rhythm.",
            "Your sparkle might be too much for me.",
            "I’m not sure I can keep up with a duet.",
            "I’m not into all this fancy bubble stuff.",
            "Your perfect pitch sounds like a lot of pressure."
        ],
        // mutual
        [
            "I’m curious, but let’s take it slow.",
            "I like music, but I’m not sure about harmony.",
            "You’re talented, but I’ll see if I can keep up.",
            "Your rhythm is great, but I’m not ready for a duet yet.",
            "I’m intrigued, but we’ll have to see how well we vibe."
        ],
        // good
        [
            "A duet sounds perfect! Let’s create magic.",
            "Your sparkle is incredible. Let’s harmonize together.",
            "I’m ready to rise with you in perfect pitch.",
            "Let’s light up the sky with our duet!",
            "I’m all in for a bubble duet. Let’s make it unforgettable."
        ]
    ]
];

let bubbleResponseDialogue =[
    
    // Sudsana
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
    
    // Bubblo 
    [
        // bad
        [
            "Not quite what I was expecting, but hey, it’s your call. I’ll just float away, no hard feelings.",
            "No splash, huh? I guess the calm isn’t for everyone. But hey, maybe I’ll catch you on the next float.",
            "You’re looking for something bigger, I get it. Bubbles like me can’t always provide that. Maybe next time.",
            "I guess we’re not on the same wave, huh? No worries, I’ll drift off and find someone who’s into this calm ride.",
            "Not into peace and quiet? That’s cool, not all bubbles are for everyone. Maybe another bubble will catch your interest."
        ], 
        // mutual
        [
            "Ah, I get it. Not everything’s set in stone. Let’s just float and see where it goes—could be a good vibe.",
            "You’re not sure, huh? That’s okay. We’ll see where the flow takes us, no pressure.",
            "I’m down for a relaxed ride. No rush—just let’s see how things unfold. Who knows, it might be fun.",
            "Not too sure yet, but I like that you’re open. Let’s just let the bubbles guide us.",
            "I’m all for seeing where this goes, as long as we’re both comfortable. Let’s float together and keep it light."
        ], 
        // good
        [
            "Ah, I like where this is going. Nice and easy, just like a smooth ride to the top.",
            "I knew you’d get it! A chill, steady float is exactly what I’m about.",
            "I’m all in for the easy ride. Let’s float through this and see what magic we can make.",
            "Now that’s what I’m talking about! Just a calm drift, but who knows where it’ll take us?",
            "I can already tell we’re on the same wavelength. Let’s float effortlessly and enjoy the ride."
        ]
    ], 
    
    // Bubbela
    [
        // bad
        [
            "Oh, not quite your style? I get it, not everyone can handle this level of sparkle. Maybe next time.",
            "A little too much for you, huh? Some bubbles shine too bright for some. I’ll float off, but no hard feelings.",
            "Well, if this isn’t your speed, I’ll leave you to your simpler bubbles. Maybe I’ll shine for someone else.",
            "Not a fan of depth? That’s okay. Some bubbles are just meant to shine, and some need more than that.",
            "I guess you’re not ready for the elegance. Too much sparkle, huh? I’ll float away quietly."
        ], 
        // mutual
        [
            "A little unsure? That’s alright. Let’s float together for a bit longer and see if the shine draws you in.",
            "You’re curious, but not ready to dive in fully. I respect that. Let’s float for now and see if you want to explore deeper.",
            "I can tell you’re intrigued. Let’s see if you’re ready for what’s underneath this shimmer.",
            "I like the curiosity. Let’s take it slow—no need to rush. The shine will draw you in when you’re ready.",
            "I like the way you think. Maybe a little sparkle will win you over after all. Let’s just float and see where it goes."
        ], 
        // good
        [
            "Ah, finally! Someone who can appreciate all this shimmer. Let’s make this shine together, shall we?",
            "Oh, now we’re talking! I like your boldness. Let’s explore what this bubble has to offer.",
            "You’re drawn to the sparkle—good choice. Let’s take this journey to the next level and see how deep we can go.",
            "I knew you’d be the one to appreciate this glow. Let’s make something stunning together.",
            "I see you’re ready for the shine! Let’s float together and see just how bright we can make this bubble."
        ]
    ], 
    
    // Bubnald Glump
    [
        // bad
        [
            "A little too much? That’s fine. Not everyone’s ready for this level of greatness. I’ll float off and leave you to it.",
            "Not into loyalty or admiration? That’s a shame. I guess we weren’t meant to float together.",
            "I get it, not everyone’s on my level. Maybe I’ll float away to someone who appreciates true greatness.",
            "If you can’t handle my energy, no worries. I’ll drift away, but remember, you missed out on greatness.",
            "I’m not for everyone, and that’s okay. Not everyone deserves a bubble this powerful."
        ], 
        // mutual
        [
            "I like that you’re giving it a chance. Let’s see if you can keep up with a bubble this confident.",
            "Not sure if you’re ready for all of this, but I respect the hesitation. We’ll float together and see if you can handle the greatness.",
            "You might not be fully convinced, but let’s see how you do. Keep up, and you’ll see what I’m really about.",
            "I respect your hesitation, but let’s take it one step at a time. Maybe you’ll come around to my greatness.",
            "I get it—confidence can be intimidating. But you’re sticking around, so let’s see what happens."
        ], 
        // good
        [
            "Now that’s what I like to hear! You’ve got the spirit to rise with me. Let’s float to the top together.",
            "Finally! Someone who knows true greatness when they see it. Let’s dominate together.",
            "You’ve got the energy I need. Let’s make bubbles great again!",
            "Now we’re talking. Let’s rise and show everyone what true greatness looks like.",
            "I knew you had it in you. Let’s rise to the occasion and make some real magic happen."
        ]
    ], 
    
    // Michael Bubbly
    [
        // bad
        [
            "Not into the music? That’s alright. Maybe a different bubble will make the right tune for you.",
            "Not into my sparkle, huh? I get it—some bubbles just shine too brightly.",
            "A duet’s not your thing? Fair enough. I’ll float off and find someone who appreciates harmony.",
            "If you’re not vibing with me, no worries. I’ll find a rhythm with someone else.",
            "You’re not ready for the perfect pitch? That’s okay. I’ll float away to someone who gets it."
        ], 
        // mutual
        [
            "I get it. You’re not sure, but let’s see if we can find some harmony together.",
            "I appreciate your open mind. Let’s see if we can create something beautiful with our bubbles.",
            "Maybe you’re not fully convinced, but I respect that. Let’s float and see if we find our rhythm.",
            "Not sure if you’re ready for a duet yet, but I like the vibe. Let’s float and see what comes.",
            "I respect that. We’ll float along, and maybe the music will speak for itself soon enough."
        ], 
        // good
        [
            "Ah, now we’re talking! A duet it is. Let’s make the most of this and create something magical.",
            "I knew you’d get it! Let’s harmonize and make this bubble shine brighter than ever.",
            "Perfect pitch and perfect bubbles. Let’s rise together and light up the sky.",
            "I’m ready for this duet! Let’s make bubbles sing and sparkle like never before.",
            "Now you’re speaking my language. Let’s create something unforgettable together!"
        ]
    ]
]



function textChange()
{
    if(conversationStatus == 0)
    {
        dialogueText = bubbleEntryDialogue[background][dialogue];
        conversationStatus = 1;
    }
    else
    {
        dialogueText = bubbleResponseDialogue[background][buttonPressed][dialogue];
        conversationStatus = 0;
    }

    response1Text = playerDialgoue[background][0][dialogue];
    response2Text = playerDialgoue[background][1][dialogue];
    response3Text = playerDialgoue[background][2][dialogue];
}
