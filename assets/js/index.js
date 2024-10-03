document.addEventListener("DOMContentLoaded", function () {
  // Obtener el año actual
  const currentYear = new Date().getFullYear();

  // Insertar el año en el elemento con id "currentYear"
  document.getElementById("currentYear").textContent = currentYear;
});
