// Select all the desktop nav links
let mainNavLinks = document.querySelectorAll("#desktop-nav a");
// Select all the page sections
let mainSections = document.querySelectorAll("main .content section");

let lastId;
let cur = [];

// Highlight the current section in the navbar
window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Show the mobile nav when clicked
function mobileNavOpen() {
  let items = document.querySelector('.navbar-items');
  let links = document.querySelectorAll('.navbar-items .navbar-links');
  let menu = document.querySelector('.navbar-menu');
  let close = document.querySelector('.navbar-menu-close');

  console.log(menu)

  // Show menu
  items.classList.add('display');
  items.classList.remove('hidden');

  // Hide menu button
  menu.classList.add('hidden');
  menu.classList.remove('display');

  // Show close button
  close.classList.add('display');
  close.classList.remove('hidden');

  // Remove if linked is clicked
  links.forEach(function (links) {
    links.addEventListener('click', ()=>{
      items.classList.remove('display');
      items.classList.add('hidden');
      close.classList.remove('display');
      close.classList.add('hidden');
      menu.classList.remove('hidden');
      menu.classList.add('display');
    });
  });
} 

// Show the mobile nav when clicked
function mobileNavClose() {
  let items = document.querySelector('.navbar-items');
  let menu = document.querySelector('.navbar-menu');
  let close = document.querySelector('.navbar-menu-close');

  close.addEventListener('click', ()=>{
    items.classList.remove('display');
    items.classList.add('hidden');
    close.classList.remove('display');
    close.classList.add('hidden');
    menu.classList.remove('hidden');
    menu.classList.add('display');
  });
} 