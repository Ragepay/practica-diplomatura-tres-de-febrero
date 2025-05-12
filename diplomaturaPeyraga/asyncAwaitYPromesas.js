
async function ObtenerDatosApi() {
    try {
        const resultado = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await resultado.json();
        console.table(data)
    } catch (error) {
        console.error("Error en la promesa: ", error.message);
    }
}

ObtenerDatosApi();

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.table(data)
    })
    .catch((error) => {
        console.error("Error en la promesa: ", error.message);
    });