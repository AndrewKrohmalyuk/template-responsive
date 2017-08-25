var run = false;

function setWindowView() {
    if($(window).width() < 900) {
        if(run){
            $.fn.fullpage.destroy('all');
        }
        run = false;///Мое решение
    } else {
        if(!run) {
            $('.fullpage').fullpage({
                controlArrows: false,
            });
            run = true;
        }
    }
}
