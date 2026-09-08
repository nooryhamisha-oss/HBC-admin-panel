document.addEventListener("DOMContentLoaded", function () {
  const signInForm = document.getElementById("signin-form");
  const signUpForm = document.getElementById("signup-form");
  const showSignUpBtn = document.getElementById("showSignUp");
  const showSignInBtn = document.getElementById("showSignIn");

  showSignUpBtn.addEventListener("click", function () {
    signInForm.classList.remove("active");
    signUpForm.classList.add("active");
  });

  showSignInBtn.addEventListener("click", function () {
    signUpForm.classList.remove("active");
    signInForm.classList.add("active");
  });

  const signInFormEl = document.getElementById("signInForm");

  signInFormEl.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("signin-email");
    const password = document.getElementById("signin-password");
    let valid = true;

    if (email.value.trim() === "") {
      showError(email, "Please enter your email or phone number.");
      valid = false;
    } else {
      clearError(email);
    }

    if (password.value.length < 6) {
      showError(password, "Password must be at least 6 characters.");
      valid = false;
    } else {
      clearError(password);
    }

    if (valid) {
      alert("Signed in successfully!");
      window.location.href = "dashboard.html";
    }
  });

  const signUpFormEl = document.getElementById("signUpForm");

  signUpFormEl.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("signup-name");
    const email = document.getElementById("signup-email");
    const password = document.getElementById("signup-password");
    const confirm = document.getElementById("signup-confirm");
    let valid = true;

    if (name.value.trim() === "") {
      showError(name, "Please enter your full name.");
      valid = false;
    } else {
      clearError(name);
    }

    if (email.value.trim() === "") {
      showError(email, "Please enter your email or phone number.");
      valid = false;
    } else {
      clearError(email);
    }

    if (password.value.length < 6) {
      showError(password, "Password must be at least 6 characters.");
      valid = false;
    } else {
      clearError(password);
    }

    if (confirm.value !== password.value) {
      showError(confirm, "Passwords do not match.");
      valid = false;
    } else {
      clearError(confirm);
    }

    if (valid) {
      alert("Account created successfully!");
      signUpFormEl.reset();
      signUpForm.classList.remove("active");
      signInForm.classList.add("active");
    }
  });

  function showError(input, message) {
    input.classList.add("invalid");
    const errorBox = input.parentElement.querySelector(".error-msg");
    errorBox.textContent = message;
  }

  function clearError(input) {
    input.classList.remove("invalid");
    const errorBox = input.parentElement.querySelector(".error-msg");
    errorBox.textContent = "";
  }
});
