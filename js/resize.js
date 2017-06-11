var bg = $("html");

function resizeBackground() {
    bg.height(window.innerHeight);
}

$(window).resize(resizeBackground);
resizeBackground();