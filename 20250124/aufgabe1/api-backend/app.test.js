const { test, mock } = require('node:test');
const assert = require('assert');
const request = require('supertest');
require('dotenv').config();

const connectToDatabaseMock = mock.method(require('./database'), "connectToDatabase", async () => { });
const listenMock = mock.method(require('express').application, "listen", async () => { });
const { app } = require('./app');

test("routes", async () => {
    const routes = [
        'GET /todos',
        'POST /todos',
        'PUT /todos/:id',
        'DELETE /todos/:id'
    ]
    app._router.stack.forEach((r) => {
        if (r.route && r.route.path) {
            const ret = `${Object.keys(r.route.methods).join(', ').toUpperCase()} ${r.route.path}`;
            assert.ok(routes.includes(ret), `Route ${ret} not found`);
        }
    });
});

test("GET /todos", async () => {
    const Todo = require('./database').Todo;
    const todoFindMock = mock.method(Todo, "find", async () => []);
    const response = await request(app).get('/todos');
    assert.strictEqual(response.status, 200);
    assert.ok(Array.isArray(response.body));
});

test("POST /todos", async () => {
    const Todo = require('./database').Todo;
    const todoSaveMock = mock.method(Todo.prototype, "save", async () => { });
    const response = await request(app).post('/todos').send({ text: "Test" });
    assert.strictEqual(response.status, 201);
});

test("PUT /todos/:id", async () => {
    const Todo = require('./database').Todo;
    const todoFindByIdAndUpdateMock = mock.method(Todo, "findByIdAndUpdate", async (id) => { return id });
    const response = await request(app).put('/todos/1').send({ text: "Test" });
    assert.strictEqual(response.status, 200);
});

test("DELETE /todos/:id", async () => {
    const Todo = require('./database').Todo;
    const todoFindByIdAndDeleteMock = mock.method(Todo, "findByIdAndDelete", async (id) => { return id });

    const response = await request(app).delete('/todos/1');
    assert.strictEqual(response.status, 200);
});

