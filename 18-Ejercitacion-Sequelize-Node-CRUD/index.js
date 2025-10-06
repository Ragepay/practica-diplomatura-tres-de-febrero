import express from "express";
import morgan from "morgan";
import indexRouter from "./src/routes/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import { sequelize } from "./src/conexion/connection.js";
//import { dbConnect, dbDisconnect } from "./src/utils/dbConnect.util.js";

// Importar dotenv para leer variables de entorno.
process.loadEnvFile();
// Configuracion de variables de entorno.
const { PORT, MODE } = process.env;
// Inicializar el servidor.
const app = express();
// Escuchando el puerto.
app.listen(PORT, ready);

// Middlewares
app.disable("x-powered-by");
app.use(express.json()); // Para leer el body de las peticiones.
app.use(express.urlencoded({ extended: true })); // Para leer el body de las peticiones.
app.use(express.static("public")); // Para servir archivos estaticos, como el front.
app.use(morgan("dev")); // Logger para ver las peticiones en consola.

// Rutas
app.use(indexRouter);

// Middleware de manejo de errores.
app.use(errorHandler);
app.use(pathHandler); // Debe ser el ultimo, porque recibe rutas no existentes.

// Funcion de ejecucion del servidor.
async function ready() {
    try {
        // Conectar a la base de datos.
        await sequelize.authenticate();
        console.log("✅ Conexión establecida con la base de datos.");
        // Sincronizar modelos (sin { force: true } en producción)
        await sequelize.sync();
        console.log("📦 Modelos sincronizados.");
        // Datos del Servidor.
        console.log(`MODE: ${MODE} | PORT: ${PORT}`);
        console.log(`http://localhost:${PORT}`);

        
    } catch (error) {
        console.error("❌ Error al conectar con la base de datos:", error);
        process.exit(1);
    }
}

process.on("SIGINT", async () => {
    console.log("🔌 Desconectado de MySQL. Adiós.");
    //await dbDisconnect();
    process.exit(0);
});