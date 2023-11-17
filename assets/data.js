// Para el carrito

export function obtenerCarritoDesdeLocalStorage() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}
// Aca se guarda
export function guardarCarritoEnLocalStorage(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
//fin de carrito
