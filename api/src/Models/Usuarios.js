const { DataTypes } = require("sequelize");

/* El código está exportando una función que define un modelo Sequelize llamado "Usuarios" con tres
atributos: "idUsuario", "nombre" y "contraseña". El atributo "idUsuario" es de tipo INTEGER y sirve
como clave principal con el incremento automático habilitado. El atributo "nombre" es de tipo STRING
y no permite valores nulos. El atributo "contraseña" también es de tipo STRING y no permite valores
nulos. */
module.exports = (sequelize) => {
  sequelize.define("Usuarios", {
    idUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
