function numAleatorio(max, min) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}
let victorias = 0;
let derrotas = 0;
let empates = 0;
let contador = 0;




while ((derrotas + victorias) < 3) {
    let opciones = ["piedra", "papel", "tijera"];
    let num = numAleatorio(2, 0);
    let jugador = opciones[num];
    let computadora = opciones[numAleatorio(2, 0)];
    console.log("Jugador: " + jugador + " vs " + "Computadora: " + computadora);
    contador++;
    if (jugador == computadora) {
        empates++;
    } else if (jugador == "piedra" && computadora == "tijera") {
        victorias++;
    } else if (jugador == "papel" && computadora == "piedra") {
        victorias++;
    } else if (jugador == "tijera" && computadora == "papel") {
        victorias++;
    } else if (jugador == "piedra" && computadora == "papel") {
        derrotas++;
    } else if (jugador == "papel" && computadora == "tijera") {
        derrotas++;
    } else if (jugador == "tijera" && computadora == "piedra") {
        derrotas++;
    }
}
console.log("Cantidad de jugadas: " + contador);
console.log("Victorias: " + victorias + " Derrotas: " + derrotas + " Empates: " + empates);

