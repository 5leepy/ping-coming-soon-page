const input = document.querySelector("#email");
const errorMessage = document.querySelector("#error-message");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  const email = input.value;
  const isValid = validateEmail(email);
  if (!isValid) {
    input.style.borderColor = "red";
    errorMessage.style.display = "block";
  } else {
    input.style.borderColor = "";
    errorMessage.style.display = "none";
  }
});

function validateEmail(email) {
  // Regular expression to check if the email is valid
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

console.log("Nadir.Nahdi");