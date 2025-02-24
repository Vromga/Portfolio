let panelElem = document.querySelector('.panel');
let titleElem = panelElem.querySelector('.panel--title');
titleElem.onclick = function () {
    panelElem.classList.toggle('open');
};
//****************** SLIDER *******************//
const sliderDescription = [
    `<div class="description_mobile--about-title">The Yalow</div>
                <ul class="description_mobile--about-list">
                    <li>Pixel perfect</li>
                    <li>Adaptive</li>
                    <li>Use SVG</li>
                </ul>`,
    `<div class="description_mobile--about-title">Repair Design Project</div>
                <ul class="description_mobile--about-list">
                    <li>Responsive</li>
                    <li>Adaptive</li>
                    <li>Use SVG</li>
                    <li>Grid Css</li>
                    <li>Flex Css</li>
                </ul>`
];

const urlProject = [
    `./assets/project/theAllow/index.html`, `./assets/project/repaire/index.html`
];

let descriptionMobile = document.querySelector('.description_mobile');
let descriptionMobileSpan = document.querySelector('.description_mobile--span');
descriptionMobileSpan.addEventListener('click', togleDescription);

function togleDescription() {
    descriptionMobile.classList.toggle('open2');
}
let descriptionMobileAbout = document.querySelector('.description_mobile--about');
descriptionMobileAbout.innerHTML = sliderDescription[0];
let linkChangeProject = document.querySelector('.slider--link');
console.dir(linkChangeProject);

let items = document.querySelectorAll('.carousel--container-item');
let currentItem = 0;
let isEnabled = true;
function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;

}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        descriptionMobileAbout.innerHTML = sliderDescription[currentItem];
        linkChangeProject.href = urlProject[currentItem];
        isEnabled = true;
    });
}

function f() {
    
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

document.querySelector('.control.left').addEventListener('click', function () {
    if (isEnabled) {
        previousItem(currentItem);
    }
});

document.querySelector('.control.right').addEventListener('click', function () {
    if (isEnabled) {
        nextItem(currentItem);
    }
});

const swipedetect = (el) => {

    let surface = el;
    let startX = 0;
    let startY = 0;
    let distX = 0;
    let distY = 0;
    let startTime = 0;
    let elapsedTime = 0;

    let threshold = 150;
    let restraint = 100;
    let allowedTime = 300;

    surface.addEventListener('mousedown', function (e) {
        startX = e.pageX;
        startY = e.pageY;
        startTime = new Date().getTime();
        e.preventDefault();
    }, false);

    surface.addEventListener('mouseup', function (e) {
        distX = e.pageX - startX;
        distY = e.pageY - startY;
        elapsedTime = new Date().getTime() - startTime;
        if (elapsedTime <= allowedTime) {
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                if ((distX > 0)) {
                    if (isEnabled) {
                        previousItem(currentItem);
                    }
                } else {
                    if (isEnabled) {
                        nextItem(currentItem);
                    }
                }
            }
        }
        e.preventDefault();
    }, false);

    surface.addEventListener('touchstart', function (e) {
        if (e.target.classList.contains('arrow') || e.target.classList.contains('control')) {
            if (e.target.classList.contains('left')) {
                if (isEnabled) {
                    previousItem(currentItem);
                }
            } else {
                if (isEnabled) {
                    nextItem(currentItem);
                }
            }
        }
        let touchobj = e.changedTouches[0];
        startX = touchobj.pageX;
        startY = touchobj.pageY;
        startTime = new Date().getTime();
        e.preventDefault();
    }, false);

    surface.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, false);

    surface.addEventListener('touchend', function (e) {
        let touchobj = e.changedTouches[0];
        distX = touchobj.pageX - startX;
        distY = touchobj.pageY - startY;
        elapsedTime = new Date().getTime() - startTime;
        if (elapsedTime <= allowedTime) {
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                if ((distX > 0)) {
                    if (isEnabled) {
                        previousItem(currentItem);
                    }
                } else {
                    if (isEnabled) {
                        nextItem(currentItem);
                    }
                }
            }
        }
        e.preventDefault();
    }, false);
};

let el = document.querySelector('.carousel');
swipedetect(el);


