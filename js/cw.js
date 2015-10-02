$(document).ready(function() {

//Image rollovers
    $("img.rollover").hover( 
        function() {
            this.src = this.src.replace("_off", "_on"); 
        }, 
        function() {
            this.src = this.src.replace("_on", "_off"); 
        });

//Accordion widget
    $(function() {
        $( ".accordion" ).accordion({
            collapsible: true,
            active: false
        });
    });
 

//Konami code
    // check to make sure that the browser can handle window.addEventListener
    if (window.addEventListener) {
        // create the keys and konami variables
        var keys = [],
            konami = "38,38,40,40,37,39,37,39,66,65";

        // bind the keydown event to the Konami function
        window.addEventListener("keydown", function(e){
            // push the keycode to the 'keys' array
            keys.push(e.keyCode);

            // and check to see if the user has entered the Konami code
            if (keys.toString().indexOf(konami) >= 0) {
                // open Ninty Lovefest podcast site
  		            window.open("http://antonynintendolovefest.podbean.com");
                
                // and finally clean up the keys array
                keys = [];
            };
        }, true);
    };
    
    
});