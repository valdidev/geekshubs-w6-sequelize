const Usuario = require('./usuario');
const Perfil = require('./perfil');
const Comentario = require('./comentario');
const Publicacion = require('./publicacion');
const Rol = require('./rol')

// Uno a Uno
Usuario.hasOne(Perfil);
Perfil.belongsTo(Usuario);

// Uno a muchos
Perfil.hasMany(Comentario)
Comentario.belongsTo(Perfil)

// Uno a muchos
Publicacion.hasMany(Comentario)
Comentario.belongsTo(Publicacion)

//Uno a muchos
Perfil.hasMany(Publicacion)
Publicacion.belongsTo(Perfil)

// Relación (rol - usuario) N a M
Usuario.belongsToMany(Rol, {through: "usuario-rol"});
Rol.belongsToMany(Usuario, {through: "usario-rol"});
