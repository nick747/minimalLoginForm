let passIcon = document.getElementById("passIcon");
let passwordField = document.getElementById("password");

passIcon.addEventListener("click", function () {
  if (passIcon.classList.contains("fa-lock")) {
    // VIEW PASSWORD
    passIcon.classList.remove("fa-lock");
    passIcon.classList.add("fa-unlock-alt");
    passwordField.type = "text";
  } else if (passIcon.classList.contains("fa-unlock-alt")) {
    // HIDE PASSWORD
    passIcon.classList.remove("fa-unlock-alt");
    passIcon.classList.add("fa-lock");
    passwordField.type = "password";
  } else {
    console.log("Error");
  }
});
