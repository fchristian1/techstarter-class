import "./App.css";
import { useState } from "react";

class Todo {
    constructor(title, completed = false) {
        this.title = title;
        this.completed = completed;
        this.date = Date.now();
    }
    getName() {
        return this.title;
    }
    setName(name) {
        this.title = name;
    }
    isCompleted() {
        return this.completed;
    }
    setCompleted() {
        this.completed = !this.completed;
    }
    getDate() {
        return this.date;
    }
}

let todos = [new Todo("Learn React", false)];
export default function App() {
    return (
        <>
            <h1>Todo App</h1>
            <ToDoSite />
        </>
    );
}
function ToDoSite() {
    const [items, setItems] = useState(todos);
    const [selected, setSelected] = useState(null);
    const [filter, setFilter] = useState("-");
    return (
        <>
            <NewTodo items={items} setItems={setItems} />
            <div className="flex row w-100">
                <div className="border w-100">
                    <ToDoList setSelected={setSelected} items={items} setItems={setItems} filter={filter} setFilter={setFilter} />
                </div>
                {selected && (
                    <div className="border w-100">
                        <ToDoItem todo={selected} items={items} setItems={setItems} setTodo={setSelected} />
                    </div>
                )}
            </div>
        </>
    );
}
function ToDoList({ setItems, items, setSelected, filter, setFilter }) {
    {
        if (items.length === 0) {
            return <h4>No todos, create the first one</h4>;
        }
    }
    let filteredItems = items;
    if (filter === "+") {
        filteredItems = items.filter((item) => item.isCompleted() === true);
    } else if (filter === "-") {
        filteredItems = items.filter((item) => item.isCompleted() === false);
    }
    return (
        <>
            <table className="w-100">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>
                            Completet|
                            <ButtonFilter filter={filter} setFilter={setFilter} />
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredItems.map((todo, i) => {
                        return <ToDoListItem key={todo.getDate()} todo={todo} items={items} setItems={setItems} setSelected={setSelected} />;
                    })}
                </tbody>
            </table>
        </>
    );
}
function ButtonFilter({ filter, setFilter }) {
    if (filter == "all") {
        return <button onClick={() => setFilter("+")}>All</button>;
    }
    if (filter == "+") {
        return <button onClick={() => setFilter("-")}> + </button>;
    }
    if (filter == "-") {
        return <button onClick={() => setFilter("all")}> - </button>;
    }
}
function ToDoListItem({ todo, items, setItems, setSelected }) {
    return (
        <>
            <tr>
                <td>{todo.getName()}</td>
                <td className="center">
                    <input
                        checked={todo.isCompleted()}
                        onChange={() => {
                            todo.setCompleted();
                            setItems([...items]);
                        }}
                        type="checkbox"
                    />
                </td>
                <td className="center">
                    <button
                        onClick={() => {
                            setSelected(todo);
                        }}
                    >
                        Sel
                    </button>
                </td>
            </tr>
        </>
    );
}
function NewTodo({ setItems, items }) {
    const [name, setName] = useState("");
    return (
        <>
            <input placeholder="new ToDo Title..." value={name} onChange={(e) => setName(e.target.value)} type="text" />
            <button
                onClick={() => {
                    if (name.trim()) {
                        let newTodo = new Todo(name, false);
                        setItems([...items, newTodo]);
                        setName("");
                    }
                }}
            >
                Add
            </button>
        </>
    );
}
function ToDoItem({ todo, setTodo, items, setItems }) {
    {
        if (items.length === 0) {
            return <></>;
        }
        if (todo === null) {
            return <h1>Select a todo</h1>;
        }
    }
    return (
        <>
            <div className="card flex col">
                <div className="card-header border-bottom">
                    <input
                        type="text"
                        name="todotitle"
                        value={todo.getName()}
                        onChange={(e) => {
                            todo.setName(e.target.value);
                            setItems([...items]);
                        }}
                    />
                </div>
                <div className="card-body border-bottom">
                    <h3>Completed</h3>
                    <input
                        checked={todo.isCompleted()}
                        onChange={() => {
                            todo.setCompleted();
                            setItems([...items]);
                        }}
                        type="checkbox"
                    />
                </div>
                <div className="card-footer">
                    <button
                        onClick={() => {
                            setItems([...items]);
                            setTodo(null);
                        }}
                    >
                        Save
                    </button>
                    <button
                        onClick={() => {
                            setItems(items.filter((item) => item.getDate() !== todo.getDate()));
                            setTodo(null);
                        }}
                    >
                        Delete
                    </button>
                    <button onClick={() => setTodo(null)}>Close</button>
                </div>
            </div>
        </>
    );
}
