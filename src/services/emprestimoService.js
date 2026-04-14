const { Emprestimo } = require('../models');

const criarEmprestimo = async (livro_id, usuario_id, data_devolucao_prevista) => {

  const existente = await Emprestimo.findOne({
    where: {
      livro_id,
      data_devolucao: null
    }
  });

  if (existente) {
    throw new Error('Livro já emprestado');
  }

  const emprestimo = await Emprestimo.create({
    livro_id,
    usuario_id,
    data_devolucao_prevista
  });

  return {
    id: emprestimo.id,
    livro_id: emprestimo.livro_id,
    usuario_id: emprestimo.usuario_id,
    data_devolucao_prevista: emprestimo.data_devolucao_prevista,
  };
};

const buscarPorId = async (id) => {
  return await Emprestimo.findByPk(id);  
};

const deletarEmprestimo = async (id) => {
  return await Emprestimo.destroy({
    where: { id }
  });
};

const listarEmprestimos = async (usuario_id) => {
  const where = {};
  if (usuario_id) where.usuario_id = usuario_id;

  return await Emprestimo.findAll({ where });
};

const devolverLivro = async (data_devolucao, emprestimo_id) => {
  const emprestimo = await Emprestimo.findByPk(emprestimo_id);

  if (!emprestimo) {
    throw new Error('Emprestimo não encontrado');
  }

  emprestimo.data_devolucao = data_devolucao;
  await emprestimo.save();

  return {
    id: emprestimo.id,
    livro_id: emprestimo.livro_id,
    usuario_id: emprestimo.usuario_id,
    data_devolucao_prevista: emprestimo.data_devolucao_prevista,
    data_devolucao: emprestimo.data_devolucao,
  };
};

module.exports = { 
  criarEmprestimo,
  buscarPorId,
  deletarEmprestimo,
  listarEmprestimos,
  devolverLivro
};