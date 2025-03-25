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

// Manejo de selección de archivos
const fileInput = document.getElementById("fileInput");
if (fileInput) {
  fileInput.addEventListener("change", (event) => {
    const files = event.target.files; // Obtiene la lista de archivos
    console.log(files); // Muestra los archivos en la consola para verificar

    for (let file of files) {
      console.log(`Archivo seleccionado: ${file.name}`);
    }
  });
}
