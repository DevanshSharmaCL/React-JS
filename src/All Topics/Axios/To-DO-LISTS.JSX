import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch todos on load
  useEffect(() => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => {
        setTodos(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching todos:', error);
        setLoading(false);
      });
  }, []);

  // Add a new todo
  const handleAdd = () => {
    if (!newTodo) return;
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: newTodo,
      completed: false,
    })
      .then(response => {
        setTodos([response.data, ...todos]); // Add to top
        setNewTodo(''); // Clear input
      })
      .catch(error => console.log('Error adding todo:', error));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Todos</h2>
      <div>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New todo"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoApp;