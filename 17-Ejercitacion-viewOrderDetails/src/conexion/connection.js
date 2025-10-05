import Sequelize from 'sequelize';
// Importar dotenv para leer variables de entorno.
process.loadEnvFile();
// Configuracion de variables de entorno.
const { DATABASE, DBUSER, PASSWORD, HOST } = process.env;

const sequelize = new Sequelize(DATABASE, DBUSER, PASSWORD, {
    host: HOST,
    dialect: 'mysql',
    pool: {
        max: 12,              // máximo de conexiones simultáneas
        min: 0,               // mínimo de conexiones inactivas
        acquire: 30000,       // tiempo máximo (ms) para adquirir una conexión antes de tirar error
        idle: 10000           // tiempo máximo (ms) que una conexión puede estar inactiva antes de ser liberada
    }
});

export { sequelize };