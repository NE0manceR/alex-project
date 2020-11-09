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
        window.location.href = "../project.vikan/project.info.html"
    }
    if (e[1].classList[1] == "alex") {
        window.location.href = "../project.alex/project.info.html"
    }
    if (e[1].classList[1] == "agym") {
        window.location.href = "../project.agym/project.info.html"
    }
    if (e[1].classList[1] == "component") {
        window.location.href = "../project.components/project.info.html"
    }
    if (e[1].classList[1] == "pro") {
        window.location.href = "../project.projectPro/project.info.html"
    }
    if (e[1].classList[1] == "berings") {
        window.location.href = "../project.berings/project.info.html"
    }


}