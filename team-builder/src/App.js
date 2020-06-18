import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import { v4 as uuid } from 'uuid'

const teamMembersList = [
  {
    id: uuid(),
    name: "Karmen",
    email: "heykarmendurbin@gmail.com",
    role: "Web Developer",
  },
];

const dataValues = {
  name: "",
  email: "",
  role: "",

};


function App() {
  const [ teamMembers , setTeamMembers ] = useState(teamMembersList);
  const [formValues, setFormValues] = useState(dataValues);
  const onInputChange = evt => {
    const { name, value } = evt.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    const newName = {
      ...formValues,id:uuid()
      // id: uuid(), 
      // name: formValues.name.trim(),
      // email: formValues.email.trim(),
      // role: formValues.role,
    }
    setTeamMembers(oldName => [newName, ...oldName]) 
    
    setFormValues(dataValues)
  }

  return (
        <div> 
          <Form
            value={formValues}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
          />
          <div>
            {
              teamMembers.map(teamMember => {
                return ( 
                  <div>
                    <h1>{teamMember.name}</h1>
                    <p>{teamMember.email}</p>
                    <p>{teamMember.role}</p>
                  </div>
                      )
              })
            }
          </div>
        
        </div>
        );
          }
export default App;
