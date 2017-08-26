var run = false;

function setWindowView() {
    if($(window).width() < 900) {
        if(run){
            $.fn.fullpage.destroy('all');
        }
        run = false;///!!!
    } else {
        if(!run) {
            $('.fullpage').fullpage({
                controlArrows: false,
            });
            run = true;
        }
    }
}
