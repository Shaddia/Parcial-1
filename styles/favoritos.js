// Esperamos a que el DOM se cargue completamente antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {

    // Conjunto para almacenar los productos favoritos sin duplicados
    let favoritos = new Set(); 

    // Seleccionamos todos los botones de "favorito"
    const botonesFavoritos = document.querySelectorAll(".favorite-btn");

    // Seleccionamos el contenedor donde se mostrarán los productos favoritos
    const contenedorFavoritos = document.getElementById("favoritos-container");

    // Función para actualizar la lista de productos favoritos en pantalla
    function actualizarFavoritos() {
        contenedorFavoritos.innerHTML = ""; // Limpiamos la lista antes de actualizarla

        favoritos.forEach((producto) => {
            // Creamos un div para cada producto en favoritos
            const div = document.createElement("div");
            div.classList.add("favorite-item");

            // Insertamos la información del producto en el div
            div.innerHTML = `
                <img src="${producto.image}" alt="${producto.name}" width="50">
                <p>${producto.name} - ${producto.price}</p>
                <button class="remove-fav" data-id="${producto.id}">Eliminar</button>
            `;

            // Agregamos el producto al contenedor de favoritos en el DOM
            contenedorFavoritos.appendChild(div);
        });

        // Agregamos eventos a los botones de eliminar favoritos
        document.querySelectorAll(".remove-fav").forEach((boton) => {
            boton.addEventListener("click", function () {
                const id = boton.getAttribute("data-id"); // Obtenemos el ID del producto
                eliminarFavorito(id); // Llamamos la función para eliminarlo
            });
        });
    }

    // Función para eliminar un producto de favoritos
    function eliminarFavorito(id) {
        favoritos = new Set([...favoritos].filter(producto => producto.id !== id)); // Filtramos los productos

        actualizarFavoritos(); // Volvemos a renderizar la lista de favoritos

        // Volvemos a poner en negro el botón de favoritos correspondiente
        botonesFavoritos.forEach((boton) => {
            const productElement = boton.closest(".product");
            if (productElement.getAttribute("data-id") === id) {
                boton.style.color = "black"; // Color negro cuando se quita de favoritos
            }
        });
    }

    // Agregar evento a cada botón de favoritos
    botonesFavoritos.forEach((boton) => {
        boton.addEventListener("click", function () {
            // Obtenemos el producto asociado al botón
            const productElement = boton.closest(".product");

            // Extraemos los datos del producto del HTML
            const id = productElement.getAttribute("data-id");
            const name = productElement.getAttribute("data-name");
            const price = productElement.getAttribute("data-price");
            const image = productElement.getAttribute("data-image");

            // Creamos un objeto con la información del producto
            const producto = { id, name, price, image };

            // Si el producto ya está en favoritos, lo eliminamos
            if ([...favoritos].some(p => p.id === id)) {
                eliminarFavorito(id);
                boton.style.color = "black"; // Cambia a negro
            } else {
                favoritos.add(producto); // Agregamos el producto
                boton.style.color = "red"; // Cambia a rojo
            }

            actualizarFavoritos(); // Actualizamos la lista
        });
    });

    // Revisamos los botones al cargar la página y los marcamos si ya están en favoritos
    botonesFavoritos.forEach((boton) => {
        const id = boton.closest(".product").getAttribute("data-id");

        if ([...favoritos].some(p => p.id === id)) {
            boton.style.color = "red"; // Si ya estaba en favoritos, se mantiene rojo
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("modoOscuroToggle"); // Asegúrate de que el botón tiene este ID
    const body = document.body;

    // Verifica si el usuario tenía activado el modo oscuro antes
    if (localStorage.getItem("modoOscuro") === "activado") {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode"); // Asegura que inicie en modo claro
    }

    // Evento para cambiar entre modos
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Guarda el estado en localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("modoOscuro", "activado");
        } else {
            localStorage.setItem("modoOscuro", "desactivado");
        }
    });
});


