import React, {useState} from 'react';
import Form from './components/Form'


import './App.css';

const initialFormValue = {name:'',email:'',role:'',}

function App() {
  //States
  const[teamMember,setTeamMember] = useState([]);
  const[formValues,setFormValues] =useState(initialFormValue);
  
  //Function to Update and submit
  const updateForm = (inputName, inputValue) => {

    setFormValues({...teamMember,[inputName]: inputValue})
  }

  return (
    <div className="App">
      <header className="App-header">
       <Form values={formValues} update={updateForm} />

      </header>
    </div>
  );
}

export default App;
