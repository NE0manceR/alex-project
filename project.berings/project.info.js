
showVikan()
function showVikan() {
    document.querySelector('.project-vikan').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.project-vikan').style.opacity = '1';
    },700)
}





let vikanImg = document.querySelector('.project-img');
let numberOfSlide = 1
function changeVikRight() {
    if (numberOfSlide < 3) {
        numberOfSlide++
        vikanImg.style.opacity = '0'
        setTimeout(() => {
            vikanImg.src = `../image/Bearings/${numberOfSlide}.png`
            vikanImg.style.opacity = '1'
        }, 200);
    }
}

function changeVikleft() {
    if (numberOfSlide > 1) {
        numberOfSlide--


        vikanImg.style.opacity = '0'
        setTimeout(() => {
            vikanImg.src = `../image/Bearings/${numberOfSlide}.png`
            vikanImg.style.opacity = '1'
        }, 200);
    }
}