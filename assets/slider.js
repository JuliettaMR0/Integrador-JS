//imagen del header

function cambiarBorderRadius() {
  const imagen = document.getElementById("header-img").querySelector("img");
  const borderRadiusActual = parseInt(
    window.getComputedStyle(imagen).borderRadius
  );
  const nuevoBorderRadius = borderRadiusActual === 20 ? 0 : 20;

  imagen.style.borderRadius = nuevoBorderRadius + "px";
}

document
  .getElementById("header-img")
  .addEventListener("click", cambiarBorderRadius);

//slider

const imagenes = [
  "/ImagenesLogo/hogs.jpg",
  "/ImagenesLogo/hogs2.jpg",
  "/ImagenesLogo/hg3.jpg",
];
let indiceImagenActual = 0;

function cambiarImagen() {
  const imagen = document.getElementById("slider-image");
  indiceImagenActual = (indiceImagenActual + 1) % imagenes.length; // Cambiar al siguiente índice

  imagen.src = imagenes[indiceImagenActual];
}

document.getElementById("header-img").addEventListener("click", cambiarImagen);

setInterval(cambiarImagen, 2000);
