$(function(){

    setWindowView();
    $(window).resize(function(){
        setWindowView();
    });

    $('.burger-menu').click(function(){
        $(this).toggleClass('open');
        $('.mobile-menu').toggleClass('active');
    });
});
