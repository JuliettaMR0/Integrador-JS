// Importar funciones de data.js
import {
  obtenerCarritoDesdeLocalStorage,
  guardarCarritoEnLocalStorage,
} from "./assets/data.js";

const carrito = document.getElementById("carrito");
const elementos1 = document.getElementById("lista-1");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarcarritoBtn = document.getElementById("vaciar-carrito");
const comprarcarritoBtn = document.getElementById("comprar-carrito");

function cargarEventListeners() {
  elementos1.addEventListener("click", comprarElemento);
  carrito.addEventListener("click", eliminarElemento);
  vaciarcarritoBtn.addEventListener("click", vaciarCarrito);
  comprarcarritoBtn.addEventListener("click", comprarCarrito);
}

function comprarElemento(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const elemento = e.target.parentElement.parentElement;
    leerDatosElemento(elemento);
  }
}

function leerDatosElemento(elemento) {
  const infoElemento = {
    imagen: elemento.querySelector("img").src,
    titulo: elemento.querySelector("h3").textContent,
    precio: elemento.querySelector(".precio").textContent,
    id: elemento.querySelector(".agregar-carrito").getAttribute("data-id"),
  };
  insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
  const row = document.createElement("tr");
  row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width="100">    
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}"> X </a>
        </td>
    `;
  lista.appendChild(row);

  // Actualizar el carrito en localStorage
  const carritoLocalStorage = obtenerCarritoDesdeLocalStorage();
  carritoLocalStorage.push(elemento);
  guardarCarritoEnLocalStorage(carritoLocalStorage);

  // Después del a;adir
  const carritoActual = obtenerCarritoDesdeLocalStorage();
  console.log("Carrito recuperado desde localStorage:", carritoActual);
}

function eliminarElemento(e) {
  e.preventDefault();
  let elemento, elementoId;
  if (e.target.classList.contains("borrar")) {
    e.target.parentElement.parentElement.remove();
    elemento = e.target.parentElement.parentElement;
    elementoId = e.target.getAttribute("data-id");

    // Actualizar el carrito en localStorage después de eliminar un elemento
    const carritoLocalStorage = obtenerCarritoDesdeLocalStorage();
    const carritoActualizado = carritoLocalStorage.filter(
      (item) => item.id !== elementoId
    );
    guardarCarritoEnLocalStorage(carritoActualizado);

    console.log("Carrito actualizado en localStorage:", carritoActualizado);
  }
}

function vaciarCarrito() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  // Vaciar el carrito en localStorage
  guardarCarritoEnLocalStorage([]);
  return false;
}

function comprarCarrito() {
  alert("Compra realizada. ¡Gracias por tu compra!");
  vaciarCarrito();
}

cargarEventListeners();
