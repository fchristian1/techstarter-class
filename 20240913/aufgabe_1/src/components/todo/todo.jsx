import { useState } from "react";

function Todo() {
    const [todos, setTodos] = useState([]);
    return (
        <>
            <div>
                <input type="text" name="newTodo" id="HTMLnewTodoInput" />
                <button
                    onClick={(e) => {
                        setTodos([...todos, HTMLnewTodoInput.value]);
                        HTMLnewTodoInput.value = "";
                    }}
                >
                    Erstellen
                </button>
            </div>
            <div className="text-left">
                {todos.map((todo, index) => (
                    <div key={index}>
                        <input type="checkbox" name="todo" id={`HTMLtodoCheckbox${index}`} />
                        <label htmlFor={`HTMLtodoCheckbox${index}`}>{todo}</label>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Todo;
