const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class Perfil extends Model {};

Perfil.init({
    usuario: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
            len: [5, 50]
        }
    },
    nombre: DataTypes.STRING,
    seguidos: DataTypes.INTEGER,
    seguidores: DataTypes.INTEGER,
    biografia: DataTypes.TEXT,
    mail_user: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
            len: [10, 100]
        }
    }

},
{
    sequelize,
    modelName: 'perfil',
    freezeTableName: true,
    timestamps: false
});

module.exports = Perfil;