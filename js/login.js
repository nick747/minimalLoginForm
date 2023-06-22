let passIcon = document.getElementById("passIcon");
let passwordField = document.getElementById("password");
let emailField = document.getElementById("email");
let loginButton = document.getElementById("login");
let notifyLogin = document.getElementById("notifyLogin");

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

loginButton.addEventListener("click", function () {
  notifyLogin.classList.remove("hidden");
  notifyLogin.classList.add("fade-in");

  setTimeout(function () {
    notifyLogin.classList.remove("fade-in");
    notifyLogin.classList.add("fade-out");
  }, 3000);

  setTimeout(function () {
    notifyLogin.classList.add("hidden");
    notifyLogin.classList.remove("fade-out");
  }, 3500);
});
