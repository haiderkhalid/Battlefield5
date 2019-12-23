const sliders = document.querySelectorAll('.img-slide');
const images = document.querySelectorAll('.img-slide .slideImg');
const boxes = document.querySelectorAll('.img-slide .box');
const carosels = document.querySelectorAll('.carosel');

let imgCounter = 1;
let boxCounter = 1;
let imgSize = images[0].clientWidth + 40;
let boxSize = boxes[0].clientWidth + 65;

carosels[0].style.transform = `translateX(${-imgSize * imgCounter}px)`;
carosels[1].style.transform = `translateX(${-boxSize * boxCounter}px)`;

sliders.forEach((slide, index) => {
    slide.addEventListener('click', (e) => {
        if (e.target.classList.contains('arrow-left')) {
            if (slide.children[1].children[0].children[0].children[0].classList.contains('slideImg')) {
                if (imgCounter >= images.length - 1) return;
                carosels[index].style.transition = 'transform .5s ease-in-out';
                imgCounter++;
                carosels[index].style.transform = `translateX(${-imgSize * imgCounter}px)`;
            } else if (slide.children[1].children[0].children[0].children[0].classList.contains('box')) {
                if (boxCounter >= boxes.length - 1) return;
                carosels[index].style.transition = 'transform .5s ease-in-out';
                boxCounter++;
                carosels[index].style.transform = `translateX(${-boxSize * boxCounter}px)`;
            }
        }

        if (e.target.classList.contains('arrow-right')) {
            if (slide.children[1].children[0].children[0].children[0].classList.contains('slideImg')) {
                if (imgCounter <= 0) return;
                carosels[index].style.transition = 'transform .5s ease-in-out';
                imgCounter--;
                carosels[index].style.transform = `translateX(${-imgSize * imgCounter}px)`;
            } else if (slide.children[1].children[0].children[0].children[0].classList.contains('box')) {
                if (boxCounter <= 0) return;
                carosels[index].style.transition = 'transform .5s ease-in-out';
                boxCounter--;
                carosels[index].style.transform = `translateX(${-boxSize * boxCounter}px)`;
            }
        }
    })
});


carosels.forEach(carosel => {
    carosel.addEventListener('transitionend', () => {
        if (carosel.children[0].classList.contains('slideImg')) {
            if (images[imgCounter].id === 'lastClone') {
                carosel.style.transition = 'none';
                imgCounter = images.length - 2;
                carosel.style.transform = `translateX(${-imgSize * imgCounter}px)`;
            }
            if (images[imgCounter].id === 'firstClone') {
                carosel.style.transition = 'none';
                imgCounter = images.length - imgCounter;
                carosel.style.transform = `translateX(${-imgSize * imgCounter}px)`;
            }
        } else if (carosel.children[0].classList.contains('box')) {
            if (boxes[boxCounter].id === 'lastClone') {
                carosel.style.transition = 'none';
                boxCounter = boxes.length - 2;
                carosel.style.transform = `translateX(${-boxSize * boxCounter}px)`;
            }
            if (boxes[boxCounter].id === 'firstClone') {
                carosel.style.transition = 'none';
                boxCounter = boxes.length - boxCounter;
                carosel.style.transform = `translateX(${-boxSize * boxCounter}px)`;
            }
        }
    })
})