const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class Usuario extends Model {};

Usuario.init({
    mail: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
            isEmail: true,
            len: [1, 100]
        }
    },
    foto: DataTypes.STRING,
    sexo: DataTypes.ENUM('hombre', 'mujer', 'otro'),
    fecha_nacimiento: DataTypes.DATE,
    telefono: {
        type: DataTypes.STRING,
        validate: {
            len: [9, 9]
        }
    },
    contrasena: {
        type: DataTypes.STRING,
        validate: {
            len: [1,45]
        }
    }
},
{
    sequelize,
    modelName: "usuario", 
    freezeTableName: true,
    timestamps: false
});

module.exports = Usuario;

//visto en clase