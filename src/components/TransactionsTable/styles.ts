import styled from "styled-components";
import { transparentize } from 'polished'

export const Container = styled.section`
    margin-top: 4rem;
 
 table {
    width: 100%;
    border-spacing: 0 0.5rem;
  
 
 }

tbody{
    transition: all ease 0.4s;
    &:hover {
        transform: scale(1.025);
        filter: brightness(1.1);
    }
      
}

th{
   
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;

    }

td{
   
    padding: 1rem 2rem;
    border: 0;
    background-color: var(--shape);
    color: var(--text-body);
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