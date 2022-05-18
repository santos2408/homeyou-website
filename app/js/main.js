const menu = document.querySelector('[data-js="menu"]')
const menuToggle = document.querySelector('[data-js="menu-toggle"]')
const menuClose = document.querySelector('[data-js="menu-close"]')
const menuList = document.querySelector('[data-js="menu-list"]')

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menu.classList.add('show-menu')
  })
}

if (menuClose) {
  menuClose.addEventListener('click', () => {
    menu.classList.remove('show-menu')
  })
}

// close nav bar when link is clicked
menuList.addEventListener('click', () => {
  menu.classList.remove('show-menu')
})

// close nav bar when window out is clicked
window.addEventListener('click', event => {
  const clickedElement = event.target
  
  if (Array.from(clickedElement.classList).includes('show-menu')) {
    menu.classList.remove('show-menu')
  }

})


// stricky menu with scrolling
const scrollHeader = () => {
  const header = document.querySelector('[data-js="header"]')
  const nav = document.querySelector('[data-js="nav"]')

  if (window.scrollY >= 25) {
    header.classList.add('scroll-header')
    nav.classList.add('scroll-nav')
  } else {
    header.classList.remove('scroll-header')
    nav.classList.remove('scroll-nav')
  }
}

window.addEventListener('scroll', scrollHeader)