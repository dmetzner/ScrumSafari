function rotateCookie() {
    var cookie = document.getElementById("cookie");
    var rotate = 0;
    var rotateInterval = setInterval(function() {
        if (rotate == 360) {
            clearInterval(rotateInterval);
        }
        rotate += 5;
        cookie.style.transform = "rotate(" + rotate + "deg)";
    }, 10);
}