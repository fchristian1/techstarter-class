async function getTodos() {
    let response = await fetch("http://localhost:5000/todos");
    let todos = await response.json();
    console.log(todos);
    return todos;
}

async function deleteAll() {
    sendToServer("DELETE", "http://localhost:5000/todos", "all", {});
    init();
}

async function addTodo() {
    let name = HTMLnewTodoInput.value;
    sendToServer("POST", "http://localhost:5000/todos", "addTodo", { name });
    init();
}

async function sendToServer(method, url, action, data) {
    let response = await fetch(`${url}/${action}`, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    let result = await response.json();
    console.log(result);
}

async function renderTodos(todos) {
    HTMLTodoList.innerHTML = "";
    todos.forEach((todo) => {
        let todoItem = document.createElement("li");
        todoItem.textContent = todo.name;
        HTMLTodoList.appendChild(todoItem);
    });
}

async function init() {
    let todos = await getTodos();
    await renderTodos(todos);
}

init();
