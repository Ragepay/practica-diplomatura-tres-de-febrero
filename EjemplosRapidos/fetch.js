console.log("Inicio archivo fetch.js");

const url = 'https://rickandmortyapi.com/api/character/1';
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

const miOperacionAsincronaConFetch = () => {
    return new Promise((resolve, reject) => {
        console.log("Iniciando fetch...");
        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta de la API');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(new Error("La operación falló: " + error.message));
            }).finally(() => {
                console.log("Fetch finalizado.");
            });
    })
};

const ejecutar = async () => {
    try {
        const personaje = await miOperacionAsincronaConFetch();
        console.log("Personaje:", personaje);
    } catch (error) {
        console.error("Error capturado:", error.message);
    }
};

ejecutar();