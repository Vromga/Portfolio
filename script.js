let panelElem = document.querySelector('.panel');
console.log(panelElem);
let titleElem = panelElem.querySelector('.panel--title');
 console.log(titleElem);
titleElem.onclick = function() {
    console.log('work');
    panelElem.classList.toggle('open');
};