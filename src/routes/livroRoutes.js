const { Router } = require('express');
const { criar, acharPorId, atualizarPorId, deletarPorId, listarLivros } = require('../controllers/livroController');

const router = Router();

router.post("/", criar);
router.get("/disponiveis", listarLivros)
router.get("/:id",acharPorId);
router.put("/:id", atualizarPorId);
router.delete("/:id", deletarPorId);

module.exports = router;