const express = require('express');
const app = express();

const db = require('./db/db');
const router = require('./router');


const PORT = 3000;

const Usuario = require('./models/usuario');
const Perfil = require('./models/perfil');


// MIDDLEWARES
app.use(express.json());
app.use(router);

// ENDPOINTS
/* router.get('/', (req, res) => {
    Usuario.findAll()
        .then(respuesta => {
            res.send(respuesta);
        });
}); */
/* CRUD TABLA USUARIO */
// READ
/* 
router.get('/findID/:mail', (req, res) => {
    let mail = req.params.mail
    Usuario.findByPk(mail)
        .then(resp => {
            res.send(resp);
        })
});

// CREATE
router.post('/register', async (req, res) => {
    try {
        let data = req.body;
        let resp = await Usuario.create({
            mail: data.mail,
            foto: data.foto,
            sexo: data.sexo,
            fecha_nacimiento: data.fecha_nacimiento,
            telefono: data.telefono,
            contrasena: data.contrasena
        })
        res.send(resp);
    }
    catch (err) {
        res.send(err);
    }
});

// UPDATE
router.put('/updateUser', async (req, res) => {
    try {
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
                where: { mail: data.mail }
            })

        res.send({
            resp: resp,
            message: "Los datos han cambiado",
            id: data.mail
        });

    } catch (error) {
        res.send(error);
    }
});

// DELETE
router.delete('/deleteUser/:mail', async (req, res) => {
    try {
        let mail = req.params.mail;
        let resp = await Usuario.destroy({
            where: {mail: mail}
        })
        console.log(resp)
        if(resp == 1){
            res.send("El usuario ha sido eliminado");
        }else {
            res.send("No se ha podido eliminar");
        }
    } catch (error) {
        res.send(error);
    }
})
 */





////////////////////
//PUERTO
app.listen(PORT, () => {
    console.log(`Escuchado por puerto ${PORT}...`);
});









