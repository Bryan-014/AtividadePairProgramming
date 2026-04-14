const { Router } = require('express');
const {
  criar,
  acharPorId,
  atualizarPorId,
  deletarPorId,
  listar,
  pagar
} = require('../controllers/multaController');

const router = Router();

router.post("/", criar);
router.get("/", listar);
router.get("/:id", acharPorId);
router.put("/:id", atualizarPorId);
router.delete("/:id", deletarPorId);
router.patch("/:id/pagar", pagar); 

module.exports = router;