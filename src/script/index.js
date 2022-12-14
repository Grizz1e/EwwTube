const menuBtn = document.getElementById("menu-btn")
const leftContainer = document.getElementById("left-container")
const searchBar = document.getElementById("search-bar")
const centerNav = document.getElementById("center-nav")
const homepageMain = document.getElementById("home-area")
const vidBox = document.querySelectorAll('.vid-box')
const accBtn = document.getElementById('account-btn')
const accMenu = document.getElementById('account-menu')
const signoutBtn = document.getElementById('sign-out')
const followingBtn = document.getElementById('following')

menuBtn.addEventListener('click', () => {
    leftContainer.classList.toggle("hidden")
    homepageMain.classList.toggle("menu-closed")
})

searchBar.addEventListener("focusin", () => {
    centerNav.style.border = "4px solid #de0151"
})
searchBar.addEventListener("focusout", () => {
    centerNav.style.border = "none"
})
centerNav.addEventListener("mouseover", () => {
    centerNav.style.border = "4px solid #de0151"
})
centerNav.addEventListener("mouseout", () => {
    if (document.activeElement !== searchBar) {
        centerNav.style.border = "none"
    }
})
accBtn.addEventListener('click', () => {
    accBtn.classList.toggle('text-highlight')
    accMenu.classList.toggle('hidden')
})
signoutBtn.addEventListener('click', () => {
    window.location.replace('/signin')
})
followingBtn.addEventListener('click', () => {
    window.location.href = '/following'
})
vidBox.forEach(vid => {
    vid.addEventListener('click', () => {
        window.location = '/watch'
    })
})