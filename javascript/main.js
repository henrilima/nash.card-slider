var enableBox = false;
var lastID = false;
var time = false;
var eTime = false;
var lastTime = false;

function revealBoxContent(ID) {
    time = new Date().getMinutes();

    if (enableBox == false) {
        document
            .querySelectorAll(`main section.box`)
            [ID].classList.add("reveal-w");
        document.querySelectorAll(`div.master`)[ID].classList.add("reveal-d");
        enableBox = true;
        lastID = ID;
        eTime = time;
        lastTime = ++time;

        setTimeout(() => {
            eTime = ++eTime;
        }, 7000);
    } else {
        document
            .querySelectorAll(`main section.box`)
            [lastID].classList.remove("reveal-w");
        document
            .querySelectorAll(`div.master`)
            [lastID].classList.remove("reveal-d");
        document
            .querySelectorAll(`main section.box`)
            [ID].classList.add("reveal-w");
        document.querySelectorAll(`div.master`)[ID].classList.add("reveal-d");
        lastID = ID;
        eTime = time;
        lastTime = ++time;
        setTimeout(() => {
            eTime = ++eTime;
        }, 7000);
    }
}

setInterval(() => {
    if (eTime === lastTime && [0, 1, 2, 3, 4].includes(lastID)) {
        document
            .getElementsByClassName("box")
            [lastID].classList.remove("reveal-w");
        document
            .getElementsByClassName("master")
            [lastID].classList.remove("reveal-d");
        eTime = false;
        lastTime = false;
    }
}, 1000);
