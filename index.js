// Get form elements
const form = document.getElementById("user-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const contactMethodSelect = document.getElementById("contact-method");
const phoneNumberInput = document.getElementById("phone-number");
const termsCheckbox = document.getElementById("terms");
const formSummaryDiv = document.getElementById("form-summary");
const errorMessageDiv = document.getElementById("error-message");

// Add event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Capture form data
  const userData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    contactMethod: contactMethodSelect.value,
    phoneNumber: phoneNumberInput.value.trim(),
    terms: termsCheckbox.checked,
  };

  // Validate form data
  if (!validateForm(userData)) {
    return;
  }

  // Display form summary
  displayFormSummary(userData);

  // Display confirmation message
  alert("Form submitted successfully!");
});

// Validate form data
function validateForm(userData) {
  if (userData.name === "") {
    displayErrorMessage("Name is required");
    return false;
  }

  if (!validateEmail(userData.email)) {
    displayErrorMessage("Invalid email format");
    return false;
  }

  if (userData.contactMethod === "") {
    displayErrorMessage("Please select a contact method");
    return false;
  }

  if (!userData.terms) {
    displayErrorMessage("Please accept terms and conditions");
    return false;
  }

  return true;
}

// Validate email format
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Display error message
function displayErrorMessage(message) {
  errorMessageDiv.textContent = message;
  setTimeout(() => {
    errorMessageDiv.textContent = "";
  }, 3000);
}

// Display form summary
function displayFormSummary(userData) {
  const summaryHtml = `
    <p>Name: ${userData.name}</p>
    <p>Email: ${userData.email}</p>
    <p>Preferred Contact Method: ${userData.contactMethod}</p>
    <p>Phone Number: ${userData.phoneNumber}</p>
    <p>Terms Accepted: ${userData.terms ? "Yes" : "No"}</p>
  `;
  formSummaryDiv.innerHTML = summaryHtml;
}
