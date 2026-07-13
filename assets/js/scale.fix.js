(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const toggleIcon = toggle.querySelector("span");
  const savedTheme = localStorage.getItem("theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  function applyTheme(theme) {
    const dark = theme === "dark";
    root.dataset.theme = theme;
    toggle.setAttribute("aria-pressed", String(dark));
    toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    toggleIcon.textContent = dark ? "☀" : "☾";
    document.querySelector('meta[name="theme-color"]').content = dark ? "#1a1917" : "#faf9f7";
  }

  applyTheme(savedTheme || (systemDark ? "dark" : "light"));

  toggle.addEventListener("click", function () {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
