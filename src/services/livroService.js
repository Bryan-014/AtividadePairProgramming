const { Livro } = require('../models');

const criarLivro = async (titulo, autor) => {
  const livro = await Livro.create({ titulo, autor });
  return {
    id: livro.id,
    titulo: livro.titulo,
    autor: livro.autor,
  };
};

const buscarPorId = async (id) => {
  return await Livro.findByPk(id);  
};

const atualizarLivro = async (id, titulo, autor)=>{
  var livro = await Livro.findByPk(id);
  livro.titulo = titulo;
  livro.autor = autor;

  return await livro.save();
}
const deletarLivro = async (id) => {
  return await Livro.destroy({
    where: { id }
  });
}
const livrosDisponiveis = async ()=>{
  console.log('caiu aqui ou naoc aralho]')
  return await Livro.findAll();
}

module.exports = { 
  criarLivro, 
  buscarPorId, 
  atualizarLivro, 
  deletarLivro,
  livrosDisponiveis,
 };
