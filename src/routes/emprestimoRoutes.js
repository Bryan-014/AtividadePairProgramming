const { Router } = require('express');
const { 
    criar, 
    acharPorId, 
    devolucao, 
    deletarPorId, 
    listar } = require('../controllers/livroController');

const router = Router();

router.post("/", criar);
router.get("/", listar)
router.patch("/:id/devolucao", devolucao);
router.get("/:id", acharPorId);
router.delete("/:id", deletarPorId);

module.exports = router;