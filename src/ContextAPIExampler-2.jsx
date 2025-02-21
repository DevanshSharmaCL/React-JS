import { createContext, useContext } from 'react';

// Step 1: Create the context
const UserContext = createContext();

function App() {
  const user = 'Alice'; // The data to share

  return (
    // Step 2: Provide the data
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  return <Greeting />; // Nested component
}

function Greeting() {
  // Step 3: Consume the data
  const user = useContext(UserContext);

  return <p>Hello, {user}!</p>;
}

export default App;