import "./css/home.css";

// Navegación
document.getElementById("convertFile").addEventListener("click", () => {
  window.location.href = "/views/convertPdf.html";
});

document.getElementById("convertLink").addEventListener("click", () => {
  window.location.href = "/views/convertUrltoPdf.html";
});

document.getElementById("history").addEventListener("click", () => {
  window.location.href = "/views/historyConvert.html";
});
