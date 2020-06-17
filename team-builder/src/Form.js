import React from 'react';


function Form (props) {
    
    const { 
        values,  
        onInputChange, 
        onSubmit, 
    } = props
    
    console.log(values)
    return(
   
        <Form onSubmit={onSubmit}>
            <div>
                <h1>Team Members</h1>
                <button>SUBMIT</button>
            </div>
            <label>
                Name:
                <input
                    type ='text'
                    name='name'
                    value={values.name}
                    onChange={onInputChange}
                />
            </label>
            <label htmlFor='emailInput'>Email:&nbsp;>
                <input htmlFor='emailInput'
                    type ='email'
                    name='email'
                    value={values.email}
                    onChange={onInputChange}
                />
            </label>
            <label>Role:&nbsp;
                <select
                    name='role'
                    value={values.role}
                    onChange={onInputChange}
                >
                    <option value=''>-- Select a Role --</option>
                    <option value='Backend Engineer'>Backend Engineer</option>
                    <option value='Frontend Engineer'>Frontend Engineer</option>
                    <option value='Web Design'>Web Design</option>
                </select>
            </label>
        </Form>    
    )
}

export default Form;
