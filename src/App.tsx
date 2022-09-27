import React from 'react';
import Button, { ButtonProps } from './components/button/button';
import Alert, { AlertProps } from './components/alert/alert';
import Menu from './components/menu/menu';
import MenuItem from './components/menu/menuItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => { alert("test") }}>Hello World</Button>
        <Alert
          onClose={function noRefCheck() { }}
          title="this is alert!"
          type='danger'
          closable={true}
        />
        <Menu mode={'vertical'} defaultIndex={'0'} onSelect={(index) => { alert(index) }}>
          <MenuItem index={'0'}>cool link1</MenuItem>
          <MenuItem index={'1'}>cool link2</MenuItem>
          <MenuItem index={'2'}>cool link3</MenuItem>
        </Menu>
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
