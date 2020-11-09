function showContacts() {
    document.querySelector('.contacts').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.contacts').style.opacity = '1';
    }, 700)

}

showContacts()
