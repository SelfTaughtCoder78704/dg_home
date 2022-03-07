let mbNavBtn = document.getElementById("openMenu");
let mbNav = document.querySelector(".mb");
let navHead = document.querySelector(".mb-nav-head");
let navOpen = false;
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
let links = document.querySelectorAll(".links a");
let sections = document.querySelectorAll("section");

links.forEach((link) => {
  link.addEventListener("click", setActiveMenuItem);
});

function setActiveMenuItem() {
  links.forEach((link) => {
    link.classList.remove("active");
  });
  this.classList.add("active");
}

// toggle nav listener
mbNavBtn.addEventListener("click", toggleNav);

// toggle nav
function toggleNav() {
  if (navOpen) {
    this.src = "images/nav_btn.svg";
    mbNav.classList.remove("fixed-menu");
    navHead.classList.remove("fixed-head");
  } else {
    this.src = "images/the_x.svg";
    mbNav.classList.add("fixed-menu");
    navHead.classList.add("fixed-head");
  }
  mbNav.classList.toggle("open");

  return (navOpen = !navOpen);
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 600) {
    mbNav.classList.remove("open");
    mbNavBtn.src = "images/nav_btn.svg";
    navbar.classList.remove("sticky");
    return (navOpen = false);
  }
  if (window.innerWidth > 800) {
    mbNav.classList.remove("fixed-menu");
    navHead.classList.remove("fixed-head");
    navbar.classList.remove("sticky");
    return (navOpen = false);
  }
});

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function selectElementById(id) {
  return document.querySelector(`#${id}`);
}
function selectElementByClass(className) {
  return document.querySelector(`.${className}`);
}
const pageSections = [
  selectElementById("home"),
  selectElementById("services"),
  selectElementById("past"),
  selectElementById("current"),
  selectElementById("contact"),
];

const navItems = {
  home: selectElementByClass("homeNavItem"),
  services: selectElementByClass("servicesNavItem"),
  past: selectElementByClass("pastNavItem"),
  current: selectElementByClass("currentNavItem"),
  contact: selectElementByClass("contactNavItem"),
};

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const navItem = navItems[entry.target.id];
      navItem.classList.add("active");
      console.log("Intersecting: ", entry.target.id);
      Object.values(navItems).forEach((item) => {
        if (item != navItem) {
          item.classList.remove("active");
        }
      });
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

pageSections.forEach((sec) => observer.observe(sec));
