const { criarLivro, buscarPorId, atualizarLivro, deletarLivro, livrosDisponiveis } = require('../services/livroService');

const criar = async (req, res) => {
    const { titulo, autor } = req.body;

    if (!titulo || !autor) return res.status(400)
        .json({ erro: 'titulo e autor são obrigatórios'})

    const livro = await criarLivro(titulo, autor);
    res.status(201).json(livro);
}

const acharPorId = async(req, res) =>{
    const{id} = req.params;
    const livro = await buscarPorId(id);


    if(!livro) return res.status(404).json({error:"não encontrado ai ai ai"})
        return res.status(200).json(livro)
}

const atualizarPorId = async(req, res)=>{
    const{id} = req.params;
    const { titulo, autor } = req.body;
    const livro = await atualizarLivro(id, titulo, autor);

    if(!livro) return res.status(404).json({error:"não encontrado ai ai ai"})
        return res.status(200).json(livro)
}
const deletarPorId = async(req, res)=>{
    const{id} = req.params;
    const livro = await deletarLivro(id);

    if(!livro) return res.status(500).json({error:"não deletado ai ai ai"})
        return res.status(202).json()
}

const listarLivros = async (req, res) => {
    console.log("1123")

  try {
    const livros = await livrosDisponiveis();
    return res.status(200).json(livros);
  } catch (error) {
    return res.status(500).json({ error: "erro no servidor:" + error });
  }
}

module.exports = { criar,acharPorId, atualizarPorId, deletarPorId, listarLivros };