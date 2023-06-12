$(function(){
    //fullpage
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors:['main', 'about', 'flavor', 'promotion', 'qna'],
        autoScrolling:true,
        scrollHorizontally: true,
    })
    
    //flavor section
    $('.flavor__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    
    //promotion section
    $('.promotion__slider').slick({
        variableWidth: false,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    //qna section
    $('.qna__acc-list h2').click(function(){
        $('.qna__acc-text').slideUp('fast')
        $(this).next('.qna__acc-text').stop().slideToggle('fast')
        $(this).stop().toggleClass('active')
        $(this).parent().siblings().children('.qna__acc-list h2').removeClass('active')
    })
    
    //mobile header btn
    $('.header__btn-open').click(function(){
        $('.header__nav').addClass('active')
    })
    $('.header__btn-close, .header__nav a').click(function(){
        $('.header__nav').removeClass('active')
    })
})
