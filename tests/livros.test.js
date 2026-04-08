const request = require('supertest');
const api = `http://localhost:${process.env.PORT || 3000}`;

describe("Livros", () => {
    test('POST /livros cria um livro', async () => {
        const res = await request(api).post('/livros').send({ titulo: 'Clean Code', autor: 'Martin Code'});
        expect(res.status).toBe(201);
        expect(res.body.titulo).toBe('Clean Code');
    });
    test('GET /livros/:id vizualiza um livro', async () => {
        const res = await request(api).get(`/livros/1`);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('titulo');
     });
    test('PUT /livros/:id atualiza um livro', async () => {
        const res = await request(api).put(`/livros/1`).send({ titulo: 'Clean Architeture', autor: 'Martin Code'});
        expect(res.status).toBe(200);
        expect(res.body.titulo).toBe('Clean Architeture');
        expect(res.body.autor).toBe('Martin Code');
    });
    test('DELETE /livros:id deleta um livro', async () => {
        const res = await request(api).delete(`/livros/3`);
        expect(res.status).toBe(202);
        
    });
    test('GET /livros/disponiveis lista livros disponiveis', async () => {
        const res = await request(api).get('/livros/disponiveis');
        
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Array);   
    });
})

