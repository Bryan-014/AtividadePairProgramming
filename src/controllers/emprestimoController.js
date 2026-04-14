const { 
  criarEmprestimo,
  buscarPorId,
  deletarEmprestimo,
  listarEmprestimos,
  devolverLivro
} = require('../services/emprestimoService');

const criar = async (req, res) => {
  try {
    const { livro_id, usuario_id, data_devolucao_prevista } = req.body;

    if (!livro_id || !usuario_id || !data_devolucao_prevista) {
      return res.status(400).json({ erro: 'Dados obrigatórios' });
    }

    const emprestimo = await criarEmprestimo(
      livro_id,
      usuario_id,
      data_devolucao_prevista
    );

    return res.status(201).json(emprestimo);

  } catch (error) {
    if (error.message === 'Livro já emprestado') {
      return res.status(400).json({ error: error.message });
    }

    return res.status(500).json({ error: error.message });
  }
};

const acharPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const emprestimo = await buscarPorId(id);

    if (!emprestimo) {
      return res.status(404).json({ error: "Emprestimo não encontrado" });
    }

    return res.status(200).json(emprestimo);

  } catch (error) {
    return res.status(500).json({ error: "erro no servidor: " + error.message });
  }
};

const realizarDevolucao = async (req, res) => {
  try {
    const { id } = req.params;
    const data_atual = new Date();

    const emprestimo = await devolverLivro(data_atual, id);

    return res.status(200).json(emprestimo);

  } catch (error) {
    return res.status(404).json({ error: "Emprestimo não encontrado" });
  }
};

const deletarPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const deletado = await deletarEmprestimo(id);

    if (!deletado) {
      return res.status(404).json({ error: "Emprestimo não encontrado" });
    }

    return res.status(204).send();

  } catch (error) {
    return res.status(500).json({ error: "erro no servidor: " + error.message });
  }
};

const listar = async (req, res) => {
  try {
    const { usuario_id } = req.query;

    const emprestimos = await listarEmprestimos(usuario_id);

    return res.status(200).json(emprestimos);

  } catch (error) {
    return res.status(500).json({ error: "erro no servidor: " + error.message });
  }
};

module.exports = { 
  criar, 
  acharPorId, 
  realizarDevolucao, 
  deletarPorId, 
  listar 
};