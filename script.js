const langButton = document.querySelector(".btn-secondary");

if (langButton) {
  langButton.addEventListener("click", () => {
    const current = langButton.textContent.trim();
    langButton.textContent = current === "RU" ? "KZ" : "RU";
  });
}
