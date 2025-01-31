// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombre = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if(nombreAmigo == "") {
        alert('Escriba un nombre')
    } else {
       listaAmigos(nombreAmigo)
    }
}

function listaAmigos(nombreAmigo) {
    let listaAmigos = document.getElementById('listaAmigos');
    listaNombre.push(nombreAmigo);
    listaAmigos.innerHTML = `${listaNombre.map(nombreAmigo => `<li>${nombreAmigo}</li>`).join("")}`;
    limpiarInput();
}

function limpiarInput() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    let amigoSorteo = obtenerNombreAmigoAleatorio(listaNombre);
    console.log(amigoSorteo);
    
    document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${amigoSorteo}`;
    document.getElementById('listaAmigos').setAttribute('style', 'display: none');
}

function obtenerNombreAmigoAleatorio(arrayAmigo) {
    return arrayAmigo[Math.floor(Math.random() * arrayAmigo.length)];
}