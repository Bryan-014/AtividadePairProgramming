const { 
  criarEmprestimo,
  buscarPorId,
  deletarEmprestimo,
  listarEmprestimos,
  devolverLivro
} = require('../services/livroService');

const criar = async (req, res) => {
    const { livro_id, usuario_id, data_devolucao_prevista } = req.body;

    if (!livro_id || !usuario_id || !data_devolucao_prevista) return res.status(400)
        .json({ erro: 'Livro, usuário e data de devolução prevista são obrigatórios'})

    const emprestimo = await criarEmprestimo(livro_id, usuario_id, data_devolucao_prevista);
    res.status(201).json(emprestimo);
}

const acharPorId = async(req, res) =>{
    const{id} = req.params;
    const emprestimo = await buscarPorId(id);

    if(!emprestimo) return res.status(404).json({error:"Emprestimo não encontrado"})
        return res.status(200).json(emprestimo)
}

const realizarDevolucao = async(req, res)=>{
    const{id} = req.params;
    const data_atual = new Date();
    const emprestimo = await devolverLivro(data_atual, id);

    if(!emprestimo) return res.status(404).json({error:"Erro ao realizar devolução"})
        return res.status(200).json(livro)
}
const deletarPorId = async(req, res)=>{
    const{id} = req.params;
    const emprestimo = await deletarEmprestimo(id);

    if(!emprestimo) return res.status(500).json({error:"Erro ao deletar emprestimo"})
        return res.status(202).json()
}

const listar = async (req, res) => {
  try {
    const { usuario_id } = req.query;

    const emprestimos = await listarEmprestimos(usuario_id);

    return res.status(200).json(emprestimos);
  } catch (error) {
    return res.status(500).json({ error: "erro no servidor:" + error });
  }
};

module.exports = { criar, acharPorId, realizarDevolucao, deletarPorId, listar };