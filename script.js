"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector) => document.querySelector(selector);

  function showMessage(element, message, type = "success") {
    element.textContent = message;
    element.className = `form-message ${type}`;
  }

  // Populate birth day and year dropdowns.
  const birthDay = $("#birthDay");
  for (let day = 1; day <= 31; day++) {
    const option = new Option(String(day), String(day));
    if (day === 1) option.selected = true;
    birthDay.add(option);
  }

  const birthYear = $("#birthYear");
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= 1900; year--) {
    const option = new Option(String(year), String(year));
    if (year === 2021) option.selected = true;
    birthYear.add(option);
  }

  // Filter navigation links by their labels.
  $("#searchInput").addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    document.querySelectorAll(".settings-menu a").forEach((link) => {
      link.hidden = !link.textContent.toLowerCase().includes(query);
    });
  });

  // Collapse/expand the navigation menu on smaller screens.
  $("#menuToggle").addEventListener("click", () => {
    $("#settingsMenu").classList.toggle("menu-collapsed");
  });

  $("#notificationsBtn").addEventListener("click", () => {
    const notice = $("#notificationMessage");
    notice.hidden = !notice.hidden;
  });

  // Invisible mode is a visual demo only.
  const invisibleSwitch = $("#invisibleSwitch");
  const visibilityStatus = $("#visibilityStatus");
  function updateVisibility() {
    visibilityStatus.textContent = invisibleSwitch.checked
      ? "Invisible mode enabled (demo)"
      : "Invisible mode disabled (demo)";
  }
  invisibleSwitch.addEventListener("change", updateVisibility);
  updateVisibility();

  // Basic information form: client-side validation only.
  $("#basicInfoForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const firstName = $("#firstName").value.trim();
    const lastName = $("#lastName").value.trim();
    const email = $("#email").value.trim();

    if (!firstName || !lastName) {
      showMessage($("#basicMessage"), "Please enter your first and last name.", "error");
      return;
    }
    if (email && !$("#email").checkValidity()) {
      showMessage($("#basicMessage"), "Please enter a valid email address.", "error");
      return;
    }

    $("#profileName").textContent = `${firstName} ${lastName}`;
    showMessage(
      $("#basicMessage"),
      "Information checked. This demo does not save changes to a server."
    );
  });

  // Password validation only. Never store passwords in browser storage.
  $("#passwordForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const current = $("#currentPassword").value;
    const password = $("#newPassword").value;
    const confirmation = $("#confirmPassword").value;
    const message = $("#passwordMessage");

    if (!current) {
      showMessage(message, "Enter your current password.", "error");
      return;
    }
    if (password.length < 6) {
      showMessage(message, "The new password must contain at least 6 characters.", "error");
      return;
    }
    if (!/[0-9]/.test(password)) {
      showMessage(message, "Include at least one number.", "error");
      return;
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      showMessage(message, "Include at least one special character.", "error");
      return;
    }
    if (password !== confirmation) {
      showMessage(message, "The new passwords do not match.", "error");
      return;
    }
    if (password === current) {
      showMessage(message, "Choose a password different from your current password.", "error");
      return;
    }
    showMessage(
      message,
      "Password rules passed. A secure backend must verify the current password and save the new one."
    );
  });

  // Two-factor authentication controls are simulated; no real 2FA is activated.
  let twofaEnabled = false;
  let smsConfigured = false;
  let authenticatorConfigured = false;
  let securityKeyAdded = false;
  const twofaBadge = $("#twofaBadge");
  const toggle2faBtn = $("#toggle2faBtn");
  const twofaMessage = $("#twofaMessage");

  function updateTwoFA() {
    twofaBadge.textContent = twofaEnabled ? "ENABLED" : "DISABLED";
    twofaBadge.classList.toggle("disabled", !twofaEnabled);
    toggle2faBtn.textContent = twofaEnabled ? "DISABLE 2FA" : "ENABLE 2FA";
  }

  toggle2faBtn.addEventListener("click", () => {
    if (!twofaEnabled && !smsConfigured && !authenticatorConfigured && !securityKeyAdded) {
      showMessage(twofaMessage, "Set up an authentication method first. This demo cannot enable real 2FA.", "error");
      return;
    }
    twofaEnabled = !twofaEnabled;
    updateTwoFA();
    showMessage(twofaMessage, `Demo status: 2FA ${twofaEnabled ? "enabled" : "disabled"}. Real authentication requires a backend.`);
  });

  $("#addKeyBtn").addEventListener("click", () => {
    if (!window.confirm("Simulate adding a security key? No real key will be registered.")) return;
    securityKeyAdded = true;
    $("#securityKeysStatus").textContent = "Demo security key";
    showMessage(twofaMessage, "Demo key added. Real security keys require WebAuthn and server support.");
  });

  $("#editSmsBtn").addEventListener("click", () => {
    const number = window.prompt("Enter a phone number for this demo:");
    if (number === null) return;
    if (!/^\+?[0-9 ()-]{7,20}$/.test(number.trim())) {
      showMessage(twofaMessage, "Enter a valid phone number.", "error");
      return;
    }
    $("#smsNumber").textContent = number.trim();
    smsConfigured = true;
    showMessage(twofaMessage, "Number updated in this demo. No SMS verification was performed.");
  });

  $("#setupAuthBtn").addEventListener("click", () => {
    if (!window.confirm("Simulate authenticator setup? No QR code or secret will be generated.")) return;
    authenticatorConfigured = true;
    $("#authenticatorStatus").textContent = "Demo setup complete";
    showMessage(twofaMessage, "Demo setup complete. Real setup requires server-generated secrets and verification.");
  });
  updateTwoFA();

  // Simulated sign-out for sample sessions only.
  document.querySelectorAll(".session-more").forEach((button) => {
    button.addEventListener("click", () => {
      const device = button.dataset.device;
      if (!window.confirm(`Remove ${device} from this demo list? No real session will be revoked.`)) return;
      button.closest(".session-row").remove();
      showMessage($("#sessionMessage"), "Removed from the demo list only. Real sessions must be revoked on the server.");
    });
  });

  // Account deletion buttons require explicit confirmation but never delete real data.
  const deleteConfirm = $("#deleteConfirm");
  const deactivateBtn = $("#deactivateBtn");
  const deleteBtn = $("#deleteBtn");
  const deleteMessage = $("#deleteMessage");

  function updateDeleteButtons() {
    deactivateBtn.disabled = !deleteConfirm.checked;
    deleteBtn.disabled = !deleteConfirm.checked;
    deleteMessage.textContent = "";
    deleteMessage.className = "form-message";
  }
  deleteConfirm.addEventListener("change", updateDeleteButtons);

  deactivateBtn.addEventListener("click", () => {
    if (!deleteConfirm.checked) return;
    if (window.confirm("Demo only: simulate account deactivation?")) {
      showMessage(deleteMessage, "Demo only: no account was deactivated. Connect a secure backend for real deactivation.");
    }
  });

  deleteBtn.addEventListener("click", () => {
    if (!deleteConfirm.checked) return;
    if (window.confirm("This demo will not delete any data. Continue?")) {
      showMessage(deleteMessage, "Demo only: no account was deleted. Real deletion must be securely handled by the backend.");
    }
  });
  updateDeleteButtons();
});
