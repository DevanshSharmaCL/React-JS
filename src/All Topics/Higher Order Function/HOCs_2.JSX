import React from 'react';

// The HOC
function withData(WrappedComponent) {
  return function EnhancedComponent(props) {
    const data = { name: 'Alice', age: 25 };
    return <WrappedComponent {...props} data={data} />;
  };
}

// A simple component
function Profile({ data }) {
  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
    </div>
  );
}

// Enhance it
const ProfileWithData = withData(Profile);

// Use it
function App1() {
  return <ProfileWithData />;
}

export default App1;