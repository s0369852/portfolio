
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
    gsap.to(".main strong:nth-child(1) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0});
    gsap.to(".main strong:nth-child(2) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.3});
    gsap.to(".main strong:nth-child(3) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.5});
    gsap.to(".main strong:nth-child(4) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.7});
    gsap.to(".main strong:nth-child(5) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.9});
    gsap.to(".main strong:nth-child(6) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 1});
    gsap.to(".main strong:nth-child(7) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 1.1});
    gsap.to(".main strong:nth-child(8) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 1.3});
    gsap.to(".main strong:nth-child(9) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 1.5});
    gsap.to(".main strong:nth-child(10) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 1.7});
    gsap.to(".main strong:nth-child(11) span", {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 1.9});
    gsap.to(".hd", {duration: 0.5 , opacity: 1, stagger: 0.5, y: 1, delay: 0.7});
    gsap.to(".nav_list", {duration: 0.5 , opacity: 1, stagger: 1.5, y: 1, delay: 1});
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

    // nav 맨처음 클래스 삭제
    if(wScroll < $('#section2').offset().top){
        navBtn.removeClass('current');
    }

    // about  
    if (wScroll >= $('#section2').offset().top){
        navBtn.eq(0).addClass('current');
        gsap.to('.about_title h2 span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
        if(wScroll >= $('#section2').offset().top - $(window).height()/3){
            gsap.to('.possi_title strong span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
            if(wScroll >= $('#section2').offset().top - $(window).height()/5){
                $('.has_ani').each(function(index){
                    $(this).delay($(this).data('delay')).queue(function(){
                        $(this).addClass('ani_in');
                    });
                });
                $('.possi_box .right_box .p_txt').addClass('show');
                $('.possi_box .right_box .skills').addClass('show');
                $('.possi_box .right_box .license').addClass('show');
            };
            }
        }

        // section3
        if(wScroll >= $('#section2').offset().top - $(window).height()/3){
            navBtn.removeClass('current');
            navBtn.eq(1).addClass('current');
        }

    // work
    if(wScroll >= $('#section4').offset().top - $(window).height()/3){
        navBtn.removeClass('current');
        navBtn.eq(2).addClass('current');
        gsap.to('.work_title h2 span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
    }

    // footer
    if(wScroll >= $('#footer').offset().top - $(window).height()/3){
        navBtn.removeClass('current');
        navBtn.eq(3).addClass('current');
        gsap.to('.footer_title h2 span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
        $('.circle').addClass('rot')
    }

    // nav 색상 변경
    if(wScroll < $('#section4').offset().top - wHeight/3){
        $(".nav_list li a").css("color", "#222222")
    } else{
        $(".nav_list li a").css("color", "#fff")
    }
});

/* sec3 패널
const panels = document.querySelectorAll(".panel");

function toggleOpen() {
    if ([...this.classList].indexOf("active") >= 0) {
        this.classList.remove("active");
        return;
    }
panels.forEach(panel => panel.classList.remove("active"));
this.classList.toggle("active");
}

function toggleActive(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open");
    }
}
panels.forEach(panel => {
    panel.addEventListener("click", toggleOpen);
    panel.addEventListener("transitionend", toggleActive);
});
*/


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTopPlugin);
gsap.registerPlugin(SplitText);

select = e => document.querySelector(e);
selectAll = e => document.querySelectorAll(e);

const slides = selectAll(".slide");
const links = selectAll(".next_slide");
const titles = selectAll(".cont_title")