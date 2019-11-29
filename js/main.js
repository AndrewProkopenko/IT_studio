$(window).scroll(function() { 
    let st = $(this).scrollTop();

    $(".parallax-cont-up").css({ 
        "transform" : "translate(0%, " +  - st / 100   + "%"  
    }); 

    $(".parallax-cont-down").css({ 
        "transform" : "translate(0%, " +  st / 100  + "%"  
    })

}) ;

