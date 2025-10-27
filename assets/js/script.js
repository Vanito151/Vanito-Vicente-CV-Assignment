document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("downloadBtn").addEventListener("click", () => window.print());

const darkToggle = document.getElementById("darkToggle");
const html = document.documentElement;

// Load previous theme
if (localStorage.getItem("theme") === "dark") {
  html.setAttribute("data-theme", "dark");
}

darkToggle.addEventListener("click", () => {
  if (html.getAttribute("data-theme") === "dark") {
    html.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});
