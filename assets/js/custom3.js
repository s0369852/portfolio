
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
                tl.to("#header .hd_bg strong span", {fontSize: "10vw", delay: 0.5, y: 0, ease: "power2.inOut"});
                tl.to("#header .hd_bg em span", {fontSize: "4vw", delay: 0.5, y: 0,  ease: "power2.inOut"});
                tl.to("#header .hd_bg em", {left: "-20%", delay: 0.5, ease: "power2.inOut"});
                tl.to("#header .hd_bg strong", {left: "33%", delay: 0.5, ease: "power2.inOut"});
                tl.to("#header .hd_bg", {opacity: 0, delay: 0.5, ease: "power2.inOut"});
                tl.to('.hd', {duration: 0.5 , opacity: 1, stagger: 0.2, y: 1, delay: 0.2});
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

// .nav
let navBtn = $('.nav_list li');
let cont =$('#header, #section3, #section6, #footer')

navBtn.click(function(e){
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    let section = cont.eq(index);
    let offset = section.offset().top;
    $('html, body').animate({'scrollTop': offset}, 600, 'easeInSine');
});

// scroll
$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    const scrollTop = $(window).scrollTop()+ wHeight / 2;

    $('.scroll').text(parseInt(wScroll));

    // header 나타내기
    currentScroll = true;

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
        $(".nav_list li a").css("color", "#242321")
    }
    if( scrollTop > $('#section6').offset().top ){
        $(".nav_list li a").css("color", "#F0F0F0")
    }
    if( scrollTop > $('#section7').offset().top ){
        $(".nav_list li a").css("color", "#242321")
    } 
    if( scrollTop > $('#footer').offset().top ){
        $(".nav_list li a").css("color", "#F0F0F0")
    }

    //section1. main
    if( scrollTop >= $('#header').offset().top ){
        $('#section1').addClass('show');
        gsap.to('.nav_list', {duration: 0.5 , opacity: 1, stagger: 1, y: 1, delay: 0.7});
        gsap.to('.main strong:nth-child(1) span', {duration: 0.5, opacity: 1, stagger: 0.1, y: 0});
        gsap.to('.main strong:nth-child(2) span', {duration: 0.5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
        gsap.to('.main strong:nth-child(3) span', {duration: 0.3, opacity: 1, stagger: 0.1, y: 0, delay: 0.2});
        gsap.to('.main strong:nth-child(4) span', {duration: 0.5, opacity: 1, stagger: 0.1, y: 0, delay: 0.3});
        
    }
    if( wScroll > $('.main strong:nth-child(1) span').offset().top ){
        gsap.to('.main strong:nth-child(5) span', {duration: 0.5, opacity: 1, stagger: 0.2, y: 0, delay: 0.1});
        gsap.to('.main strong:nth-child(6) span', {duration: 0.5, opacity: 1, stagger: 0.2, y: 0, delay: 0.2});
    }

    if( wScroll > $('.main strong:nth-child(3) span').offset().top ){
        gsap.to('.main strong:nth-child(7) span', {duration: 0.5, opacity: 1, stagger: 0.2, y: 0, delay: 0.1});
        gsap.to('.main strong:nth-child(8) span', {duration: 0.5, opacity: 1, stagger: 0.2, y: 0, delay: 0.2});
    }
    if( wScroll > $('.main strong:nth-child(4) span').offset().top ){
        gsap.to('.main strong:nth-child(9) span', {duration: 0.5, opacity: 1, stagger: 0.2, y: 0, delay: 0.1});
        gsap.to('.main strong:nth-child(10) span', {duration: 0.5, opacity: 1, stagger: 0.2, y: 0, delay: 0.2});
        gsap.to('.main strong:nth-child(11) span', {duration: 0.5, opacity: 1, stagger: 0.2, y: 0, delay: 0.3});
    }

    // section2 .about
    if( scrollTop > $('#section2').offset().top ){
        gsap.to('.about_title h2 span', {duration: 1, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
        navBtn.removeClass('on');
        navBtn.eq(1).addClass('on');
    } else {
        gsap.to('.about_title h2 span', {duration: 0.5, opacity: 0, stagger: 0.1, y: 0});
    }

    //  section3,4,5
    for(let i = 1; i < 4; i++){
        if( scrollTop > $('#section'+(i + 1)).offset().top + wHeight / 3 ){
            $('.slide'+i+' .has_ani').each(function(index){
                $(this).delay($(this).data('delay')).queue(function(){
                    $(this).addClass('ani_in');
                });
            });
        }
        if( scrollTop < $('#section'+(i+2)).offset().top){
            gsap.to('.slide'+i+' .cont_title .main_txt span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
            gsap.to('.slide'+i+' .cont_title .sub_txt span', {duration: .5, opacity: 1, stagger: 0.1, x: 0, delay: 0.3});
            $('.slide'+i+' .left .text_wrap').removeClass('show');
            $('.slide'+i+' .content_txt').removeClass('show');
            $('.slide'+i+' .top_link').removeClass('show');
            $('.slide'+i+' .next_slide ').removeClass('show');
        } else {
            gsap.to('.slide'+i+' .cont_title .main_txt span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
            gsap.to('.slide'+i+' .cont_title .sub_txt span', {duration: .5, opacity: 1, stagger: 0.1, x: 0, delay: 0.3});
            $('.slide'+i+' .left .text_wrap').addClass('show');
            $('.slide'+i+' .content_txt').addClass('show');
            $('.slide'+i+' .top_link').addClass('show');
            $('.slide'+i+' .next_slide ').addClass('show');
        }
    };

    // section6 .work
    if( scrollTop > $('#section6').offset().top){
        navBtn.removeClass('on');
        navBtn.eq(2).addClass('on');
        gsap.to('.work_title h2 span', {duration: 0.5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
        for(let i = 1; i <= $('.w_box').length; i++){
            if( scrollTop > $('.w_box'+i).offset().top){
                gsap.to('.w_box'+i+' .title_box h3 span', {duration: 0.5, opacity: 1, stagger: 0.1, x: 0, delay: 0.3});
                $('.w_box'+i+' .title_box').addClass('show');
                $('.w_box'+i+' .t_box .left_box .subtitle h4').addClass('show');
                $('.w_box'+i+' .t_box .left_box .w_txt').addClass('show');
                $('.w_box'+i+' .t_box .left_box .sBtn').addClass('show');
                $('.w_box'+i+' .t_box .right_box').addClass('show');
            } else {
                gsap.to('.w_box'+i+' .title_box h3 span', {duration: 0.3, opacity: 0, stagger: 0.1, x: 0});
                $('.w_box'+i+' .title_box').removeClass('show');
                $('.w_box'+i+' .t_box .left_box .subtitle h4').removeClass('show');
                $('.w_box'+i+' .t_box .left_box .w_txt').removeClass('show');
                $('.w_box'+i+' .t_box .left_box .sBtn').removeClass('show');
                $('.w_box'+i+' .t_box .right_box').removeClass('show');
            }
        }
    } else {
        gsap.to('.work_title h2 span', {duration: 0.5, opacity: 0, stagger: 0.1, y: 0});
    }

    // section7 .possi
    if ( scrollTop <= $('#section7').offset().top){
        gsap.to('.possi_title strong span', {duration: .3, opacity: 0, stagger: 0.1, y: 0});
        $('.possi_box .right_box .p_txt').removeClass('show');
        $('.possi_box .right_box .skills').removeClass('show');
        $('.possi_box .right_box .license').removeClass('show');
    } else {
        gsap.to('.possi_title strong span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
            if(wScroll > $('#section7').offset().top - wHeight / 5){
                $('.possi .has_ani').each(function(index){
                    $(this).delay($(this).data('delay')).queue(function(){
                        $(this).addClass('ani_in');
                    });
                });
                $('.possi_box .right_box .p_txt').addClass('show');
                $('.possi_box .right_box .skills').addClass('show');
                $('.possi_box .right_box .license').addClass('show');
            };
    }

    // footer
    if( scrollTop > $('#footer').offset().top - wHeight / 3){
        navBtn.removeClass('on');
        navBtn.eq(3).addClass('on');
        gsap.to('.footer_title h2 span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
        $('.circle').addClass('rot')
    }

});


// animation modal.

let aniBtn1 = $('.w_box.a1').find('.sBtn');
let aniBtn2 = $('.w_box.a2').find('.sBtn');

let modal1 = $('.w_box.a1').find('#modal');
let modal2 = $('.w_box.a2').find('#modal');

let close1 = $('.w_box.a1').find('.close');
let close2 = $('.w_box.a2').find('.close');

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