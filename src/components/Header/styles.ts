import styled from "styled-components"

export const Container = styled.header`
    background: var(--blue);


`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
 
        background: var(--blue-light);
        color: #fff;
        font-size: 1rem;
        padding: 0 2rem;
        border: none;
        font-weight: 600;
        border-radius: 0.25rem;
        height: 3rem;
        cursor: pointer;
        transition: ease all 0.3s;
        
        &:hover{
            transform: scale(1.2);
            filter: brightness(0.9);
        }

  
    }

    img{ width: 200px;}
`

