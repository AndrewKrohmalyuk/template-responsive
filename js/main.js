$(function(){
    var count = 1;
    var currSlide = 0;
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
        count = parseFloat($(this).attr('data-index'));
        _scrollTo(target);
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
            if(currSlide < 0) currSlide = 0;
            $.fn.fullpage.moveTo('section', currSlide);
        } else {
            currSlide++;
            if(currSlide > 3) currSlide = 3;
            $.fn.fullpage.moveTo('section', currSlide);
        }
    });
});
