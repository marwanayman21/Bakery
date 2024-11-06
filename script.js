const navbar = document.querySelectorAll("nav");
const navLinks = document.querySelectorAll("nav a");
const imgs = document.querySelectorAll("nav img");
window.addEventListener("scroll", () => {
  navbar.forEach((nav) => {
    navLinks.forEach((tab) => {
      imgs.forEach((img) => {
        if (window.scrollY > 10) {
          nav.style.backgroundColor = "white";
          nav.style.borderWidth = 0;
          nav.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
          tab.style.color = " rgb(55, 55, 55)";
          img.src =
            "https://mahmoudzin.github.io/bakerysite/images/bakery-color.png";
        } else {
          nav.style.backgroundColor = "transparent";
          nav.style.borderWidth = "1px";
          nav.style.boxShadow = "none";
          tab.style.color = "rgb(255, 255, 255)";
          img.src =
            "https://mahmoudzin.github.io/bakerysite/images/bakery-light-1.png";
        }
      });
    });
  });
});

const menuBtn = document.querySelector(".menubtn");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

menuLinks.forEach((tab) => {
  tab.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});
