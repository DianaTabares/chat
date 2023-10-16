const { DataTypes } = require("sequelize");

/* Este código exporta una función que define un modelo Sequelize llamado "Mensajes". La función toma
una instancia de Sequelize como parámetro y la usa para definir el modelo. */
module.exports = (sequelize) => {
  sequelize.define("Mensajes", {
    idMensaje: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    contenido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechaConsulta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  });
};
