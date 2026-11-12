// Altere aqui: DDI + DDD + número, somente dígitos.
const WHATSAPP_NUMBER = "5511999999999";
const whatsappUrl = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = whatsappUrl("Olá, gostaria de conversar sobre seguros.");
});
const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  menuButton.setAttribute("aria-label", open ? "Abrir menu" : "Fechar menu");
  mainNav.classList.toggle("open", !open);
});
mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
  mainNav.classList.remove("open");
}));
document.querySelectorAll("[data-product]").forEach((card) => card.addEventListener("click", () => {
  document.querySelector("#produto").value = card.dataset.product;
}));
document.querySelector("#quote-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get("nome") || "").trim();
  const product = String(form.get("produto") || "");
  const note = String(form.get("mensagem") || "").trim();
  const message = [`Olá! Meu nome é ${name}.`, `Gostaria de conversar sobre ${product}.`, note ? `Meu recado: ${note}` : ""].filter(Boolean).join("\n");
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
});
document.querySelector("#year").textContent = new Date().getFullYear();

