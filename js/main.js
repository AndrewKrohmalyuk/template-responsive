$(function(){
    var count = 1;
    var currSlide = 0;

    tabsController(currSlide);
    setWindowView();
    $(window).resize(function(){
        setWindowView();
    });
    $('.burger-menu').click(function(){
        $(this).toggleClass('open');
        $('.mobile-menu').toggleClass('active');
        $('.header').toggleClass('active');
    });
    $('[data-mm-close]').click(function(){
        $('.burger-menu').removeClass('open');
        $('.mobile-menu').removeClass('active');
        $('.header').removeClass('active');
    });
    $('.mobile-menu .item').click(function(){
        var target = $(this).attr('data-index');
        if($(window).width() < 900) {
            count = parseFloat($(this).attr('data-index'));
            _scrollTo(target);
        } else {
            currSlide = target - 1;
            tabsController(currSlide);
            $.fn.fullpage.moveTo('section', currSlide);
        }
    });
    $('.nav-btn .btn').click(function(){
        if(!$(this).hasClass('up')) {
            count++;
            if(count > 4) count = 4;
            _scrollTo(count);
            console.log(count);
        } else {
            count--;
            if(count < 1) count = 1;
            _scrollTo(count);
            console.log(count);
        }
    })
    $('.slide-btn .btn').click(function(){
        if($(this).hasClass('left')) {
            currSlide--;
            if(currSlide < 0) {
                currSlide = 0;
            }
            $.fn.fullpage.moveTo('section', currSlide);
            tabsController(currSlide);
        } else {
            currSlide++;
            if(currSlide > 3) currSlide = 3;
            $.fn.fullpage.moveTo('section', currSlide);
            tabsController(currSlide);
        }
    });
    $('.tabs a').click(function() {
        $('.tabs a').removeClass('active');
        $(this).addClass('active');
        currSlide = parseFloat($(this).attr('data-index') - 1);
        $.fn.fullpage.moveTo('section', currSlide);
    });
});
