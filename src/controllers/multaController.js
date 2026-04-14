const { 
  criarMulta,
  buscarPorId,
  deletarMulta,
  listarMultas,
  atualizarMulta,
  pagarMulta
} = require('../services/multaService');

const criar = async (req, res) => {
  const { usuario_id, valor, descricao } = req.body;

  if (!usuario_id || !valor) {
    return res.status(400).json({ erro: 'Usuário e valor são obrigatórios' });
  }

  try {
    const multa = await criarMulta(usuario_id, valor, descricao);
    return res.status(201).json(multa);
  } catch (error) {
    return res.status(500).json({ error: "erro no servidor: " + error });
  }
};

const acharPorId = async (req, res) => {
  const { id } = req.params;

  const multa = await buscarPorId(id);

  if (!multa) {
    return res.status(404).json({ error: "Multa não encontrada" });
  }

  return res.status(200).json(multa);
};

const atualizarPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const multa = await atualizarMulta(id, req.body);
    return res.status(200).json(multa);
  } catch (error) {
    return res.status(404).json({ error: "Multa não encontrada" });
  }
};

const deletarPorId = async (req, res) => {
  const { id } = req.params;

  const deletado = await deletarMulta(id);

  if (!deletado) {
    return res.status(404).json({ error: "Multa não encontrada" });
  }

  return res.status(204).send();
};

const listar = async (req, res) => {
  try {
    const { usuario_id } = req.query;

    const multas = await listarMultas(usuario_id);

    return res.status(200).json(multas);
  } catch (error) {
    return res.status(500).json({ error: "erro no servidor: " + error });
  }
};

const pagar = async (req, res) => {
  const { id } = req.params;

  try {
    const multa = await pagarMulta(id);
    return res.status(200).json(multa);
  } catch (error) {
    return res.status(404).json({ error: "Multa não encontrada" });
  }
};

module.exports = { 
  criar, 
  acharPorId, 
  atualizarPorId, 
  deletarPorId, 
  listar,
  pagar
};