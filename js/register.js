let passIcon = document.getElementById("passIcon");
let conPassIcon = document.getElementById("conPassIcon");
let passwordField = document.getElementById("password");
let conPasswordField = document.getElementById("confirmPassword");
let emailField = document.getElementById("email");
let registerButton = document.getElementById("register");
let notifyRegister = document.getElementById("notifyRegister");
let notifyPasswords = document.getElementById("notifyPasswords");

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

conPassIcon.addEventListener("click", function () {
  if (conPassIcon.classList.contains("fa-lock")) {
    // VIEW PASSWORD
    conPassIcon.classList.remove("fa-lock");
    conPassIcon.classList.add("fa-unlock-alt");
    conPasswordField.type = "text";
  } else if (conPassIcon.classList.contains("fa-unlock-alt")) {
    // HIDE PASSWORD
    conPassIcon.classList.remove("fa-unlock-alt");
    conPassIcon.classList.add("fa-lock");
    conPasswordField.type = "password";
  } else {
    console.log("Error");
  }
});

registerButton.addEventListener("click", function () {
  notifyRegister.classList.remove("hidden");
  notifyRegister.classList.add("fade-in");

  setTimeout(function () {
    notifyRegister.classList.remove("fade-in");
    notifyRegister.classList.add("fade-out");
  }, 3000);

  setTimeout(function () {
    notifyRegister.classList.add("hidden");
    notifyRegister.classList.remove("fade-out");
  }, 3500);
});
