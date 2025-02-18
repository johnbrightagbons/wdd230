document.addEventListener("DOMContentLoaded", function () {
  /*** Date Handling ***/
  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  }

  document.getElementById("last-modified-date").textContent = formatDate(new Date(document.lastModified));

  /*** Dark Mode Toggle ***/
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });

  /*** Navigation Toggle ***/
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
    hamburger.innerHTML = navLinks.classList.contains("hidden") ? "<span class='bar'></span><span class='bar'></span><span class='bar'></span>" : "<span style='font-size: 24px; color: white;'>&#10005;</span>";
  });

  /*** Visit Counter ***/
  const visitCounterElement = document.getElementById("visit-counter");
  let visitCount = localStorage.getItem("visitCount") || 0;
  visitCounterElement.textContent = `You have visited this page ${++visitCount} times`;
  localStorage.setItem("visitCount", visitCount);

})