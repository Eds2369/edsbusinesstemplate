let closeBtn = document.getElementById('close-btn')
let barsBtn = document.getElementById('bars-btn')
let navLinks = document.getElementById('nav-links')

barsBtn.addEventListener('click', () => {
    navLinks.classList.add('show')
})

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show')
})