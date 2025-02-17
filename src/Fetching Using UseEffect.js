import React, { useEffect, useState } from 'react';

const Fetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json()) // Fixed typo here
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <a 
              href={user.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
