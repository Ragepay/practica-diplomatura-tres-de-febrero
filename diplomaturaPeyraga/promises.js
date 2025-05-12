/*
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
*/

/*
const promesa = new Promise((resolve, rejects) => {
    const numeroAleatorio = Math.random();
    if (numeroAleatorio < 0.5) {
        resolve("La operación se realizó correctamente.");//
    } else {
        rejects(new Error("La operación falló."), numeroAleatorio);
    }
});

promesa.then((resultado) => {
    console.log("Resultado de la promesa: ", resultado);
});

console.log(promesa);
*/

async function saludar() {
    try {
        throw new Error("Hola Benja!");
    } catch (error) {
        console.error("Error en la promesa: ", error.message);
    }

}
saludar();
