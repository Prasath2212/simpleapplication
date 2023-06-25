
document.getElementById("login").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin" && password === "password") {
      window.location.href = "dashboard.html";
  } else {
      alert("Invalid username or password");
  }
});

// Get the current year
var currentYear = new Date().getFullYear();

// Update the content of the span element with the current year
document.getElementById("current-year").textContent = currentYear;
