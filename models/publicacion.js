const {DataTypes, Model} = require('sequelize');

const sequelize = require('../db/db');

class Publicacion extends Model {};

Publicacion.init({
    id_publicacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    fecha: DataTypes.DATE,
    likes: DataTypes.INTEGER,
    texto: DataTypes.TEXT
},
{
    sequelize,
    freezeTableName: true,
    timestamps: false
});

module.exports = Publicacion;