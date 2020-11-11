$(window).scroll(function(){
    var scroll = $(window).scrollTop();

    $(".scroll").text(scroll);

    if( scroll > $(".about h2").offset().top ){
        gsap.to(".about h2 span", {duration: 0.5, y: 0, stagger: 0.1, opacity: 1, rotation: 0});
    }

    if( scroll > $("#section3").offset().top){
        $(".about").hide();
    } else {
        $(".about").show();
    }

    // if( scroll > $("#section6").offset().top - $(window).height()){
    //     $("section7").hide();    
    // } else {
    //     $("section7").show();
    // }

    if( scroll > $("#section7").offset().top - $(window).height()){
        $("#footer").show();    
    } else {
        $("#footer").hide();
    }
});