const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class Comentario extends Model {};

Comentario.init({
    id_comentario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fecha: DataTypes.DATE,
    likes: DataTypes.INTEGER,
    texto: DataTypes.TEXT,
},
{
    sequelize,
    modelName: 'comentario',
    freezeTableName: true,
    timestamps: false
});

module.exports = Comentario;