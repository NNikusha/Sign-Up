const email = document.querySelector("#email");
const city = document.querySelector("#city");
const zipCode = document.querySelector("#zipCode");
const country = document.querySelector("#country_select");
const form = document.querySelector(".SignUp-Box ");

// Function to display error message and add error class
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  element.classList.add("inputError");
  inputControl.classList.add("error");
};

// Function to remove error message and class
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  element.classList.remove("inputError");
  inputControl.classList.remove("error");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;
  // Email validation
  if (!email.value) {
    setError(email, "Email is required");
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    setError(email, "Invalid email format");
    isValid = false;
  } else if (!email.value.match(/^\S+@(?:[a-zA-Z\-0-9]+\.)+ge$/)) {
    setError(email, "Domain should be (.ge)");
    isValid = false;
  } else {
    setSuccess(email);
  }

  // City validation
  if (!city.value) {
    setError(city, "City is required");
    isValid = false;
  } else {
    setSuccess(city);
  }

  // Zip code validation
  if (!zipCode.value) {
    setError(zipCode, "Zip code is required");
    isValid = false;
  } else if (!/^\d{5}$/.test(zipCode.value)) {
    setError(zipCode, "Invalid zip code format");
    isValid = false;
  } else {
    setSuccess(zipCode);
  }

  // If all input are valid, submit form
  if (isValid) {
    form.submit();
  }

  validateCountry();
  country.addEventListener("change", validateCountry ());
});

function validateCountry() {
  const countryValue = country.value;
  if (countryValue === "0") {
    setError(country, "Required");
    return false;
  } else {
    setSucsess(country);
  }
  return true;
}
