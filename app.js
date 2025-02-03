let listaNombre = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();

    if(!nombreAmigo) {
        alert('Escriba un nombre.');
        return;
    }

    if(listaNombre.includes(nombreAmigo)) {
        alert('Este nombre ya esta en la lista.')
        return;
    }
    
    listaAmigos(nombreAmigo)
}

function listaAmigos(nombreAmigo) {
    listaNombre.push(nombreAmigo);
    actualizarListaAmigos();
    limpiarInput();
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = `${listaNombre.map(nombreAmigo => `<li>${nombreAmigo}</li>`).join("")}`;
}

function limpiarInput() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {

    if(listaNombre.length < 2) {
        alert('Necesitas al menos dos amigos para sortear.');
        return;
    }

    let amigoSorteo = obtenerNombreAmigoAleatorio(listaNombre);
    mostrarResultado(amigoSorteo);
}

function obtenerNombreAmigoAleatorio(arrayAmigo) {
    return arrayAmigo[Math.floor(Math.random() * arrayAmigo.length)];
}

function mostrarResultado(amigoSorteo) {
    let resultado = document.getElementById('resultado');
    document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${amigoSorteo}`;
    document.getElementById('listaAmigos').setAttribute('style', 'display: none');
}

function reiniciarSorteo() {
    listaNombre = [];
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('listaAmigos').innerHTML = '';
    actualizarListaAmigos();
}
