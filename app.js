// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados.
let amigos = [];

// 1.0 Implementa una función para agregar amigos

// 1.1 Capturar el valor del campo de entrada
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;

    // 1.2 Validar la entrada
    if (nombreAmigo.trim() === "") {
        alert("Por favor, inserte un nombre");
    }
    // 1.3 Actualizar el array de amigos
    else {
        amigos.push(nombreAmigo);

        // 1.4 Limpiar el campo de entrada
        document.querySelector("#amigo").value = "";
        mostrarListaAmigo();
    }
}

// 2.0 Implementa una función para actualizar la lista de amigos

// 2.1 Obtener el elemento de la lista
function mostrarListaAmigo() {
    let listaAmigos = document.querySelector("#listaAmigos");

    // 2.2 Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // 2.3 Iterar sobre el arreglo
    for (let index = 0; index < amigos.length; index++) {
        const element = amigos[index];
        let listaHTML = document.createElement("li");
        listaHTML.textContent = element;

        // 2.4 Agregar elementos a la lista
        listaAmigos.appendChild(listaHTML);
    }
}

// 3.0 Implementa una función para sortear los amigos

// 3.1 Validar que haya amigos disponibles
function sortearAmigo() {
    let cantidadAmigos = amigos.length;
    if (cantidadAmigos === 0) {
        alert("Por favor, inserte un nombre antes de sortear");
    }

    // 3.2 Generar un índice aleatorio
    // 3.3 Obtener el nombre sorteado
    else {
        let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);

        // 3.4 Mostrar el resultado
        let resultadoHTML = document.querySelector("#resultado");
        resultadoHTML.innerHTML = amigos[indiceAmigo];
    }
}








