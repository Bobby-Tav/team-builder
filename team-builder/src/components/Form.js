import React from 'react';



export default function Form(props){
    const {name,email,role} = props

    return(
        <form ClassName='container'>
            <label>Name:
                <input type='text' name='name' value=''></input>
            </label>
            <label>Email:
                <input type='email' name='email' value=''></input>
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
