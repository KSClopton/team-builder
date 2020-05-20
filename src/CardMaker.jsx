import React from 'react';
import styled from 'styled-components';

function CardMaker(props) {
    const {team} = props
    return (
        <StyledCard className='card-container'>
            {team.map(member => (
            <div className='cardName'>
                <h2>{member.name}</h2> 
                <h2>{member.role}</h2>
                <h3 id='no-border'>{member.email}</h3>
            </div>
            ))}
        </StyledCard>
    )
}
const StyledCard = styled.div`
    
    .cardName {
        border: red lightgrey 1px;
        background: teal;
        margin: 5px;
        box-shadow: 2px 2px 2px 2px;
        display: flex;
        justify-content: space-evenly;

        h2{
            border-right: solid 2px grey;
            padding: 7%;
       
            font-size: .75rem;
        }
        h3{
            border-right: none;
            padding: 7%;
            font-size: .75rem;
        }
    }



`
export default CardMaker