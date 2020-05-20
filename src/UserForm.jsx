import React from 'react';


function UserForm(props) {
    const {setName, setEmail, setRole, setTeam, handleClick} = props

    return (
        <div>
            <h2>Add Team Member</h2>
            <form onSubmit ={handleClick}>
            <label htmlFor='fnameInput'>
               <input id='fnameInput' type='text' placeholder='Enter Name' name='fname' onChange={(event) => setName(event.target.value)}></input> 
            </label>
            <label htmlFor='emailInput'>
               <input htmlFor='emailInput' type='email' placeholder='Enter email' name='email' onChange={(event) => setEmail(event.target.value)}></input> 
            </label>
            <label htmlFor='roleSelect' onChange={(event) => setRole(event.target.value)}>
               <select id='roleSelect'>
                    <option value='Tank'>Tank</option>
                    <option value='Main DPS'>Main DPS</option>   
                    <option value='Back-up DPS'>Back-up DPS</option>   
                    <option value='Healer'>Healer</option>      
                </select> 
                <input type='Submit' onClick={handleClick}></input>
                
            </label>

            </form>
        </div>
    )
}
export default UserForm;