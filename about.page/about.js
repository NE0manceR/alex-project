function showAbout() {
    document.querySelector('.about').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.about').style.opacity = '1';
    }, 700)

}

showAbout()


function scrollto() {
    console.log('work');
    window.scrollTo({ top: 600, behavior: 'smooth' });
}


