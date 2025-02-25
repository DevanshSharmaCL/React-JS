import React, { useState } from 'react';

// The HOC
function withAuth(WrappedComponent) {
  return function AuthComponent(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Pretend login state

    if (!isLoggedIn) {
      return (
        <div>
          <p>Please log in!</p>
          <button onClick={() => setIsLoggedIn(true)}>Log In</button>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}

// A protected component
function Dashboard() {
  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      <p>This is private stuff.</p>
    </div>
  );
}

// Enhance it
const ProtectedDashboard = withAuth(Dashboard);

// Use it
function App3() {
  return (
    <div>
      <h1>My App</h1>
      <ProtectedDashboard />
    </div>
  );
}

export default App3;