const { Router } = require("express");
const livroRoutes = require("./livroRoutes");
const usuariosRoutes = require("./usuarioRoutes");
const emprestimosRoutes = require("./emprestimoRoutes");
const multasRoutes = require("./multaRoutes");

const router = Router();
router.use("/livros", livroRoutes);
router.use("/usuarios", usuariosRoutes);
router.use("/emprestimos", emprestimosRoutes);
router.use("/multas", multasRoutes);

module.exports = router;
