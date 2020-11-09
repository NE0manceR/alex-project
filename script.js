
let logo = document.querySelector('.logo-write');
let x = 0;
let logotext = "dev-alexandt";


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
