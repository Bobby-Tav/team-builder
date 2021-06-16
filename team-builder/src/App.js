import React, {useState} from 'react';
import Form from './components/Form'
import Member from './components/member'


import './App.css';

const list=[{name:'dsfdaf', email:"afsdf", role:"dfsg"},
{name:'dsfdaf', email:"afsdf", role:"dfsg"},
{name:'dsfdaf', email:"afsdf", role:"dfsg"}]

const initialFormValues = {name:'', email:'', role:''}
export default function App() {
  //States
  const[teamMembers,setTeamMembers] = useState([])
  const[formValues,setFormValues] =useState(initialFormValues)
  
  //Function to Update and submit
  const updateForm = (name, value) =>{

    setFormValues({ ...formValues, [name]: value})
  }

  const submitForm = () =>{
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role, 

    }
    setTeamMembers([...teamMembers, newMember])
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <header className="App-header">
      
      {teamMembers.map((member, idx) => {
        return (
          <div key={idx}>
            {console.log(member)}
            <Member details={member} />
          </div>
        )
      })}
      <Form update={updateForm} submit={submitForm} values ={formValues} />

      </header>
    </div>
  );
}
