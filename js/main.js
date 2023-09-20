$(function () {

    $(window).on('scroll', function () {
        // 변수에 스크롤한 양을 담는다.
        let sct = $(window).scrollTop()
        console.log(sct);
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });

    // 스크롤 이벤트
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('.ev').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on')
            }
            else {
                $(this).removeClass('on')
            };
        })
    });

    $('header .menu').on('click', function (e) {
        e.preventDefault();
        $('.header .gnb').toggleClass('on');
        $(this).toggleClass('on')
    })


    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.main_visual .dots li').eq(0).addClass('on');
        $('.main_visual .dots li').eq(c).addClass('on')
            .siblings().removeClass('on');

    });



    $('.main_slide').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        dots: false,
        infinite: true,

        prevArrow: "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
        nextArrow: "<button type='button' class='slick-next'>Next</button>",


    });

    $('.main_visual .dots li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.main_slide').slick('slickGoTo', idx);
    })

    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    })
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    })







})