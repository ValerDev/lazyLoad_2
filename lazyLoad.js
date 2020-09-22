let sliderImg = document.querySelectorAll(".content img")
let rectLeft = sliderImg[0].getBoundingClientRect().left
let slideLeftBoder = 0
const changer = document.getElementById('next')
let clicked = false;

const lazyLoader = () => {
    sliderImg.forEach((el)=> {
        elementLeft = el.getBoundingClientRect().left
        let isVisible = elementLeft - rectLeft < 700 ?  true : false;

        if(isVisible && !el.attributes.src && !clicked) {
            el.setAttribute('src', el.dataset.src)
        }

        if(!isVisible && clicked) {
            el.setAttribute('src', el.dataset.src)
            el.style.transform = `translateX(${slideLeftBoder}px)`;
            clicked = false
        }
    })
}

changer.onclick = () => {
    clicked = !clicked
    if(slideLeftBoder === -(sliderImg.length-1 * 700)) {
        slideLeftBoder = 0;
    } else {
        slideLeftBoder-=700;
    }
    lazyLoader()
}

window.addEventListener('DOMContentLoaded',lazyLoader)

