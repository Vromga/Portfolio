const buttonMobile = document.querySelector('.controls--mobile');
const buttonBack = document.querySelector('.controls--back');
const frame = document.querySelector('.frame');
const body = document.getElementsByTagName('body');
let vwidth = document.documentElement.clientWidth;

if (vwidth < 480) {
    buttonMobile.style.display = 'none';
}
buttonMobile.addEventListener('click', function () {
    if (buttonMobile.textContent === 'mobile') {
        buttonMobile.textContent = 'desktop';
        frame.style.width = '392px';
    } else {
        buttonMobile.textContent = 'mobile';
        frame.style.width = '100%';
    }
});
buttonBack.addEventListener('click', () => location.href = '../../../index.html');