
// add 'active class' navbar ------------------------------------

let navLink = document.querySelectorAll('.links .link')
// let logo = document.querySelector('.logoInFooter')

// remove 'active class' from all 'links'
function removeNavLinkActive() {
  navLink.forEach(element => {
    element.classList.remove('active')
  })
}

for (let i = 0; i < navLink.length; i++){
  navLink[i].addEventListener('click', () => {
    removeNavLinkActive()
    navLink[i].classList.add('active')
  })
}

// tablet and mobiles:

// toggle menu  -------------------------------------------------
let menuIcon  = document.querySelector('.menu-icon')
let closeIcon = document.querySelector('.close')
let menuItems  = document.querySelector('.header__menu-items')
let overlay = document.querySelector('.overlay')

function openMenu() {
  menuItems.classList.add('open')
  overlay.classList.add('show')
}

function closeMenu() {
  menuItems.classList.remove('open')
  overlay.classList.remove('show')
}

menuIcon.onclick = openMenu

closeIcon.onclick = closeMenu

document.onkeyup = function (e) {
  if (e.key === 'Escape') {
    closeMenu()
  }
}

overlay.onmouseup = function () {
  closeMenu()
}

// --------------------------------------------------------------

// add 'active class' to 'link' ---------------------------------
let link = document.querySelectorAll('.header__menu-items .link')
let logo = document.querySelector('.logoInFooter')

// remove 'active class' from all 'links'
function removeActive() {
  link.forEach(element => {
    element.classList.remove('active')
  })
}


// add 'active class' to 'target link'
for (let i = 0; i < link.length; i++){
  link[i].addEventListener('click', () => {
    removeActive()
    link[i].classList.add('active')
  })
}

// add 'active class' to 'home link' when user clicks on 'logo'
logo.addEventListener('click', () => {
  removeActive()
  link[0].classList.add('active')
})

// --------------------------------------------------------------

let scrollUp = document.querySelector('.scrollUp')
window.onscroll = function () { 
  window.scrollY > 3050 ? scrollUp.style.transform = 'translateY(0)' : scrollUp.style.transform = 'translateY(200%)';
}
scrollUp.onclick = () => { scrollTo(0, 0) }