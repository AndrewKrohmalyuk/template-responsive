
function setWindowView() {
    if($(window).width() < 900) {

    } else {
        $('.fullpage').fullpage({
            controlArrows: false,
        });
    }
}
