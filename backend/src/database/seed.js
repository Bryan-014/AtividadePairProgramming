require('dotenv').config();
const { Livro, Usuario, Emprestimo, Multa } = require('../models');

async function seed() {
  await Usuario.create({ id: 1, nome: "Teste", email: "teste@example.com", senha: "123456", tipo: "aluno" });

  await Livro.create({ id: 1, titulo: "Teste", autor: "Autor" });

  await Emprestimo.create({
    id: 1,
    livro_id: 1,
    usuario_id: 1,
    data_devolucao_prevista: new Date()
  });

  await Multa.create({
    id: 1,
    usuario_id: 1,
    valor: 10,
    descricao: "Teste"
  });

  console.log("Seed OK");
}

seed();