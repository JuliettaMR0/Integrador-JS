//Inicio render de los productos
document.addEventListener("DOMContentLoaded", function () {
  const productosContainer = document.getElementById("productos-container");
  const filterButtons = document.querySelectorAll(".filter-btn");
  //constantes//
  const productos = [
    {
      nombre: "Bolso 9/34",
      precio: "$15.000",
      imagen: "/assets/imagenes productos/ACCbolso934.webp",
      categoria: "accesorios",
      id: 1,
    },
    {
      nombre: "Collar Slytherin",
      precio: "$3.500",
      imagen: "/assets/imagenes productos/ACCcollarSly.webp",
      categoria: "accesorios",
      id: 2,
    },
    {
      nombre: "Funko: Harry Potter",
      precio: "$6.750",
      imagen: "/assets/imagenes productos/JUfunkopotter.webp",
      categoria: "juguetes",
      id: 3,
    },
    {
      nombre: "Azucarera Hedwig",
      precio: "$3.450",
      imagen: "/assets/imagenes productos/JUazucarera.webp",
      categoria: "juguetes",
      id: 4,
    },
    {
      nombre: "Funko: Hermione",
      precio: "$6.750",
      imagen: "/assets/imagenes productos/JUhermione,funko.webp",
      categoria: "juguetes",
      id: 5,
    },
    {
      nombre: "Vaso Slytherin",
      precio: "$3.000",
      imagen: "/assets/imagenes productos/JUvasoSly.webp",
      categoria: "juguetes",
      id: 6,
    },
    {
      nombre: "Buzo Ravenclaw",
      precio: "$14.000",
      imagen: "/assets/imagenes productos/ROPAbuzoRav.webp",
      categoria: "ropa",
      id: 7,
    },
    {
      nombre: "Camisa Sly",
      precio: "$10.000",
      imagen: "/assets/imagenes productos/ROPAcamisasly.webp",
      categoria: "ropa",
      id: 8,
    },
  ];

  //fin de las constantes//

  //Funcion para los productos
  function renderizarProductos(categoria) {
    productosContainer.innerHTML = "";
    productos
      .filter(
        (producto) => categoria === "todos" || producto.categoria === categoria
      )
      .forEach((producto) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.setAttribute("data-category", producto.categoria);
        productElement.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <div class="product-txt">
            <h3>${producto.nombre}</h3>
            <p class="precio">${producto.precio}</p>
            <a href="#" class="agregar-carrito btn-2" data-id="${producto.id}">Agregar</a>
          </div>
        `;
        productosContainer.appendChild(productElement);
      });
  }

  //fin de funcion
  renderizarProductos("todos");

  //Botones del filtro
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Cambiar clase activa
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Renderizar productos según la categoría seleccionada
      const categoriaSeleccionada = this.getAttribute("data-category");
      renderizarProductos(categoriaSeleccionada);
    });
  });
});

//fin render de los productos

//Inicio js contact
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const mensajeEnvio = document.getElementById("mensaje-envio");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Correo enviado");
    mensajeEnvio.style.display = "block";
  });
});
//Fin js contact
