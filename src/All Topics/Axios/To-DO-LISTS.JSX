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




// How It Works:
// Fetching Todos:
// useEffect grabs 5 todos from the API when the app loads.
// setTodos updates the list, loading shows a message while fetching.
// Adding Todos:
// Type a task, click “Add.”
// axios.post sends it to the fake API, which echoes it back.
// The new todo is added to the top of the list.
// Display:
// Shows “Loading…” until data arrives, then lists the todos.
// Try it:

// Watch the initial todos load.
// Add a new one (e.g., “Buy milk”)—it appears at the top (fake API doesn’t save it, but it looks real!).
// Key Tips
// Async/Await: You can use async functions instead of .then:
// js
// Wrap
// Copy
// const fetchData = async () => {
//   const response = await axios.get('url');
//   setData(response.data);
// };
// Error Handling: Always use .catch or try/catch to handle failures.
// Base URL: Set axios.defaults.baseURL = 'https://api.example.com' for shorter calls.
// Params: Add query params like axios.get('/todos', { params: { limit: 5 } }).
// Surprising Detail: Interceptors!
// Axios lets you add “interceptors” to tweak every request or response (e.g., add a token to headers automatically). It’s like a filter for all your mail!