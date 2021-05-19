import React from 'react';



export default function Form(props){
        const {values,update} = props;

const onChange= (evt) =>{
    const {name,value} = evt.target;
    update(name,value);
}

    return(
        <form ClassName='container'>
            <label>Name:
                <input type='text' name='name' value={values.name} onChange={onChange}></input>
            </label>
            <label>Email:
                <input type='email' name='email' value={values.email} onChange={onChange}></input>
            </label>
            <label>Role
                <select>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                </select>
            </label>
            <button>Submit</button>
        </form>
    )
}
