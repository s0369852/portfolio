
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

// #sec1 main text
setTimeout(function(){
    gsap.to('.main strong:nth-child(1) span', {duration: .5, opacity: 1, stagger: 0.1, y: 0});
    gsap.to('.main strong:nth-child(2) span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.3});
    gsap.to('.main strong:nth-child(3) span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.5});
    gsap.to('.main strong:nth-child(4) span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.7});
    gsap.to('.main strong:nth-child(5) span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.9});
    gsap.to('.main strong:nth-child(6) span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 1});
    gsap.to('.main strong:nth-child(7) span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 1.1});
    gsap.to('.main strong:nth-child(8) span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 1.3});
    gsap.to('.main strong:nth-child(9) span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 1.5});
    gsap.to('.main strong:nth-child(10) span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 1.7});
    gsap.to('.main strong:nth-child(11) span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 1.9});
    gsap.to('.hd', {duration: 0.5 , opacity: 1, stagger: 0.5, y: 1, delay: 0.7});
    gsap.to('.nav_list', {duration: 0.5 , opacity: 1, stagger: 1.5, y: 1, delay: 1});
},2000) 

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
    const scrollTop = $(window).scrollTop()+ wHeight / 3;

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

    // section2 .about
    if( scrollTop > $('#section2').offset().top ){
        gsap.to('.about_title h2 span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
        navBtn.removeClass('on');
        navBtn.eq(1).addClass('on');
    }

    //  section3
    if( scrollTop > $('#section2').offset().top + wHeight / 3 ){
        $('.slide1 .has_ani').each(function(index){
            $(this).delay($(this).data('delay')).queue(function(){
                $(this).addClass('ani_in');
            });
        });
    };

    // section4
    if( scrollTop > $('#section3').offset().top + wHeight / 3 ){
        $('.slide2 .has_ani').each(function(index){
            $(this).delay($(this).data('delay')).queue(function(){
                $(this).addClass('ani_in');
            });
        });
    };

    // section5
    if( scrollTop > $('#section4').offset().top + wHeight / 3 ){
        $('.slide3 .has_ani').each(function(index){
            $(this).delay($(this).data('delay')).queue(function(){
                $(this).addClass('ani_in');
            });
        });
    };

    // section6 .work
    if( scrollTop > $('#section6').offset().top){
        navBtn.removeClass('on');
        navBtn.eq(2).addClass('on');
        gsap.to('.work_title h2 span', {duration: 0.5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
    }

    // section7 .possi
    if ( scrollTop > $('#section7').offset().top){
        gsap.to('.possi_title strong span', {duration: .5, opacity: 1, stagger: 0.1, y: 0, delay: 0.1});
            if(wScroll >= $('#section7').offset().top - wHeight / 5){
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