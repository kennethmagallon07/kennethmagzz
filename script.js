const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

function toggleText() {
      const moreText = document.getElementById("moreText");
      const button = document.getElementById("toggleButton");

      if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";
        button.innerText = "Show Less";
      } else {
        moreText.style.display = "none";
        button.innerText = "Read More";
      }
    }
