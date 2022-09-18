import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>Hello World</Button>
        <Button btnType={ButtonType.Link} href='https://www.baidu.com' disabled>Hello World</Button>
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
