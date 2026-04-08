const { Router } = require("express");
const livroRoutes = require("./livroRoutes");
const usuariosRoutes = require("./usuarioRoutes");

const router = Router();
router.use("/livros", livroRoutes);
router.use("/usuarios", usuariosRoutes);

module.exports = router;
