import React from 'react';



export default function Form(props){
        const {values, update, submit} = props

        const onChange = (evt) =>{
            const {name, value} = evt.target
            update(name,value);
        }
        const onSubmit = (event) =>{
            event.preventDefault()
            submit()
        }


    return(
        <div className ="container">
            <form onSubmit={onSubmit}>
                <label>Name:
                <input
                type='text'
                name='name'
                onChange={onChange}
                value={values.name}
                />
                </label>

                <label>Email:
                <input 
                type='email' 
                name='email' 
                onChange={onChange} 
                value={values.email}
                />
                </label>Role:
                <select name='role' value={values.role} onChange={onChange}>
                    <option value=''>-</option>
                    <option value='frontend'>frontend</option>
                    <option value='backend'>backend</option>
                    <option value='test'>test</option>
                </select>
                <button disabled={!values.name || !values.email || !values.role}>Submit</button>
            </form>
        </div>
    )
}
