import React, { useState, createContext, useContext } from 'react';

// Create Theme Context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light'); // Initial theme

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Page />
    </ThemeContext.Provider>
  );
}

function Page() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#000000' : '#ffffff',
        transition: 'background 0.3s ease-in-out, color 0.3s ease-in-out',
      }}
    >
      <h1>{theme === 'light' ? 'Light Mode 🌞' : 'Dark Mode 🌙'}</h1>
      <Toolbar />
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '5px',
          background: theme === 'light' ? '#000' : '#fff',
          color: theme === 'light' ? '#fff' : '#000',
          fontSize: '16px',
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

function Toolbar() {
  return <Button />;
}

function Button() {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      style={{
        marginTop: '10px',
        padding: '8px 15px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
        background: theme === 'light' ? '#f0f0f0' : '#555',
        color: theme === 'light' ? '#000' : '#fff',
        fontSize: '16px',
      }}
    >
      I'm a {theme} button
    </button>
  );
}

// Exporting the main component
const ContextAPI = () => {
  return <App />;
};

export default ContextAPI;
