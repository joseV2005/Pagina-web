// app.js
const canchas = [
    {
        nombre: "Cancha Sintética Norte",
        imagen: "https://via.placeholder.com/300x200",
        precio: 50000
    },
    {
        nombre: "Cancha Césped Natural Centro",
        imagen: "https://via.placeholder.com/300x200",
        precio: 80000
    },
    {
        nombre: "Cancha Cemento Sur",
        imagen: "https://via.placeholder.com/300x200",
        precio: 30000
    }
];

function buscarCanchas() {
    const listaCanchas = document.getElementById("lista-canchas");
    listaCanchas.innerHTML = ""; // Limpiar resultados anteriores

    canchas.forEach(cancha => {
        const canchaCard = document.createElement("div");
        canchaCard.classList.add("cancha-card");

        canchaCard.innerHTML = `
            <img src="${cancha.imagen}" alt="Imagen de la cancha">
            <h3>${cancha.nombre}</h3>
            <p>Precio: $${cancha.precio} COP</p>
            <button onclick="mostrarDetalles('${cancha.nombre}', '${cancha.imagen}', ${cancha.precio})">Ver Detalles</button>
        `;

        listaCanchas.appendChild(canchaCard);
    });
}

function mostrarDetalles(nombre, imagen, precio) {
    const modal = document.getElementById("modal");
    document.getElementById("modal-titulo").innerText = nombre;
    document.getElementById("modal-imagen").src = imagen;
    document.getElementById("modal-precio").innerText = `Precio: $${precio} COP`;

    modal.style.display = "block";
}

function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function reservarCancha() {
    alert("Has reservado la cancha con éxito.");
    cerrarModal();
}

