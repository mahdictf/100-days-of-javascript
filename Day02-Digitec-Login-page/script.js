document.addEventListener("DOMContentLoaded", function () {
  // Handle email form submission
  const emailForm = document.getElementById("emailForm");

  if (emailForm) {
    emailForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = document.getElementById("email");
      const email = emailInput.value.trim();

      // Simple email validation
      if (email && isValidEmail(email)) {
        // Store the email (optional)
        sessionStorage.setItem("loginEmail", email);

        // Redirect to password page
        window.location.href = "pwindex.html";
      } else {
        alert("Please enter a valid email address");
        emailInput.focus();
      }
    });
  }

  // Function to validate email format
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});

// For pwindex.html - Display the stored email
document.addEventListener("DOMContentLoaded", function () {
  const displayEmail = document.getElementById("displayEmail");

  if (displayEmail) {
    const storedEmail = sessionStorage.getItem("loginEmail");
    if (storedEmail) {
      displayEmail.textContent = storedEmail;
    }
  }

  // You can add password form handling here if needed
});
