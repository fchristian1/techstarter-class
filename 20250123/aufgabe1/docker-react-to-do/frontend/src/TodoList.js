import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_HOST = 'http://localhost';
const API_PORT = '5000';
const API_URL = `${API_HOST}:${API_PORT}/todos`;

function TodoList() {
  const [todos, setTodos] = useState([]);

  const [loading, setLoading] = useState(true);

  function fetchTodos() {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setTodos(data);
        setLoading(false);
      });
  }

  useEffect(() => {
    // Hier werden die Daten vom Server geladen
    fetchTodos();
    toast.success("Todos erfolgreich geladen 🚀!")
  }, []);


  function addTodo(todo) {
    if (!todo.text) {
      toast.warn("Leere Todos sind nicht erlaubt 🚫!")
      return;
    }

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create todo');
        }
        fetchTodos();

      });
  }

  function deleteTodo(todo) {
    fetch(`${API_URL}/${todo.id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete todo');
        }
        fetchTodos();
      });
    toast.success(`${todo.text} erfolgreich gelöscht 🗑️`)

  }

  function updateTodo(updatedTodo) {
    if (!updatedTodo.text) {
      toast.warn("Leere Todos können nicht aktualisiert werden 🚫!");
      return;
    }
    fetch(`${API_URL}/${updatedTodo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTodo)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update todo');
        }
        fetchTodos();
      })
      .catch(error => {

      });
  }

  return (
    <>
      {loading ? <h1>Loading</h1> : (
        <div className="todo-list">
          <h2>Add new Todo</h2>
          <TodoInput addTodo={addTodo} />
          <h2>Todo List</h2>
          <div className="todos">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={deleteTodo}
                onUpdate={updateTodo}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default TodoList;
