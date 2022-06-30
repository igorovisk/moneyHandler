import styled from "styled-components";
import { transparentize } from 'polished'

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    


   h1, h2, h3, h4, h5, h6{
   padding: 1rem 2rem;
   border: 0;
   background-color: var(--shape);
   
   border-radius: 0.25rem;

   &:first-child {
       color: var(--text-title);
   }

   &.deposit {
       color: var(--green);
   }
   
   &.withdraw {
       color: var(--red);
   }
}
`


export const TransactionTypeContainer = styled.div`
    width: 100%;
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 0.5rem;   
   
`

const colors = {
    green: '#33cc95',
    red: '#e52e4d'
}

interface TransactionActionButtonProps {
    activeColor: 'green' | 'red'
}

export const TransactionActionButton = styled.button<TransactionActionButtonProps>`

    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => transparentize(0.9, colors[props.activeColor]) 
   };
    
    border: 1px solid #d7d7d7;
    border-radius: 5px;
    color: var(--text-title);
   
    height: 4rem;
    gap: 1rem;       
    transition: all ease 0.4s;
    
    &:hover{
        border-color: var(--text-title);
    
    }
`




// EDIT MODAL


export const EditModalContainer = styled.form` 
display: flex;
flex-direction: column;

h2 {
    margin-bottom: 2rem;
    color: var(--text-title);
}

input{
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;  
    border: 1px solid #d7d7d7;
    border-radius: 5px;
    color: var(--text-body);
    background-color: #E7E9EE
}

.submit-button {
    background-color: var(--green);
    padding: 0.8rem;
    color: white;
    border: none;
}

.react-modal-close {
    width: 3rem;
    height: 4px;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    transition: filter 0.3s;

    &:hover{
        filter: brightness(0.5);
    }
}
`

export const EditTransactionTypeContainer = styled.div`
    width: 100%;
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 0.5rem;   
   
`
interface EditTransactionTypeButtonProps {
    isActive: boolean
    activeColor: 'green' | 'red'
}
const editButtonColors = {
    green: '#33cc95',
    red: '#e52e4d'
}
export const EditTransactionTypeButton = styled.button<EditTransactionTypeButtonProps>`

    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.isActive 
    ? transparentize(0.9, editButtonColors[props.activeColor]) 
    : 'transparent' 
    };
    border: 1px solid #d7d7d7;
    border-radius: 5px;
    color: var(--text-title);
   
    height: 4rem;
    gap: 1rem;       
    transition: all ease 0.4s;
    
    &:hover{
        border-color: var(--text-title);
    
    }



`
