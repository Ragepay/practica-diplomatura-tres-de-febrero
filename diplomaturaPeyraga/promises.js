console.log("Inicio archivo promises.js");

// Definimos una funcion que devuelve una promesa.
const miOperacionAsincronaConPromesa = () => {
    return new Promise((resolve, reject) => {
        console.log("Iniciando promesa...");
        const Aleatorio = Math.random();
        if (Aleatorio < 0.5) {
            resolve("La operación se realizó correctamente.");
        } else {
            reject(new Error("La operación falló."), Aleatorio);
        }
    });

}
const miPromesa = miOperacionAsincronaConPromesa();
miPromesa.then((resultado) => {
    console.log("Resultado de la promesa: ", resultado);
}).catch((error) => {
    console.log("Error en la promesa: ", error.message);
});