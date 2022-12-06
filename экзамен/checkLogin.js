const isUserRegistered = localStorage.getItem('isUserRegistered') === 'true'
if (isUserRegistered) {
    const noLoginDivs = document.getElementsByClassName('noLogin')
    for (let i = 0; i < noLoginDivs.length; i++) {
        noLoginDivs[i].classList.add('disabled')
    }
} else {
    const loginDivs = document.getElementsByClassName('logined')
    for (let i = 0; i < loginDivs.length; i++) {
        loginDivs[i].classList.add('disabled')
    }
}