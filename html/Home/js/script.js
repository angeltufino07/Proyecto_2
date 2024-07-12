const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const Travel_Form = document.getElementById("Travel_Form");
const Error_Msg = document.getElementById("Error_Msg");



Travel_Form.addEventListener("submit", function (event) {
  event.preventDefault();

  const { username, email, password } = Travel_Form.elements;

  Error_Msg.innerHTML = "";

  if (!username.value.trim()) {
    displayError("Input a username to continue");
    return;
  }

  if (!email.value.trim() || !isValidEmail(email.value)) {
    displayError("Input a valid email");
    return;
  }

  if (!password.value.trim() || !isStrongPassword(password.value)) {
    const activeDiv = document.querySelector('.ErrorMs1');

    activeDiv.classList.toggle('ErrorMs1');
    activeDiv.classList.toggle('ErrorMsLarge');
    
   displayError(
      "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    );

    return;
    
  }

  alert("An representant will contac you");
  Travel_Form.reset();
});

function displayError(message) {
    Error_Msg.innerHTML += `<p class="ErrorMs">${message}</p>`; 
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isStrongPassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
  
  }



navToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
  });
}

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
