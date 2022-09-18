import React from 'react';
import Button, { ButtonProps } from './components/button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => { alert("Hello") }}>Hello World</Button>
        <Button btnType='danger' size='lg'>Hello World</Button>
        <Button btnType='primary' size='sm'>Hello World</Button>
        <Button btnType='link' href='https://www.baidu.com' disabled>Hello World</Button>
        <Button btnType='link' href='https://www.baidu.com'>Hello World</Button>
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
