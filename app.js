// Intersection observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      showInter(entry);
    }
  });
});

const showInter = (el) => {
  el.target.classList.add("show");
};

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Nav menu links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("ul a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    if (li.classList.contains(current)) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  });
});

// Hamburger
const ham = document.querySelector(".nav-content-hamburger");
const hamMenu = document.querySelector(".nav-content-hamburger-menu");

ham.addEventListener("click", () => {
  ham.classList.toggle("ham-active");
  hamMenu.classList.toggle("menu-active");
});

document.querySelectorAll(".nav-content-hamburger-menu__item").forEach((r) =>
  r.addEventListener("click", () => {
    ham.classList.remove("ham-active");
    hamMenu.classList.remove("menu-active");
  })
);

// Form
const inputs = document.querySelectorAll("input");
const textAreas = document.querySelectorAll("textarea");
const submit = document.querySelector(".submit");

submit.addEventListener("click", () => {
  setTimeout(() => {
    inputs.forEach((input) => (input.value = ""));
    textAreas.forEach((area) => (area.value = ""));
  }, 2000);
});
