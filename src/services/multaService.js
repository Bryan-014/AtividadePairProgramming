const { Multa } = require('../models');

const criarMulta = async (usuario_id, valor, descricao) => {
  const multa = await Multa.create({ usuario_id, valor, descricao });

  return {
    id: multa.id,
    usuario_id: multa.usuario_id,
    valor: multa.valor,
    descricao: multa.descricao,
    pago: multa.pago,
  };
};

const buscarPorId = async (id) => {
  return await Multa.findByPk(id);
};

const deletarMulta = async (id) => {
  return await Multa.destroy({
    where: { id }
  });
};

const listarMultas = async (usuario_id) => {
  const where = {};

  if (usuario_id) where.usuario_id = usuario_id;

  return await Multa.findAll({ where });
};

const atualizarMulta = async (id, dados) => {
  const multa = await Multa.findByPk(id);
  if (!multa) throw new Error('Multa não encontrada');

  await multa.update(dados);

  return {
    id: multa.id,
    usuario_id: multa.usuario_id,
    valor: multa.valor,
    descricao: multa.descricao,
    pago: multa.pago,
  };
};

const pagarMulta = async (multa_id) => {
  const multa = await Multa.findByPk(multa_id);
  if (!multa) throw new Error('Multa não encontrada');

  multa.pago = true;

  await multa.save();

  return {
    id: multa.id,
    usuario_id: multa.usuario_id,
    valor: multa.valor,
    descricao: multa.descricao,
    pago: multa.pago,
  };
};

module.exports = { 
  criarMulta,
  buscarPorId,
  deletarMulta,
  listarMultas,
  atualizarMulta,
  pagarMulta
};