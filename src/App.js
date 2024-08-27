import React from 'react';

function App() {
  const isSecure = window.location.protocol === 'https:';

  return (
    <div className="App">
      <header className="App-header">
        <h1>Certificate Validation Demo</h1>
        {isSecure ? (
          <p>The site is secure (using HTTPS).</p>
        ) : (
          <p>The site is not secure (using HTTP).</p>
        )}
      </header>
    </div>
  );
}

export default App;

