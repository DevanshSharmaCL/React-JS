import React, { useEffect, useState } from 'react';

const MultipleReturn = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Renamed from "Error" to "error"

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        setUsers(data);
        setIsLoading(false)
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>User Lists</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <a 
              href={user.html_url} 
              target="_blank" 
              rel="noopener noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultipleReturn;
            
