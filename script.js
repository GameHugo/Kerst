const links = [
    "https://www.youtube.com/embed/aAkMkVFwAoo",
    "https://www.youtube.com/embed/hguovxx67Hs",
    "https://www.youtube.com/embed/E8gmARGvPlI",
    "https://www.youtube.com/embed/3H80jKoKCTs",
    "https://www.youtube.com/embed/evHEkXFtO40",
    "https://www.youtube.com/embed/dfTCObc5BuE"
]
let loaded = false;
function muziekButton() {
    fade(document.getElementById("above"));
    if(loaded) return;
    let container = document.getElementById("music-container");
    let i = 0;
    const timer = setInterval(function () {
        let frame = document.createElement("iframe");
        frame.className = "musicFrame";
        frame.src = links[i];
        container.append(frame);
        i++;
        if(i == links.length) clearInterval(timer);
    }, 250);
    loaded = true;
}

function terugButton() {
    unFade(document.getElementById("above"))
}

function fade(element) {
    let op = 0.1;  // initial opacity
    let first = true;
    const timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.2;
        if (first) {
            element.style.display = 'block';
            first = false;
        }
    }, 5);
}

function unFade(element) {
    let op = 1;  // initial opacity
    const timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 5);
}