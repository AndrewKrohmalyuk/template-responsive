$(function(){

    setWindowView();

    $('.burger-menu').click(function(){
        $(this).toggleClass('open');
        $('.menu-bar').toggleClass('active');
    });
});
