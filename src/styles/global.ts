import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
 
        --red: #E52E4D;
        --blue: #5429CC;

        --blue-light: #6933FF;
        --green: #33cc95;

        --text-title: #363f5F;
        --text-body: #969cb3;

        --background: #F0F2F4;
        --shape: #FFFFFF;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        background: var(--background);
        -webkit-fomt-smoothing: antialiased;
    }

    //font-size padrão é 16px (desktop)

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    //REM = 1Rrem = font-size
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    .react-modal-overlay {
        background-color: rgb(0, 0, 0, 0.5);
        display: flex;
        
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        align-items: center;
        justify-content: center;
    }
    
    .react-modal-content {
        max-width: 576px;
        width: 100%;    
        background-color: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;       
        animation-delay: 2s;
        transition: all ease 10s;

  
    
    }

    .react-modal-content-animation {
        animation: fadeIn 1s;      
     
        @keyframes fadeIn {
            0% { opacity: 0;transform: scale(0.5) }      
            100% { opacity: 1; transform: scale(1)}
        }
  
    }


`


