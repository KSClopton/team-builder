import React, {useState} from 'react';
import UserForm from './UserForm';
import CardMaker from './CardMaker';
import './App.css';
import styled from 'styled-components';

function App() {
  const [team, setTeam] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  
  function handleClick(e) {
    e.preventDefault();
    setTeam(team.concat({name, email, role}) ) 
    }
  return (
    <StyleMain>
      <h1>Team Builder</h1>
      <UserForm handleClick={handleClick} setName={setName} setEmail={setEmail} setRole={setRole}/>
      <CardMaker /*nmName={name} nmRole={role} nmEmail={email}/*/ team={team}/>
  
    </StyleMain>
  )
}
const StyleMain = styled.div`
  background: skyblue;


`
export default App;
