const axios = require('axios');
require('dotenv').config();
const api = `http://localhost:${process.env.PORT || 3000}`;

const LIVRO_ID = 1;
const USUARIO_ID = 1;

describe("Empréstimos", () => {
    test("deve registrar um novo empréstimo", async () => {
        const res = await axios.post(`${api}/emprestimos`, {
            livro_id: LIVRO_ID,
            usuario_id: USUARIO_ID,
            data_devolucao_prevista: "2025-05-01",
        });
        expect(res.status).toBe(201);
        expect(res.data).toHaveProperty("id");

        await axios.delete(`${api}/emprestimos/${res.data.id}`);
    });

    test("deve retornar uma lista de empréstimos", async () => {
        const res = await axios.get(`${api}/emprestimos`);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.data)).toBe(true);
    });

    test("deve deletar um empréstimo", async () => {
        const criado = await axios.post(`${api}/emprestimos`, {
            livro_id: LIVRO_ID,
            usuario_id: USUARIO_ID,
            data_devolucao_prevista: "2025-05-01",
        });
    
        const res = await axios.delete(`${api}/emprestimos/${criado.data.id}`);
        expect(res.status).toBe(204);
    });

    test("deve retornar 404 ao deletar empréstimo inexistente", async () => {
        try {
            await axios.delete(`${api}/emprestimos/99999`);
        } catch (err) {
            expect(err.response.status).toBe(404);
        }
    });

    test("deve retornar um empréstimo pelo id", async () => {
        const res = await axios.get(`${api}/emprestimos/1`);
        expect(res.status).toBe(200);
        expect(res.data).toHaveProperty("id");
        expect(res.data).toHaveProperty("livro_id");
        expect(res.data).toHaveProperty("usuario_id");
        expect(res.data).toHaveProperty("data_devolucao_prevista");
    });
    
    test("deve retornar 404 para empréstimo inexistente", async () => {
        try {
            await axios.get(`${api}/emprestimos/99999`);
        } catch (err) {
            expect(err.response.status).toBe(404);
        }
    });

    test("deve retornar 400 ao registrar empréstimo sem livro_id", async () => {
        try {
            await axios.post(`${api}/emprestimos`, {
                usuario_id: USUARIO_ID,
                data_devolucao_prevista: "2025-05-01",
            });
        } catch (err) {
            expect(err.response.status).toBe(400);
        }
    });

    test("deve retornar 400 ao registrar empréstimo sem usuario_id", async () => {
        try {
            await axios.post(`${api}/emprestimos`, {
                livro_id: LIVRO_ID,
                data_devolucao_prevista: "2025-05-01",
            });
        } catch (err) {
            expect(err.response.status).toBe(400);
        }
    });

    test("deve retornar 400 ao registrar empréstimo sem data de devolução", async () => {
        try {
            await axios.post(`${api}/emprestimos`, {
                livro_id: LIVRO_ID,
                usuario_id: USUARIO_ID,
            });
        } catch (err) {
            expect(err.response.status).toBe(400);
        }
    });

    test("deve registrar a devolução de um empréstimo", async () => {
        const criado = await axios.post(`${api}/emprestimos`, {
            livro_id: LIVRO_ID,
            usuario_id: USUARIO_ID,
            data_devolucao_prevista: "2025-05-01",
        });

        const res = await axios.patch(`${api}/emprestimos/${criado.data.id}/devolucao`);
        
        expect(res.status).toBe(200);
        expect(res.data).toHaveProperty("data_devolucao"); 
    });

    test("deve retornar 404 ao devolver empréstimo inexistente", async () => {
        try {
            await axios.patch(`${api}/emprestimos/99999/devolucao`);
        } catch (err) {
            expect(err.response.status).toBe(404);
        }
    });

    test("deve listar empréstimos de um usuário específico", async () => {
        const res = await axios.get(`${api}/emprestimos?usuario_id=${USUARIO_ID}`);
        
        expect(res.status).toBe(200);
        expect(Array.isArray(res.data)).toBe(true);
        if (res.data.length > 0) {
            expect(res.data[0].usuario_id).toBe(USUARIO_ID);
        }
    });

    test("deve retornar 400 ao emprestar livro já emprestado", async () => {
        const primeiro = await axios.post(`${api}/emprestimos`, {
            livro_id: LIVRO_ID,
            usuario_id: USUARIO_ID,
            data_devolucao_prevista: "2025-05-01",
        });

        try {
            await axios.post(`${api}/emprestimos`, {
                livro_id: LIVRO_ID,
                usuario_id: USUARIO_ID,
                data_devolucao_prevista: "2025-05-10",
            });
        } catch (err) {
            expect(err.response.status).toBe(400);
        } finally {
            await axios.delete(`${api}/emprestimos/${primeiro.data.id}`);
        }
    });
});