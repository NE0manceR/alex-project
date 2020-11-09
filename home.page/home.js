let homePage = document.querySelector('.home');
showHeader()
function showHeader() {
    homePage.style.opacity = '0';

    setTimeout(() => {
        homePage.style.opacity = '1';

    }, 700)
}

