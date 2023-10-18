const { DataTypes } = require("sequelize");

/* El bloque de código `module.exports = (sequelize) => {... }` está exportando una función que define
un modelo Sequelize llamado "Conversiones". */
module.exports = (sequelize) => {
  sequelize.define("Conversiones", {
    idCoversion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cantidad: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    monedaOriginal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidadConvertida: {
      type: DataTypes.FLOAT,
    },
    monedaConvertida: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechaConversion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  });
};
