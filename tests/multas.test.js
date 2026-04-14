const axios = require('axios');
require('dotenv').config();
const api = `http://localhost:${process.env.PORT || 3000}`;

const USUARIO_ID = 1;

describe("Multas", () => {
  test("deve registrar uma nova multa", async () => {
    const res = await axios.post(`${api}/multas`, {
      usuario_id: USUARIO_ID,
      valor: 25.50,
      descricao: "Atraso na devolução",
    });

    expect(res.status).toBe(201);
    expect(res.data).toHaveProperty("id");
    expect(res.data.valor).toBe(25.50);

    await axios.delete(`${api}/multas/${res.data.id}`);
  });

  test("deve retornar uma lista de multas", async () => {
    const res = await axios.get(`${api}/multas`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);
  });

  test("deve retornar uma multa pelo id", async () => {
    const res = await axios.get(`${api}/multas/1`);

    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty("id");
    expect(res.data).toHaveProperty("usuario_id");
    expect(res.data).toHaveProperty("valor");
  });

  test("deve retornar 404 para multa inexistente", async () => {
    try {
      await axios.get(`${api}/multas/99999`);
    } catch (err) {
      expect(err.response.status).toBe(404);
    }
  });

  test("deve atualizar uma multa", async () => {
    const criado = await axios.post(`${api}/multas`, {
      usuario_id: USUARIO_ID,
      valor: 10,
      descricao: "Teste atualização",
    });

    const res = await axios.put(`${api}/multas/${criado.data.id}`, {
      valor: 15,
    });

    expect(res.status).toBe(200);
    expect(res.data.valor).toBe(15);

    await axios.delete(`${api}/multas/${criado.data.id}`);
  });

  test("deve retornar 404 ao atualizar multa inexistente", async () => {
    try {
      await axios.put(`${api}/multas/99999`, { valor: 50 });
    } catch (err) {
      expect(err.response.status).toBe(404);
    }
  });

  test("deve deletar uma multa", async () => {
    const criado = await axios.post(`${api}/multas`, {
      usuario_id: USUARIO_ID,
      valor: 30,
      descricao: "Para deletar",
    });

    const res = await axios.delete(`${api}/multas/${criado.data.id}`);

    expect(res.status).toBe(204);
  });

  test("deve retornar 404 ao deletar multa inexistente", async () => {
    try {
      await axios.delete(`${api}/multas/99999`);
    } catch (err) {
      expect(err.response.status).toBe(404);
    }
  });

  test("deve retornar 400 ao criar multa sem usuario_id", async () => {
    try {
      await axios.post(`${api}/multas`, {
        valor: 20,
        descricao: "Erro",
      });
    } catch (err) {
      expect(err.response.status).toBe(400);
    }
  });

  test("deve retornar 400 ao criar multa sem valor", async () => {
    try {
      await axios.post(`${api}/multas`, {
        usuario_id: USUARIO_ID,
        descricao: "Erro",
      });
    } catch (err) {
      expect(err.response.status).toBe(400);
    }
  });

  test("deve listar multas de um usuário específico", async () => {
    const res = await axios.get(`${api}/multas?usuario_id=${USUARIO_ID}`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);

    if (res.data.length > 0) {
      expect(res.data[0].usuario_id).toBe(USUARIO_ID);
    }
  });
});