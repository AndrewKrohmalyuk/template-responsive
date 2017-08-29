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
                controlArrows: true,
            });
            run = true;
        }
    }
}

function getHash() {
    return window.location.hash.toString().slice(1);
}

function setHash(val) {
    window.location.hash = val;
}

function _scrollTo(target) {
    $('body').animate({
        scrollTop: ($('.slide[data-index="' + target + '"]').offset().top)
    }, 500);
}
