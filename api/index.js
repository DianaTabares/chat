/* Este código configura un servidor usando Node.js y Express. */
const { conn } = require("./src/db");
const server = require("./src/server");
const PORT = 3001;

/* El código `conn.sync().then(() => { server.listen(PORT, async () => { console.log(`Corriendo en el
puerto: `); }); }) ;` está sincronizando la conexión de la base de datos y luego iniciando el
servidor para escuchar en el puerto especificado. */
conn.sync().then(() => {
  server.listen(PORT, async () => {
    console.log(`Corriendo en el puerto: ${PORT}`);
  });
});
