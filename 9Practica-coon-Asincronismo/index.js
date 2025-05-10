/*
let peliculas = [
    { titulo: "El Padrino", vista: false },
    { titulo: "El Padrino II", vista: false },
    { titulo: "El Padrino III", vista: true },
    { titulo: "El Señor de los Anillos: La Comunidad del Anillo", vista: true },
    { titulo: "El Señor de los Anillos: Las Dos Torres", vista: false },
    { titulo: "El Señor de los Anillos: El Retorno del Rey", vista: true },
    { titulo: "La Guerra de las Galaxias", vista: false },
    { titulo: "La Guerra de las Galaxias II", vista: false },
    { titulo: "La Guerra de las Galaxias III", vista: true },
]

const mostrarPeliculas = () => {
    if (peliculas.length === 0) {
        console.log("No hay películas en la lista.");
        return
    }

    const peliculasVista = peliculas.filter(pelicula => pelicula.vista === true);
    const peliculasNoVista = peliculas.filter(pelicula => pelicula.vista === false);
    console.log("Películas vistas:");
    console.table(peliculasVista);
    console.log("Películas no vistas:");
    console.table(peliculasNoVista);
}

mostrarPeliculas()
*/

import { createInterface } from "readline";
import chalk from "chalk";

// Variable que almacenara las atreas.
let tasks = [];

// Crear una interfaz de readline para leer la entrada del usuario.
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Función para mostrar el menú de opciones.
function displayMenu() {
    console.log(chalk.green("--------- Menu ---------"));
    console.log(chalk.blue("1. Agregar tarea"));
    console.log(chalk.blue("2. Mostrar tareas"));
    console.log(chalk.blue("3. Marcar tarea como completada"));
    console.log(chalk.blue("4. Eliminar tarea"));
    console.log(chalk.blue("5. Salir"));
    console.log(chalk.green("------------------------"));
}
// Funciones para agregar una tarea.
function addTask() {
    console.log(chalk.blue("Agregar tarea:"));
    rl.question(chalk.yellow("Escribe el nombre de la tarea: "), (task) => {
        tasks.push({ name: task, completed: false });
        console.log(chalk.green(`Tarea "${task}" agregada.`));
        chooseOption();
    });
}
// Función para eliminar una tarea.
function removeTask() {
    console.log(chalk.blue("Eliminar tarea:"));
    listTasks();
    rl.question(chalk.yellow("Escribe el nombre de la tarea a eliminar: "), (task) => {
        const index = parseInt(task) - 1;
        if (tasks[index]) {
            tasks.splice(index, 1);
            console.log(chalk.green(`Tarea con indice: "${task}" eliminada.`));
        } else {
            console.log(chalk.red(`Tarea con indice "${task}" no encontrada.`));
        }
        chooseOption();
    });
}
// Función para mostrar la lista de tareas.
function listTasks() {
    console.log(chalk.blue("Lista de tareas:"));
    if (tasks.length === 0) {
        console.log(chalk.red("No hay tareas en la lista."));
    } else {
        tasks.forEach((task, index) => {
            const status = task.completed ? chalk.green("Completada") : chalk.red("Pendiente");
            console.log(`${index + 1}. ${task.name} - ${status}`);
        });
    }
}
// Función para marcar una tarea como completada.
function completeTask() {
    console.log(chalk.blue("Marcar tarea como completada:"));
    listTasks();
    rl.question(chalk.yellow("Escribe el indice de la tarea a completar: "), (task) => {
        const index = parseInt(task) - 1;
        if (tasks[index]) {
            tasks[index].completed = true;
            console.log(chalk.green(`Tarea "${task}" marcada como completada.`));
        } else {
            console.log(chalk.red(`Tarea "${task}" no encontrada.`));
        }
        chooseOption();
    });
}
// Función para elegir una opción del menú.
function chooseOption() {
    displayMenu();
    rl.question(chalk.green("Elige una opción: "), (option) => {
        switch (option) {
            case "1":
                addTask();
                break;
            case "2":
                listTasks();
                chooseOption();
                break;
            case "3":
                completeTask();
                break;
            case "4":
                removeTask();
                break;
            case "5":
                console.log(chalk.red("Saliendo..."));
                rl.close();
                return;
            default:
                console.log(chalk.red("Opción no válida. Intenta de nuevo."));
                chooseOption();
        }
    });
}
// Iniciar el programa.
chooseOption();
