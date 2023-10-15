const { conn } = require("./src/db");
const server = require("./src/server");
const PORT = 3001;

conn.sync().then(() => {
  server.listen(PORT, async () => {
    console.log(`Corriendo en el puerto: ${PORT}`);
  });
});
