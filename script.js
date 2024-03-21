// Toggle Navbar Menu
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Actions Active
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let scrollY = window.scrollY;

  sections.forEach((section) => {
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (scrollY >= offset && scrollY < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });

  // Sticky Navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", scrollY > 100);

  //   remover toggle icom and navbar when click navbar link(scroll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal
ScrollReveal({
//   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portofolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(
  ".home-content h1, .about-img",
  { origin: "left" }
);
ScrollReveal().reveal(
  ".home-content p, .about-content",
  { origin: "right" }
);

// typed js
const typed = new Typed('.multiple-text', { 
    strings: ['Frontend Developer','Student','Blogger' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
