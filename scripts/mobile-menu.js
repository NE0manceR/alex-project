let menu = document.querySelector('.mobile-wrap');
let m = document.querySelector('.mobile-menu');

function showMobileMenu() {
    menu.style.width = "100%";
    console.log('work')
}


menu.addEventListener('click', (event) => {
    if (event.clientX < menu.clientWidth - m.clientWidth + 100) {
        menu.style.width = '0%'
    }
})

window.addEventListener('resize',()=>{
    menu.style.width = '0%';
})

function hideMenu() {
    menu.style.width = '0%';
} 
