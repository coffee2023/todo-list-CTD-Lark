import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>CTD Lark</h1>
      <div className="card">
        <ul>
          <li>Submit homework</li>
          <li>Fix bugs</li>
          <li>Learn about React</li>
        </ul>
      </div>
    </>
  );
}

export default App;
