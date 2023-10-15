const { DataTypes } = require("sequelize");

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
