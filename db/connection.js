const mysql = require('mysql2');

if (!process.env.HOST || !process.env.USER || !process.env.PASS || !process.env.DATA_BASE) {
  console.error('Faltan variables de entorno requeridas.');
  process.exit(1); 
};

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password:process.env.PASS,
    database: process.env.DATA_BASE
});

const connectToDatBase = async () => {
  try {
    await connection.promise().connect();
    console.log('Conexion Exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos: ' + error);
  }
};

connectToDatBase();

module.exports = connection;
