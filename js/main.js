$(function(){
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
});
