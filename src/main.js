// nav bar
let hamburger = document.querySelector(".hamburger");
let navList = document.querySelector(".nav-list");
let closeBtn = document.querySelector(".close");

function openMenu() {
  navList.classList.add("open");
  document.body.classList.add("no-scroll"); // blok scroll
}

function closeMenu() {
  navList.classList.remove("open");
  document.body.classList.remove("no-scroll"); // aktifkan scroll
}

hamburger.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

// nav bar
