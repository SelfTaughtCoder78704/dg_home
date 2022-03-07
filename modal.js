let imagesToTriggerModal = document.querySelectorAll(
  ".image-to-trigger-modal img"
);
let anchorsToTriggerModal = document.querySelectorAll(".anchorToTrigger");
let modal = document.querySelector(".modal");
let modalImage = document.querySelector(".modal-image img");


function setImageInModal(image) {
  modalImage.src = image.src;
}

function showModalWithImage(image) {
  modal.style.display = "block";
  setImageInModal(image);
}


imagesToTriggerModal.forEach((image) => {
  image.addEventListener("click", () => {
    showModal(image);
  });
});


anchorsToTriggerModal.forEach((anch) => {
  anch.addEventListener("click", () => {
    showModal(anch);
  });
});

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function showModal(trigger) {
  if (trigger.getAttribute("data-pop") === "barnz") {
    modal.style.display = "block";
    modalImage.src = trigger.src || trigger.getAttribute("data-src");
    document.querySelector(".modal p").textContent = "Barndominiums";
  }

  if (trigger.getAttribute("data-pop") === "additionz") {
    modal.style.display = "block";
    modalImage.src = trigger.src || trigger.getAttribute("data-src");
    document.querySelector(".modal p").textContent = "Additions/Remodels";
  }

  if (trigger.getAttribute("data-pop") === "newConz") {
    modal.style.display = "block";
    modalImage.src = trigger.src || trigger.getAttribute("data-src");
    document.querySelector(".modal p").textContent = "New Construction";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let sliderImages = document.querySelectorAll(".splide__slide img");
  sliderImages.forEach((image) => {
    image.addEventListener("click", () => {
      showModalWithImage(image);
    });
  });
});

