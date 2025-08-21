// 主题切换
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

  // 高亮当前导航
  const links = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();
  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});
