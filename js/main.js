$(window).scroll(function() { 
    let st = $(this).scrollTop();

    $(".parallax-cont-up").css({ 
        "transform" : "translate(0%, " +  - st / 100   + "%"  
    }); 
   

    $(".parallax-cont-down").css({ 
        "transform" : "translate(0%, " +  st / 100  + "%"  
    })

    $(".parallax-cont-main").css({ 
        "transform" : "translate(0%, " +  - st/50   + "%"  
    }); 

    $(".scroll-image").css({ 
        "top" : -500 + st/10   + "px"  
    }); 
    console.log(st);

}) ;
console.log('ontouchstart' in window);

