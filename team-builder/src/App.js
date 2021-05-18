import React, {useState} from 'react';
import Form from './components/Form'
import logo from './logo.svg';

import './App.css';

function App() {
  //States
  const[teamMember,setTeamMember] = useState('');

  return (
    <div className="App">
      <header className="App-header">
       <Form name={null} email={null} role={null}/>
       
       
       
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
