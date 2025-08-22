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

// scroll card project
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".projects .container");
  const projectsSection = document.querySelector(".projects");

  // Pastikan elemen kontainer ditemukan
  if (container && projectsSection) {
    // Atur posisi awal di paling kanan (tanpa animasi)
    // Gunakan 'auto' sementara agar set posisi awal tidak ter-animasi
    container.style.scrollBehavior = "auto";
    container.scrollLeft = container.scrollWidth - container.clientWidth;
    // Kembalikan ke 'smooth' setelah posisi awal diatur
    container.style.scrollBehavior = "smooth";

    function scrollEndToStart() {
      // Dengan 'scroll-behavior: smooth', baris ini saja sudah cukup
      // untuk membuat animasi scroll yang mulus.
      container.scrollLeft = 0;
    }

    // Intersection Observer tetap sama
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Beri jeda sebelum memulai animasi scroll
            setTimeout(scrollEndToStart, 1000);
            observer.disconnect(); // Hentikan observasi setelah dijalankan
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(projectsSection);
  }
});
