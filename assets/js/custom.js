
// 공통
$(".splice").each(function(){
    let txt = $(this).text();
    let split = txt.split("").join("</span><span aria-hidden='true'>");
        split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", txt);
});

// #header 나타내기
let wHeight = $(window).height();       // 보이는 화면의 높이값 (브라우저의 height)
let dHeight = $(document).height();     // 문서 전체의 높이값 (문서(document)의 높이값)
let hHeight = $(".hd").height();        // #header의 높이값
let lastScrollTop = 0;                  // 스크롤의 마지막 위치값을 알아내서, 이걸 기준으로 스크롤을 올렸는지, 내렸는지 확인해야 하기 때문. 
let currentScroll;                      // 현재 스크롤 감지

setInterval(function(){
    if(currentScroll) {
        hasScroll();
        currentScroll = false;
    }
}, 250);

function hasScroll(){
    let wScroll = $(window).scrollTop();    // 현재 scrolltop 값
    if(wScroll > lastScrollTop) {
        // 스크롤을 내렸을 때
        $('.hd').addClass('on');
    } else {
        // 스크롤을 올렸을 때
        if(wScroll + wHeight < dHeight) {
            $('.hd').removeClass('on');
        }
    }
};

// #sec1 main text
setTimeout(function(){
    gsap.to(".hd", {duration: 0.3 , opacity: 1, stagger: 0.1, y: 1, delay: 0.7});
    gsap.to(".nav_list", {duration: 0.3 , opacity: 1, stagger: 0.1, y: 1, delay: 1});
    gsap.to(".main strong:nth-child(1) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0});
    gsap.to(".main strong:nth-child(2) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
    gsap.to(".main strong:nth-child(3) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.2});
    gsap.to(".main strong:nth-child(4) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.3});
    gsap.to(".main strong:nth-child(5) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.4});
    gsap.to(".main strong:nth-child(6) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.5});
    gsap.to(".main strong:nth-child(7) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.6});
},2000)

// .nav
let navBtn = $(".nav_list li");
let cont =$("#section2, #section3, #section4, #footer")

navBtn.click(function(e){
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    let section = cont.eq(index);
    let offset = section.offset().top;
    $('html, body').animate({'scrollTop': offset}, 600, "easeInSine");
});

// 스크롤
$(window).scroll(function(){
    let wScroll = $(this).scrollTop(); // 현재 scrolltop 값
    let num = Math.floor(wScroll);
    
    $(".scroll").text(num);             // 현재 스크롤 값 나타내는 것.

    currentScroll = true;                // #header 나타내기

    if(wScroll < $('#section2').offset().top){
        navBtn.removeClass('current');
    }
    if (wScroll >= $('#section2').offset().top - $(window).height()/3){
        navBtn.removeClass('current');
        navBtn.eq(0).addClass('current');
        gsap.to('.about_title h2 span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
        if(wScroll >= $('.about_title h2').offset().top - $(window).height()/3){
            gsap.to('.title_box h3 span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 1});
        }
    }
    if(wScroll >= $('#section3').offset().top - $(window).height()/3){
        navBtn.removeClass('current');
        navBtn.eq(1).addClass('current');
    }
    if(wScroll >= $('#section4').offset().top - $(window).height()/3){
        navBtn.removeClass('current');
        navBtn.eq(2).addClass('current');
        gsap.to('.work_title h2 span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});

    }
    if(wScroll >= $('#footer').offset().top - $(window).height()/3){
        navBtn.removeClass('current');
        navBtn.eq(3).addClass('current');
        gsap.to('.footer_title h2 span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
        $('.circle').addClass('rot')
    }
    if(wScroll < $('#section4').offset().top - wHeight/3){
        $(".nav_list li a").css("color", "#222222")
    } else{
        $(".nav_list li a").css("color", "#fff")
    }
});


