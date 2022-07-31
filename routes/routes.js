const router = require("express").Router();
const usuarios = require('../controllers/usuarios');

const { registro, login, buscarpruebas, verificacion, verinfo, inscribirse, entregar, historial, perfil } = usuarios;




router.post("/busqueda", buscarpruebas)
router.post("/registro", registro)
router.post("/login", login)
router.post("/verificacion",verificacion)
router.post("/verinfo",verinfo)
router.post("/inscribirse",inscribirse)
router.post("/entregar",entregar)
router.post("/historial",historial)
router.post("/perfil",perfil)


 
module.exports = router;