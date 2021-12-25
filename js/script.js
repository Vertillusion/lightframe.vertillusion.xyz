let cards = document.querySelector(".card");
let images = document.querySelectorAll(".cardImg");
let backgrounds = document.querySelectorAll(".card__bg");
let range = 40;

// const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
let calcValue = function calcValue(a, b) {
    return (a / b * range - range / 2).toFixed(1);
}; // thanks @alice-mx

let timeout = void 0;
document.addEventListener('mousemove', function (_ref) {
    let x = _ref.x, y = _ref.y;
    if (timeout) {
        window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(function () {
        let yValue = calcValue(y, window.innerHeight);
        let xValue = calcValue(x, window.innerWidth);
        cards.style.transform = "rotateX(" + yValue + "deg) rotateY(" + xValue + "deg)";
        [].forEach.call(images, function (image) {
            image.style.transform = "translateX(" + -xValue + "px) translateY(" + yValue + "px)";
        });
        [].forEach.call(backgrounds, function (background) {
            background.style.backgroundPosition = xValue * .45 + "px " + -yValue * .45 + "px";
        });
    });
}, false);

let xhr = new XMLHttpRequest()
xhr.open("get", "https://lightframe.vertexstudio.xyz/Update/Update.txt")
xhr.send()
xhr.onreadystatechange = function () {
    document.getElementById("updateLog").innerHTML = xhr.response;
}