$(document).ready(function(){
    var wh = $(window).height();
    var ww = $(window).width();

        if(ww>=1400){
            new fullpage('#wrap',{
                anchors : ['anchor1','anchor2','anchor3','anchor4','anchor5'],
                // responsiveWidth: 1400,
                scrollBar : true,
                normalScrollElements : '.sec-5, .footer',
                fitToSection : false, 
                keyboardScrolling : true,
            }); 
        }else{

        }

        if(ww>=530){
            AOS.init();
        }else{

        }



    let swiper = new Swiper(".mySwiper", {
        slidePerView:'auto',
        spaceBetween: 0,
        speed: 2000,
        slidePerGroup: 1,
        loop: true,
        autoplay: {
            delay: 800,
            disableOnInteraction: false,
        }
    });


    $('.m-menu-bar li').click(function(){
        $(this).children('.m-sub-menu').addClass('active');
        $(this).siblings().children('.m-sub-menu').removeClass('active');
    });

    // $('.m-menu-bar li').mouseleave(function(){
    //     $(this).children('.m-sub-menu').removeClass('active');
    // });

    $('.m-sub-menu a').mouseenter(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');   
    });

    $('.m-sub-menu a').mouseleave(function(){
        $(this).removeClass('active');
    });


    $('.menu-bar li').mouseenter(function(){
        $('.sub-menu').stop().slideUp();
        $(this).children('.sub-menu').stop().slideDown(300);
        $(this).children('.menu-bar li a').addClass('on');
    });

    $('.menu-bar li').mouseleave(function(){
        $(this).children('.sub-menu').stop().slideUp(300);
        $(this).children('.menu-bar li a').removeClass('on');
    });

    $('.menu-bar .sub-menu a').mouseenter(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.menu-bar .sub-menu a').mouseleave(function(){
        $(this).removeClass('active');
    });

    $('.sec-2 .q-mark').click(function(){
        $('.sec-2 .sec-2-sub').toggleClass('active');
        $('.sec-2 .sec-2-img').toggleClass('active');
    });

    $('#hamburger').click(function(){
        $('.m-menu-bar').toggleClass('active');
        $(this).toggleClass('on');
        $('.header-area').toggleClass('on');
        $('.logo').toggleClass('on');
    });


    $(window).scroll(function(){
        const sct = $(window).scrollTop();
        var wh = $(window).height();


        if(sct >= wh){
            $('.header-area').addClass('active');
            $('.logo').addClass('active');
            $('.icon-box li').addClass('active');
            $('.menu-bar li').addClass('active');
            $('.menu-bar').addClass('active');
            $('.menu-bar li').removeClass('on');
            $('.icon-box li svg').addClass('active');
            $('.logo svg').addClass('active');
            $('#hamburger span').addClass('active');
            $('#hamburger').addClass('active');
        }else if(sct < wh && sct < wh*2 ){
            $('.header-area').removeClass('active');
            $('.logo').removeClass('active');
            $('.icon-box li').removeClass('active');
            $('.icon-box li svg').removeClass('active');
            $('.menu-bar li').removeClass('active');
            $('.menu-bar').removeClass('active');
            $('.logo svg').removeClass('active');
            $('#hamburger span').removeClass('active');
            $('#hamburger').removeClass('active');
        }

        if(sct >= wh){
            $('.top-btn').addClass('active');
        }else{
            $('.top-btn').removeClass('active');
        }

    });

    $('.top-btn').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },500);
    });

});
