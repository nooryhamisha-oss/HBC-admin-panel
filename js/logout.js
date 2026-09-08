document.getElementById("logoutForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("logout-username");
  const password = document.getElementById("logout-password");
  let valid = true;

  if (username.value.trim() === "") {
    showError(username, "Please enter your username.");
    valid = false;
  } else {
    clearError(username);
  }

  if (password.value.trim() === "") {
    showError(password, "Please enter your password.");
    valid = false;
  } else {
    clearError(password);
  }

  if (valid) {
    alert("Logged out successfully!");
    window.location.href = "index.html";
  }
});

function showError(input, message) {
  const errorBox = input.parentElement.querySelector(".error-msg");
  errorBox.textContent = message;
}

function clearError(input) {
  const errorBox = input.parentElement.querySelector(".error-msg");
  errorBox.textContent = "";
}
