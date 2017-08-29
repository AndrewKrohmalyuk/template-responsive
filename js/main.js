$(function(){
    var count = 1;

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
        _scrollTo(target);
    });

    $('.nav-btn .btn').click(function(){
        // _scrollTo(count);
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

});
