
// progress
    function imagesProgress(){
        var $container = $("#progress"),
            $progressText = $container.find(".progress-text"),
            imgLoad = imagesLoaded('body'),	
            imgTotal = imgLoad.images.length,	
            imgLoaded = 0,										
            current = 0,							
            progressTimer = setInterval(updateProgress, 2000 / 60);	

            imgLoad.on("progress", function(){
                imgLoaded++;
            });

        function updateProgress(){
            var target = ( imgLoaded / imgTotal) * 100;

            current += ( target - current) * 0.1;
            $progressText.text( Math.floor(current) + '%' );

            if(current >= 100){
                clearInterval(progressTimer);
                $container.animate({opacity: '0'},1500,'easeInOutQuint').animate({top: '-100%'},1500);

                let tl = gsap.timeline();
                tl.fromTo("#header .hd_bg span", {opacity:0, y: 100}, {opacity:1, y: 0, duration: 0.4, delay: 2, stagger: 0.1, ease: "power2.inOut"});
                tl.to("#header .hd_bg strong span", {fontSize: "10vw", duration: 0.4, y: 0, ease: "Power2.easeOut"});
                tl.to("#header .hd_bg em span", {fontSize: "4vw", delay: 0.2, y: 0,  ease: "power2.inOut"});
                // tl.to("#header .hd_bg em", {left: "-20%", delay: 0.5, ease: "power2.inOut"});
                // tl.to("#header .hd_bg strong", {left: "33%", delay: 0.5, ease: "power2.inOut"});
                tl.to("#header .hd_bg", {opacity: 0, duration: 0.5 , delay: 0.5, ease: "power2.inOut"});
                tl.to('.hd', {duration: 0.5 , opacity: 1, stagger: 0.2, y: 1, delay: 0.2});
                tl.to('.down', {duration: 0.3 , opacity: 1, stagger: 0.1, y: 1, delay: 0.1});
            }
            if(current > 99.9){
                current = 100;
            };
        };
    };

    imagesProgress();

// header
let wHeight = $(window).height();       // 보이는 화면의 높이값 (브라우저의 height)
let dHeight = $(document).height();     // 문서 전체의 높이값 (문서(document)의 높이값)
let hHeight = $('.hd').height();        // #header의 높이값
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

// 공통
$('.splice').each(function(){
    let txt = $(this).text();
    let split = txt.split('').join('</span><span aria-hidden="true">');
        split = '<span aria-hidden="true">' + split + '</span>';
    $(this).html(split).attr('aria-label', txt);
});

// 버튼
let navBtn = $('.nav_list li'),
    prevBtn = $('.slide .pslide'),
    nextBtn = $('.slide .nslide');

let cont = $('#header, #section2, #section3, #footer');

navBtn.click(function(e){
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    let section = cont.eq(index);
    let offset = section.offset().top;
    $('html, body').animate({'scrollTop': offset}, 600, 'easeInSine');
});

prevBtn.click(function(e){
    e.preventDefault();
    var scrollPosition = $($(this).attr('href')).offset().top;
    $('html, body').animate({'scrollTop': scrollPosition}, 600, 'easeInSine');
});

nextBtn.click(function(e){
    e.preventDefault();
    var scrollPosition = $($(this).attr('href')).offset().top;
    $('html, body').animate({'scrollTop': scrollPosition}, 600, 'easeInSine');
});


// scroll
$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    const scrollTop = $(window).scrollTop()+ wHeight / 2;

    $('.scroll').text(parseInt(wScroll));

    // header 나타내기
    currentScroll = true;

    // down scroll
    if( scrollTop > $('#section2').offset().top ){
        $('.down').addClass('on')
    } else {
        $('.down').removeClass('on')
    }

    // nav 맨처음 클래스 삭제
    if(wScroll < $('#section1').offset().top){
        navBtn.removeClass('on');
        navBtn.eq(0).addClass('on');
    }

    // nav 색상 변경
    if( scrollTop > $('#section1').offset().top ){
        $(".nav_list li a").css("color", "#242321")
    }
    if( scrollTop > $('#section2').offset().top ){
        $(".nav_list li a").css("color", "#F0F0F0")
    }
    if( scrollTop > $('#section3').offset().top ){
        $(".nav_list li a").css("color", "#F0F0F0")
    }
    if( scrollTop > $('#section6').offset().top ){
        $(".nav_list li a").css("color", "#242321")
    } 
    if( scrollTop > $('#footer').offset().top ){
        $(".nav_list li a").css("color", "#F0F0F0")
    }

    //section1. main
    if( scrollTop >= $('#header').offset().top ){
        $('#section1').addClass('show');
        gsap.to('.nav_list', {duration: 0.5 , opacity: 1, stagger: 0.1, y: 1, delay: 0.4});
        gsap.to('.main strong:nth-child(1) span', {duration: 0.3, opacity: 1, stagger: 0.2, y: 0});
        gsap.to('.main strong:nth-child(2) span', {duration: 0.3, opacity: 1, stagger: 0.2, y: 0, delay: 0.1});
        gsap.to('.main strong:nth-child(3) span', {duration: 0.3, opacity: 1, stagger: 0.2, y: 0, delay: 0.2});
        gsap.to('.main strong:nth-child(4) span', {duration: 0.3, opacity: 1, stagger: 0.2, y: 0, delay: 0.3});
        
    }
    if( wScroll > $('.main strong:nth-child(2) span').offset().top ){
        gsap.to('.main strong:nth-child(5) span', {duration: 0.3, opacity: 1, stagger: 0.2, y: 0, delay: 0.1});
        gsap.to('.main strong:nth-child(6) span', {duration: 0.3, opacity: 1, stagger: 0.2, y: 0, delay: 0.2});
        gsap.to('.main strong:nth-child(7) span', {duration: 0.3, opacity: 1, stagger: 0.2, y: 0, delay: 0.3});
    }
    if( wScroll > $('.main strong:nth-child(5) span').offset().top ){
        gsap.to('.main strong:nth-child(8) span', {duration: 0.3, opacity: 1, stagger: 0.2, y: 0, delay: 0.1});
        gsap.to('.main strong:nth-child(9) span', {duration: 0.3, opacity: 1, stagger: 0.2, y: 0, delay: 0.2});
    }

    // section2 .about
    if( scrollTop > $('#section2').offset().top + wHeight / 3 ){
        gsap.to('.about h2 span', {duration: 1, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
        navBtn.removeClass('on');
        navBtn.eq(1).addClass('on');
        for( let i = 1; i <= $('.slide_box > article').length; i++ ){
            if( scrollTop > $('.slide'+i).offset().top ){
                $('.slide'+i+' .has_ani').addClass('ani_in');
                $('.slide'+i).addClass('show');
                gsap.to('.slide'+i+' strong span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
                gsap.to('.slide'+i+' b span', {duration: .5, opacity: 1, stagger: 0.1, x: 0, delay: 0.3});
            } else {
                $('.slide'+i+' .has_ani').removeClass('ani_in');
                $('.slide'+i).removeClass('show');
                gsap.to('.slide'+i+' strong span', {duration: .3, opacity: 0, stagger: 0.1, y: 0});
                gsap.to('.slide'+i+' b span', {duration: .2, opacity: 0, stagger: 0.1, x: 0});
            }
        };
    } else {
        gsap.to('.about .title h2 span', {duration: 0.5, opacity: 0, stagger: 0.1, y: 0});
    }

    // section3 .work
    if( scrollTop > $('#section3').offset().top){
        navBtn.removeClass('on');
        navBtn.eq(2).addClass('on');
        gsap.to('.work h2 span', {duration: 0.5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
        $(".w_box").each(function(){
            if( scrollTop > $(this).offset().top - wHeight / 2 ){
                $(this).addClass("show")
            } else {
                $(this).removeClass("show")
            }
        });
    } else {
        gsap.to('.work h2 span', {duration: 0.5, opacity: 0, stagger: 0.1, y: 0});
    }

    // section5 .js
    if( scrollTop > $('#section5').offset().top){
        $(".js_box").each(function(){
            if( scrollTop > $(this).offset().top - wHeight / 2 ){
                $(this).addClass("show")
            } else {
                $(this).removeClass("show")
            }
        });
    }

    // section6 .poss
    if ( scrollTop > $('#section6').offset().top){
        gsap.to('.poss strong span', {duration: 0.5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
        if(wScroll > $('#section6').offset().top - wHeight / 5){
            $('.poss .has_ani').addClass('ani_in');
            $('.poss .poss_box .right').addClass('show');
            $('.poss .poss_mbox').addClass('show');
        } else {
            $('.poss .has_ani').removeClass('ani_in');
            $('.poss .poss_box .right').removeClass('show');
            $('.poss .poss_mbox').removeClass('show');
        };
    } else {
        gsap.to('.poss strong span', {duration: 0.3, opacity: 0, stagger: 0.1, y: 0});
    }

    // footer
    if( scrollTop > $('#footer').offset().top - wHeight / 3){
        navBtn.removeClass('on');
        navBtn.eq(3).addClass('on');
        gsap.to('.footer h2 span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
        $('.circle').addClass('rot')
    } else {
        gsap.to('.footer h2 span', {duration: .3, opacity: 0, stagger: 0.1, y: 0});
    }

});


// animation modal.

let aniBtn1 = $('.list_item').find('.btn');
let aniBtn2 = $('.w_box6').find('.btn');

let modal1 = $('.list_item').find('.modal');
let modal2 = $('.w_box6').find('.modal');

let close1 = $('.list_item').find('.close');
let close2 = $('.w_box6').find('.close');

aniBtn1.click(function(e){
    e.preventDefault();
    modal1.removeClass().addClass('one');
});
close1.click(function(e){
    e.preventDefault();
    modal1.addClass('out');
});

aniBtn2.click(function(e){
    e.preventDefault();
    modal2.removeClass().addClass('one');
});
close2.click(function(e){
    e.preventDefault();
    modal2.addClass('out');
});

// --------------------------------------------------------------------------------------------------------------------------------------------------

/*--------------------
Vars
--------------------*/
const $list = document.querySelector('.list_box');
const $items = document.querySelectorAll('.list_item');
const $iframe = document.querySelectorAll('.list_item iframe');
let listWidth = $list.clientWidth;
let itemWidth = $items[0].clientWidth;
let wrapWidth = $items.length * itemWidth;

let scrollSpeed = 0;
let oldScrollY = 0;
let scrollY = 0;
let y = 0;


/*--------------------
    Lerp
    --------------------*/
const lerp = (v0, v1, t) => {
    return v0 * (1 - t) + v1 * t;
};


/*--------------------
    Dispose
    --------------------*/
const dispose = scroll => {
    gsap.set($items, {
    x: i => {
        return i * itemWidth + scroll;
    },
    modifiers: {
        x: (x, target) => {
        const s = gsap.utils.wrap(-itemWidth, wrapWidth - itemWidth, parseInt(x));
        return `${s}px`;
        } } });
};
dispose(0);


/*--------------------
    Wheel
    --------------------*/
const handleMouseWheel = e => {
    scrollY -= e.deltaY * 0.9;
};


/*--------------------
    Touch
    --------------------*/
let touchStart = 0;
let touchX = 0;
let isDragging = false;
const handleTouchStart = e => {
    touchStart = e.clientX || e.touches[0].clientX;
    isDragging = true;
    $list.classList.add('is-dragging');
};
const handleTouchMove = e => {
    if (!isDragging) return;
    touchX = e.clientX || e.touches[0].clientX;
    scrollY += (touchX - touchStart) * 2.5;
    touchStart = touchX;
};
const handleTouchEnd = () => {
    isDragging = false;
    $list.classList.remove('is-dragging');
};


/*--------------------
    Listeners
    --------------------*/
$list.addEventListener('mousewheel', handleMouseWheel);

$list.addEventListener('touchstart', handleTouchStart);
$list.addEventListener('touchmove', handleTouchMove);
$list.addEventListener('touchend', handleTouchEnd);

$list.addEventListener('mousedown', handleTouchStart);
$list.addEventListener('mousemove', handleTouchMove);
$list.addEventListener('mouseleave', handleTouchEnd);
$list.addEventListener('mouseup', handleTouchEnd);

$list.addEventListener('selectstart', () => {return false;});


/*--------------------
    Resize
    --------------------*/
window.addEventListener('resize', () => {
    listWidth = $list.clientWidth;
    itemWidth = $items[0].clientWidth;
    wrapWidth = $items.length * itemWidth;
});


/*--------------------
    Render
    --------------------*/
const render = () => {
    requestAnimationFrame(render);
    y = lerp(y, scrollY, .1);
    dispose(y);

    scrollSpeed = y - oldScrollY;
    oldScrollY = y;

    gsap.to($items, {
    skewX: -scrollSpeed * .2,
    rotate: scrollSpeed * .01,
    scale: 1 - Math.min(100, Math.abs(scrollSpeed)) * 0.003 });

};
render();