import React, { useState } from 'react';
import axios from 'axios';

function AddUser() {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    axios.post('https://jsonplaceholder.typicode.com/users', { name })
      .then(response => {
        console.log('User added:', response.data);
        setName(''); // Clear input
      })
      .catch(error => console.log('Error:', error));
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={handleSubmit}>Add User</button>
    </div>
  );
}

export default AddUser;