import "./css/home.css";

document.getElementById("convertFile").addEventListener("click", () => {
  window.location.href = "/views/convertPdf.html"; // Redirige a la vista de conversión de archivos
});

document.getElementById("convertLink").addEventListener("click", () => {
  window.location.href = ""; // Redirige a la vista de conversión de links
});

document.getElementById("history").addEventListener("click", () => {
  window.location.href = ""; // Redirige a la vista del historial
});
