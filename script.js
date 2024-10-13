document.addEventListener("DOMContentLoaded", function () {
  // Your code to manipulate DOM or initialize your script
  console.log("The DOM is fully loaded");
});

const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");

form.addEventListener("submit", (event) => {
  let isValid = true;
  let messages = [];
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username.length < 3) {
    isValid = false;
    messages.push("Username less than 3");
    console.log(messages);
  }
  if (!email.includes("@")) {
    isValid = false;
    messages.push("@ is missing");
    console.log(messages);
  }
  if (password.length <= 8) {
    isValid = false;
    messages.push("Password not long enough");
    console.log(messages);
  }

  feedbackDiv.style.display = "block";
  if ((isValid = true)) {
    feedbackDiv.textContent = "Registration successful";
    feedbackDiv.style.color = "#28a745";
  } else {
    feedbackDiv.innerHTML = messages.join("<br>"); // Display error messages with line breaks
    feedbackDiv.style.color = "#dc3545";
  }

  console.log(username, email, password);

  if (!isValid) {
    feedbackDiv.textContent = "Not valid";
    console.log(feedbackDiv.textContent); // Display error messages in the feedbackDiv
  } else {
    form.submit(); // Submit the form only if it is valid
  }
});
