const { app, server } = require('../app');
const request = require('supertest');

describe('Integrations tests for Todos API', () => {

    // Testen der CORS Funktionalität als Schnittstellen Front/Backend
    it('should have CORS enabled', async () => {
        const response = await request(app).options('/todos');
        expect(response.headers['access-control-allow-origin']).toBe('*');
    });

    // Testen das Abrufen aller Todos
    it('should get all todos', async () => {
        const response = await request(app).get('/todos');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    // Testen das Abrufen eines einzelnen Todos, das nicht vorhanden ist
    it('should return 404 for non-existent todo', async () => {
        const response = await request(app).get('/todos/999');
        expect(response.statusCode).toBe(404);
    });

    // Testen des Erstellen eines neuen Todos
    it('should create a new todo', async () => {
        const newTodo = { text: 'New Todo', isComplete: false };
        const response = await request(app).post('/todos').send(newTodo);
        expect(response.statusCode).toBe(201);
        expect(response.text).toBe('Todo created');
    });

    // Testen der Fehlerausgabe beim Erstellen eines neuen Todos mit leerem Textfeld
    it('should return 400 if todo text is empty when creating a new todo', async () => {
        const newTodo = { text: '', isComplete: false };
        const response = await request(app).post('/todos').send(newTodo);
        expect(response.statusCode).toBe(400);
        expect(response.text).toBe('{\"error\":\"Todo text cannot be empty\"}');
    });

    // Testen des Aktualisieren eines Todos
    it('should update a todo', async () => {
        const updatedTodo = { text: 'Updated Todo', isComplete: true };
        const response = await request(app).put('/todos/1').send(updatedTodo);
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Todo updated');
    });

    // Testen des Löschens eines Todos
    it('should delete a todo', async () => {
        const response = await request(app).delete('/todos/1');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Todo deleted');
    });

    // Testen des Löschens eines nicht existierenden Todos
    it('should return 404 when deleting a non existent todo', async () => {
        const response = await request(app).delete('/todos/999');
        expect(response.statusCode).toBe(404);
        expect(response.text).toBe('{\"error\":\"Todo mit ID 999 nicht gefunden\"}');
    });

});

afterAll(async () => {
    if (server && typeof server.close === 'function') {
        server.close();
    }
});