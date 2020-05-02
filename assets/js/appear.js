/*==========SELECTORS============== */
const imNavjeet = document.querySelector('.im-navjeet figure');
const imNavjeetHeader = document.querySelector('.slide .header-desc');
const hello = document.querySelector('#hello article');
const design = document.querySelector('#design');
const develop = document.querySelector('#develop');

/*==========SELECTORS============== */
let frontLeft = true;
let helloLeft = true;
let designLeft = true;
let developLeft = true;
let smallDevice = false;
if (window.innerWidth < 1200){
    smallDevice = true;
}
function scrollAppear() {
    let screenPosition = window.innerHeight;
    if (frontLeft) {
        setTimeout(function () {
            imNavjeet.style.opacity = 1;
            imNavjeet.style.transform = 'translate(0,0)';
            imNavjeetHeader.style.opacity = 1;
            imNavjeetHeader.style.transform = 'translate(0,0)';
            frontLeft = false;
        }, 200);
    }
    if (hello.getBoundingClientRect().top < screenPosition-150 && helloLeft){
        hello.style.opacity = 1;
        hello.style.transform = 'translate(0,0)';
        helloLeft = false;
    }
    if ((design.getBoundingClientRect().top < screenPosition-100 && designLeft) || smallDevice){
        design.style.opacity = 1;
        design.style.transform = 'translate(0,0)';
        designLeft = false;
    }
    if ((develop.getBoundingClientRect().top < screenPosition-100 && developLeft) || smallDevice){
        develop.style.opacity = 1;
        develop.style.transform = 'translate(0,0)';
        developLeft = false;
    }
}





scrollAppear();
window.addEventListener('scroll', scrollAppear);
