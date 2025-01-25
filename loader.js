console.log("Loader Works")

//this functions loads all script files, when adding a new script file into scripts, make sure to add it here too
//this is from a JQuery library
$.getScript( "scripts/dialogue.js" )
    .done(function( script, textStatus ) 
    {
        console.log( textStatus );
    })
    .fail(function( jqxhr, settings, exception ) 
    {
        $( "div.log" ).text( "Triggered ajaxError handler." );
});

$.getScript( "scripts/global.js" )
    .done(function( script, textStatus ) 
    {
        console.log( textStatus );
    })
    .fail(function( jqxhr, settings, exception ) 
    {
        $( "div.log" ).text( "Triggered ajaxError handler." );
});

$.getScript( "scripts/ui.js" )
    .done(function( script, textStatus ) 
    {
        console.log( textStatus );
    })
    .fail(function( jqxhr, settings, exception ) 
    {
        $( "div.log" ).text( "Triggered ajaxError handler." );
});

$.getScript( "scripts/bubbles.js" )
    .done(function( script, textStatus ) 
    {
        console.log( textStatus );
    })
    .fail(function( jqxhr, settings, exception ) 
    {
        $( "div.log" ).text( "Triggered ajaxError handler." );
});

$.getScript( "scripts/locations.js" )
    .done(function( script, textStatus ) 
    {
        console.log( textStatus );
    })
    .fail(function( jqxhr, settings, exception ) 
    {
        $( "div.log" ).text( "Triggered ajaxError handler." );
});


