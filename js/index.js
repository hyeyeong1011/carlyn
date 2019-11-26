$(function(){
    // 메인슬라이드
    var swiper1 = new Swiper('.swiper1', {
        pagination: {
            el: '.swiper1>.swiper-pagination',
            type: 'fraction',
        },
        loop:true,
        autoplay:true
    });

    // 신상품슬라이드
    var swiper2 = new Swiper('.swiper2', { 
        slidesPerView: 4,               
        navigation: {
            nextEl: '.new-slide>.slide>.swiper-button-next',
            prevEl: '.new-slide>.slide>.swiper-button-prev',
        },                
        loop:true
    });


    // sns슬라이드
    var swiper3 = new Swiper('.swiper3', {
        slidesPerView: 5,
        loop:true,
        autoplay: {
            delay: 800,
            disableOnInteraction: true,
        },
    });

    // sns슬라이드 모바일
    var swiper7 = new Swiper('.swiper7', {
        slidesPerView: 3,
        loop:true,
        autoplay: {
            delay: 800,
            disableOnInteraction: true,
        },
    });
 

    // top배너 닫기
    $('.notice button').click(function(){
        $('aside').remove();
        $('header, .main-slide').addClass('close');
    })


    // 베스트상품 탭메뉴
    $('.best-product .tab-nav a').click(function(e){
        e.preventDefault();
        $('.best-product .tab-nav li').removeClass('on');
        $(this).parent().addClass('on');
        var id=$(this).attr('href');
        $('.best-product .tab-contents div').stop(true).fadeOut(100);
        $(id).stop(true).delay(100).fadeIn();
    })


    

    

    // 베스트상품 모바일 탭메뉴
    $('.best-mo .tab-nav a').click(function(e){
        e.preventDefault();
        $('.best-mo .tab-nav li').removeClass('on');
        $(this).parent().addClass('on');
        var id=$(this).attr('href');
        $('.best-mo .tab-contents>div').stop(true).fadeOut(100);
        $(id).addClass('on');
        $(id).stop(true).delay(100).fadeIn();
    })

    // 베스트상품 모바일 슬라이드
    var swiper4 = new Swiper('.swiper4', {
        slidesPerView: 3,
        spaceBetween: 10
    });
    var swiper5 = new Swiper('.swiper5', {
        slidesPerView: 3,
        spaceBetween: 10
    });
    var swiper6 = new Swiper('.swiper6', {
        slidesPerView: 3,
        spaceBetween: 10
    });
    


    // 네비게이션
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.gnb').toggleClass('open');
    })

    $(window).resize(function(){
        var windowW=$(window).width();
        $('.gnb>ul>li>ul').removeAttr('style');
        $('.gnb a').removeClass('active');
        $('.gnb>ul>li').off('mouseenter');
        $('.gnb>ul>li>a').off('click');
        $('.gnb>ul').off('mouseleave');

        if(windowW>930){//pc
            $('.gnb>ul>li').on('mouseenter',function(){
                $('.gnb>ul>li>a').removeClass('active');
                $(this).children('a').addClass('active');              
                $('.gnb>ul>li>ul, .depth2-bg').stop().slideDown();
            });    
            $('.gnb>ul').on('mouseleave',function(){
                $('.gnb>ul>li>a').removeClass('active');
                $('.gnb>ul>li>ul, .depth2-bg').stop().slideUp();
            })
        }else{//930이하의 환경
            $('.gnb>ul>li>a').on('click',function(){
                $('.gnb>ul>li>a').removeClass('active');
                $(this).addClass('active');
                $('.gnb>ul>li>ul').stop().slideUp();
                $(this).next().stop().slideDown();
            });
        }

        // 신상품 모바일 더보기버튼
        $('.new-mo li').slice(0,4).show(); 
                
        $('.new-mo button').click(function(){
            $('.new-mo li:hidden').slice(0,4).slideDown();
            if($('.new-mo li:hidden').length==0){
                $(this).hide();
            }
        })
    }).resize();









})