import { useState, useMemo } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([{ text: 'Todo 1', completed: true }, { text: 'Todo 2', completed: false }]);

  const addTodo = () => {
    setTodos([...todos, { text: 'New Todo', completed: false }]);
  };

  const completedCount = useMemo(() => {
    return todos.reduce((count, todo) => count + (todo.completed ? 1 : 0), 0);
  }, [todos]);

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      <p>Completed Todos: {completedCount}</p>
      {/* List of todos could be added here */}
    </div>
  );
}