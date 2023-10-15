const { DataTypes } = require("sequelize");

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
      allowNull: false,
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
