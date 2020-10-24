
$(".splice").each(function(){
    let txt = $(this).text();
    let split = txt.split("").join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", txt);
});

setTimeout(function(){
    gsap.to("#header", {duration: .8, opacity:1, stagger: 0.1, y: 0, delay: 1});
    gsap.to(".nav_list li", {keyframes: [
        {opacity: 1, duration: .8, delay: 1.5}
    ], ease: "power3.inOut"});
    gsap.to(".main strong:nth-child(1) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0});
    gsap.to(".main strong:nth-child(2) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
    gsap.to(".main strong:nth-child(3) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.2});
    gsap.to(".main strong:nth-child(4) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.3});
    gsap.to(".main strong:nth-child(5) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.4});
    gsap.to(".main strong:nth-child(6) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.5});
    gsap.to(".main strong:nth-child(7) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.6});
    gsap.to(".possi_title h2:nth-child(1) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 2});
    gsap.to(".possi_title h2:nth-child(2) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 2.1});
    gsap.to(".work_title h2 span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 3});
    gsap.to(".footer_title h2 span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 4});
    
},2000)

$(window).scroll(function(){
    var scroll = $(window).scrollTop();

    $(".scroll").text(scroll);

    if(scroll > $(".about_title h2").offset().top){
        gsap.to('.about_title h2 span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, rotation: 0});
        gsap.to('.txt_box1 .subtitle span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.3});
        gsap.to('.txt_box1 .during', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.4});
        gsap.to('.txt_box1 .a_txt', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.5});
        gsap.to('.txt_box2 .subtitle span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.6});
        gsap.to('.txt_box2 .during', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.7});
        gsap.to('.txt_box2 .a_txt', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.8});
        gsap.to('.txt_box3 .subtitle span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.9});
        gsap.to('.txt_box3 .during', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 1});
        gsap.to('.txt_box3 .a_text', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 1.1});
    }
});


/* 
스크롤 구하기

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        $(".scroll").text(scroll);
    });
*/