const { Router } = require('express');
const { 
    criar, 
    acharPorId, 
    realizarDevolucao, 
    deletarPorId, 
    listar 
} = require('../controllers/emprestimoController');

const router = Router();

router.post("/", criar);
router.get("/", listar);
router.patch("/:id/devolucao", realizarDevolucao);
router.get("/:id", acharPorId);
router.delete("/:id", deletarPorId);

module.exports = router;