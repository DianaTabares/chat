/* Este código configura una conexión a una base de datos PostgreSQL utilizando la biblioteca Sequelize
en JavaScript. Aquí hay un desglose de lo que hace cada parte: */
/* El código `require("dotenv").config()` se utiliza para cargar variables de entorno desde un archivo
`.env` en el proceso Node.js. El archivo `.env` normalmente contiene información confidencial, como
credenciales de bases de datos, claves API, etc. Al utilizar `dotenv`, puede mantener estas
variables separadas de su código y administrarlas fácilmente. */
require("dotenv").config();
const { Sequelize } = require("sequelize");

/* El código importa los módulos `fs` y `path` de la biblioteca estándar Node.js. Estos módulos se
utilizan para operaciones del sistema de archivos y para trabajar con rutas de archivos,
respectivamente. */
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

/* El código `const sequelize = new Sequelize(
  `postgres://:@/divisa`,
  {
    registro: falso,
    nativo: falso,
  }
);` está creando una nueva instancia de la clase Sequelize, que es una biblioteca ORM
(Object-Relational Mapping) de Node.js para trabajar con bases de datos. */
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/divisa`,
  {
    logging: false,
    native: false,
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

/* Este bloque de código es responsable de importar y definir dinámicamente los modelos en la instancia
de Sequelize. */
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

/* Este bloque de código es responsable de convertir las claves del objeto `sequelize.models` a
mayúsculas. */
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

/* Este código define las asociaciones entre los modelos en la instancia de Sequelize. */
const { Conversiones, Mensajes, Usuarios } = sequelize.models;

Usuarios.hasMany(Mensajes, {
  foreignKey: "idUsuario",
  as: "Mensajes",
  onDelete: "CASCADE",
});
Mensajes.belongsTo(Usuarios, {
  foreignKey: "idUsuario",
  as: "Usuarios",
  onDelete: "CASCADE",
});
Usuarios.hasMany(Conversiones, {
  foreignKey: "idUsuario",
  as: "Conversiones",
  onDelete: "CASCADE",
});
Conversiones.belongsTo(Usuarios, {
  foreignKey: "idUsuario",
  as: "Usuario",
  onDelete: "CASCADE",
});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
