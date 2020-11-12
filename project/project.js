showProject()
function showProject() {
    document.querySelector('.project').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.project').style.opacity = '1';
    }, 700)
}

function selectProject(event) {
    let e = event.composedPath()
    // console.log(e[1].classList[1]);
    // console.log(event.path[1].classList[1]);//

    if (e[1].classList[1] == "vikan") {
        window.location.href = "../vikan/index.html"
    }
    if (e[1].classList[1] == "alex") {
        window.location.href = "../portfolio/index.html"
    }
    if (e[1].classList[1] == "agym") {
        window.location.href = "../agym/index.html"
    }
    if (e[1].classList[1] == "component") {
        window.location.href = "../projectPro/index.html"
    }
    if (e[1].classList[1] == "pro") {
        window.location.href = "../component/index.html"
    }
    if (e[1].classList[1] == "berings") {
        window.location.href = "../berings/index.html"
    }


}