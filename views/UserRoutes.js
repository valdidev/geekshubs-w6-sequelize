const express = require('express');
const router = express.Router();

const Usuario = require('../models/usuario');

// CRUD READ
router.get('/', (req, res) => {
    Usuario.findAll({
        where: { sexo: 'Mujer' },
        limit: 1
    })
    .then(resp => {
        res.send(resp)
    })
})

//Buscamos por Primary key
router.get('/findID/:mail', (req, res) => {
    let mail = req.params.mail
    Usuario.findByPk(mail)
    .then(resp => {
        res.send(resp)
    })
})

// CRUD CREATE
router.post('/register', async (req, res) => {
    try {
        let data = req.body
        let resp = await Usuario.create({
            mail: data.mail,
            foto: data.foto,
            sexo: data.sexo,
            fecha_nacimiento: data.fecha_nacimiento,
            telefono: data.telefono,
            contrasena: data.contrasena
        })

        res.send(resp)
    } catch(error) {
        res.send(error)
    }
})

// CRUD UPDATE
router.put('/updateUser', async (req, res) => {
    try{
        let data = req.body

        let resp = await Usuario.update(
            {
                foto: data.foto,
                sexo: data.sexo,
                fecha_nacimiento: data.fecha_nacimiento,
                telefono: data.telefono,
                contrasena: data.contrasena
            }, 
            {
                where: { mail: data.mail}
            })

        res.send({
            resp: resp,
            message: "Se ha actualizado el registro correctamente",
            id: data.mail
        })

    } catch(error){
        res.send(error)
    }
})

// CRUD DELETE
router.delete('/deleteUser/:mail', async (req, res) => {
    try{
        
        let mail = req.params.mail
        let resp = await Usuario.destroy({
            where: { mail: mail }
        })
        console.log(resp)
        if(resp == 1){
            res.send("El usuario ha sido eliminado")
        } else {
            res.send("No se ha podido eliminar el usuario")
        }
        
    } catch(error){
        res.send(error)
    }
})


module.exports = router