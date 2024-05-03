'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
// project popup 

const projectLinks = {
  'petfashion': {
    liveUrl: 'https://petfashion.vercel.app',
    sourceUrl: 'https://github.com/bohaz/petfashion'
  },
  'space-travelers-hub': {
    liveUrl: 'https://space-travelers-hub-g5v6.onrender.com',
    sourceUrl: 'https://github.com/bohaz/Space-Travelers-Hub'
  },
  'air-quality': {
    liveUrl: 'https://air-quality-monitoring-app.onrender.com/',
    sourceUrl: 'https://github.com/bohaz/air-quality-monitoring-app',
  },
  'finals-rodeo': {
    liveUrl: 'https://bohaz.github.io/Capstone-project1/',
    sourceUrl: 'https://github.com/bohaz/Capstone-project1',
  },
  'math-magicians': {
    liveUrl: 'https://ricardo-math-magicians.onrender.com/',
    sourceUrl: 'https://github.com/bohaz/math-magicians',
  }
};

document.querySelectorAll('.project-link').forEach(item => {
  item.addEventListener('click', function() {
    const projectId = this.getAttribute('data-id');
    const popup = document.getElementById('projectPopup');
    const imgSrc = this.querySelector('figure img').src;
    const title = this.querySelector('.project-title').textContent;
    const projectData = projectLinks[projectId];

    // Establecer la imagen y título en el popup
    document.getElementById('popupImg').src = imgSrc;
    document.getElementById('popupTitle').textContent = title;
    
    // Actualizar los enlaces en el popup
    const sourceLink = document.getElementById('popupSource');
    sourceLink.href = projectData.sourceUrl;
    sourceLink.target = '_blank';

    const liveLink = document.getElementById('popupLive');
    liveLink.href = projectData.liveUrl;
    liveLink.target = '_blank';

    // Mostrar el popup
    popup.style.display = 'flex';
  });
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('projectPopup').style.display = 'none';
});