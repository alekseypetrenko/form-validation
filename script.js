const form = document.getElementById("form");
const password1Element = document.getElementById("password1");
const password2Element = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity();
  if (!isValid) {
    message.textContent = "Please fill out all fields";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }

  // Check passwords
  if (password1Element.value === password2Element.value) {
    passwordsMatch = true;
    password1Element.style.borderColor = "green";
    password2Element.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.textContent = "Passwords are not match";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1Element.style.borderColor = "red";
    password2Element.style.borderColor = "red";

    return;
  }

  // If form is valid and password match
  if (isValid && passwordsMatch) {
    message.textContent = "Success";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };

  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // Validate
  validateForm();

  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

// Event Listeners
form.addEventListener("submit", processFormData);
