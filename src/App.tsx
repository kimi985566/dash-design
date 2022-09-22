import React from 'react';
import Button, { ButtonProps } from './components/button/button';
import Alert, { AlertProps } from './components/alert/alert';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => { alert("test") }}>Hello World</Button>
        <Alert
          onClose={function noRefCheck() { }}
          title="this is alert!"
        />
        <code>
          const a = 'b'
        </code>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
