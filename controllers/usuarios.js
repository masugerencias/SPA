

const Usuario = require('../models/Usuario');
const Prueba = require('../models/Prueba');
const connection = require("../databases/sql");
const mysql = require("mysql");
const { Sequelize, Op } = require("sequelize");
const { encrypt, compare } = require('../helpers/handleBcrypt');
const UsuariosPruebas = require('../models/UsuariosPruebas');




const usuarios = {

  registro: async (req, res) => {

    try {
      let nombre = req.body.nombre;
      let apellido = req.body.apellido;
      let email = req.body.email;
      let contrasena = req.body.contrasena;
      let username = req.body.username;

      const passwordHash = await encrypt(contrasena);


      const usuarioComprobacion = await Usuario.findOne({
        where: { email: email },
      });
      //console.log(passwordHash)
      //console.log(usuarioComprobacion)
      if (!usuarioComprobacion) {

        if (
          nombre.match(/^[a-z ,.'-]+$/i) &&
          apellido.match(/^[a-z ,.'-]+$/i) &&
          email.match(
            /^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/)
          && username.match(/^([A-Za-z]{1,15})$/)) {


          const usuario = Usuario.create({
            nombre: nombre,
            apellido: apellido,
            email: email,
            contrasena: passwordHash,
            username: username,
            empleado: false
          });
          //console.log(passwordHash)
          res.json({
            usuario: username,
          });


        } else {
          res.json({
            message: "Datos invalidos",
          });
          //res.send("Datos invalidos");
        }

      } else {
        res.json({
          message: "El usuario existe",
        });
        //res.send("El usuario existe");
      }
    } catch (error) {
      console.error(error);
      res.send("Error");
    }
  },

  login: async (req, res) => {
    try {
      //console.log(req)
      const username = req.body.username
      const passwordLogin = req.body.contrasena

      //const { usuarioLogin, passwordLogin } = req.body;
      const usuario = await Usuario.findOne({
        where: { username: username },

      });

      //console.log(usuarioLogin)
      //console.log(passwordLogin)
      if (!usuario) {

        //res.send("El usuario no existe");
        res.json({
          message: "El usuario no existe",
        });
      }
      const checkPassword = await compare(passwordLogin, usuario.contrasena);

      if (checkPassword) {

        //res.send(`Bienvenido ${usuario.nombre}. Login ok`);

        res.json({
          message: true,
          username: usuario.username,
          empleado: usuario.empleado

          //nombre: usuario.nombre,
          //apellido: usuario.apellido,
          //rol: usuario.rol  
        })

        //console.log(usuario)
        // res.json({
        //   message: `Bienvenido ${usuario.nombre}. Login ok`,
        // });

      } else {
        //res.send("Contraseña erronea");
        res.json({
          message: `Contraseña erronea`,
        });
      }
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
  verificacion: async (req, res) => {
    try {

      const id_usuario_pruebas = req.body.id_usuario_pruebas
      const tarjeta = req.body.tarjeta


      //este ususario pruebas dice que no está definido.
      const verificacion = await UsuariosPruebas.findOne({
        where: { id_usuario_pruebas: id_usuario_pruebas, tarjeta: tarjeta }

      });


      const prueba = await Prueba.findOne({ where: { id_prueba: verificacion.fk_pruebas } })
      console.log(verificacion)
      console.log(prueba)


      res.json({ dorsal: verificacion, prueba: prueba })


      //console.log(usuarioLogin)
      //console.log(passwordLogin)
      /*  if (!usuario) {
 
         //res.send("El usuario no existe");
         res.json({
           message: "El usuario no existe",
         });
       }
       const checkPassword = await compare(passwordLogin, usuario.contrasena);
 
       if (checkPassword) {
 
         //res.send(Bienvenido ${usuario.nombre}. Login ok);
 
         res.json({
           message: true,
           username: usuario.username, 
           //nombre: usuario.nombre,
           //apellido: usuario.apellido,
           //rol: usuario.rol
       })
 
         //console.log(usuario)
         // res.json({
         //   message: Bienvenido ${usuario.nombre}. Login ok,
         // });
 
       } else {
         //res.send("Contraseña erronea");
         res.json({
           message: Contraseña erronea,
         });
       } */
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },


  buscarpruebas: async (req, res) => {
    try {

      const tipo = req.body.tipoPrueba
      var fechaI = new Date(req.body.fechaInicio);
      var fechaF = new Date(req.body.fechaFin);
      var fechaIn = fechaI.getFullYear() + '-' + (fechaI.getMonth() + 1) + '-' + fechaI.getDate();
      var fechaFi = fechaF.getFullYear() + '-' + (fechaF.getMonth() + 1) + '-' + fechaF.getDate();

      //console.log(fecha)

      const prueba = await Prueba.findAll({
        where: {
          tipo: tipo,
          fechaInicio: { [Sequelize.Op.gt]: fechaIn },
          fechaFin: { [Sequelize.Op.lt]: fechaFi },
        },
        //, fechaInicio: fechaI  `${fecha}` ...tipo: tipo,
      });
      //console.log(prueba) 
      //console.log(typeof prueba[0].dataValues.fechainicio)

      res.json({
        prueba
      });

    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },


  verinfo: async (req, res) => {
    try {

      const id_prueba = req.body.id

      //console.log(fecha)

      const prueba = await Prueba.findOne({
        where: {
          id_prueba: id_prueba,

        },
        //, fechaInicio: fechaI  `${fecha}` ...tipo: tipo,
      });
      console.log(prueba)
      //console.log(typeof prueba[0].dataValues.fechainicio)

      // res.json({
      //   prueba
      // });

    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
  inscribirse: async (req, res) => {
    const usuario = await Usuario.findOne({
      where: { username: req.body.user }
    });
    const prueba = await Prueba.findOne({
      where: { id_prueba: req.body.idprueba }
    });
    console.log(prueba.participantes_max)
    const yaregistrado = await UsuariosPruebas.findOne({
      where: { fk_usuario: usuario.id_usuario, fk_pruebas: req.body.idprueba }
    });

    if (prueba.participantes_max > 0) {
      if (yaregistrado == null) {
        


        const inscripcion = UsuariosPruebas.create({
          fk_usuario: usuario.id_usuario,
          fk_pruebas: req.body.idprueba,
          tarjeta: req.body.tarjeta,
          dorsal: prueba.participantes_max,
          estado: false

        });
        const actualizarparticipantes = await Prueba.update({ participantes_max: `${prueba.participantes_max}`-1 }, {
          where: { id_prueba: req.body.idprueba },
        });


        res.json(true)
      } else {
        res.json(false)
      }
    }else{res.json("sin plazas")}
  },

  entregar: async (req, res) => {
    try {

      //console.log(req.body.numeroInscripcion)
      const numInscripcion = req.body.numeroInscripcion
      console.log(numInscripcion)
      const entregar = await UsuariosPruebas.update({ estado: true }, {
        where: { id_usuario_pruebas: numInscripcion },
      });

      const id_usuario_pruebas = req.body.id_usuario_pruebas  //tambien numero de inscripcion
      const tarjeta = req.body.tarjeta

      //este ususario pruebas dice que no está definido.
      const verificacion = await UsuariosPruebas.findOne({
        where: { id_usuario_pruebas: id_usuario_pruebas, tarjeta: tarjeta }

      });

      const prueba = await Prueba.findOne({ where: { id_prueba: verificacion.fk_pruebas } })
      //console.log(verificacion)
      //console.log(prueba)


      res.json({ dorsal: verificacion, prueba: prueba })


    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },

  historial: async (req, res) => {
    
    try {

      //guardamos el usuario que esa logeado
      const usuario = await Usuario.findOne({
        where: { username: req.body.user }
      });
     
      

  
      //guardamos las fk del usuario que esta loqueado
      const fkpruebas = await UsuariosPruebas.findAll({
        where: { fk_usuario: usuario.id_usuario}

      });


      
      
      let datosHistorial = [];
      for (let i = 0; i < fkpruebas.length; i++) {
       let historial = await Prueba.findOne({ where: { id_prueba: fkpruebas[i].fk_pruebas } });
        //console.log(historial.dataValues)
        
         let data = {
           fechainicio: historial.dataValues.fechainicio,
           fechafin: historial.dataValues.fechafin,
           nombreprueba: historial.dataValues.nombreprueba,
           precio: historial.dataValues.precio,
           tipo: historial.dataValues.tipo,
           descripcion: historial.dataValues.descripcion,
           id_prueba: historial.dataValues.id_prueba,
           dorsal: fkpruebas[i].dorsal
         }
        datosHistorial.push(data)
      }
      

      //console.log(datosHistorial)
      res.json({ datosHistorial })


    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
  perfil: async (req, res) => {

    if(req.body.num == 1){
      const cambioemail = await Usuario.update({ email: req.body.email }, {
        where: { username: req.body.user },
      });
      res.json({cambio:1})
    }else if(req.body.num==2){
      const passwordHash = await encrypt(req.body.contrasena);
      const cambiocontrasena = await Usuario.update({ contrasena: passwordHash }, {
        where: { username: req.body.user },
      });
      res.json({cambio:2})
    }

  }
}


module.exports = usuarios;