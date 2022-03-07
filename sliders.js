document.addEventListener("DOMContentLoaded", function () {
  let pastSplide = new Splide("#past .splide", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "1rem",

    breakpoints: {
      900: {
        perPage: 2,
      },
      600: {
        perPage: 1,
      },
    },
  });
  let currentSplide = new Splide("#current .splide", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "1rem",

    breakpoints: {
      900: {
        perPage: 2,
      },
      600: {
        perPage: 1,
      },
    },
  });

  pastSplide.mount();
  currentSplide.mount();
});

const slideSections = [selectElementById("past"), selectElementById("current")];

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target.id);
      const images = entry.target.querySelectorAll("img");
      images.forEach((img) => {
        img.src = img.getAttribute("data-src");
      });
    }
  });
}

const slideObserver = new IntersectionObserver(
  observerCallback,
  observerOptions
);

slideSections.forEach((sec) => slideObserver.observe(sec));
