
let logo = document.querySelector('.logo-write');
let x = 0;
let logotext = "dev-alexandt";
let headerBcg = document.querySelector('header');

// function changeHome() {
//     homePage.style.opacity = '0'
//     console.log(window.location.pathname);

// }



myLogo()

function myLogo() {
    setTimeout(() => {

        let writelogo = setInterval(() => {
            if (x < logotext.length) {
                logo.innerText += logotext[x]
                x++

            } else {
                setTimeout(() => {
                    logo.innerHTML = "dev-alexand"

                }, 700)
                setTimeout(() => {
                    logo.innerText += 'r'
                }, 1500)
                clearInterval(writelogo)

            }

        }, 130)

    }, 1000);
}

window.addEventListener('scroll', ()=>{
    console.log(window.scrollY);
    if (window.scrollY != 0) {
        headerBcg.style.background = 'rgba(0, 0, 0, 0.7)'
    } else {
        headerBcg.style.background = 'transparent'

    }
})
