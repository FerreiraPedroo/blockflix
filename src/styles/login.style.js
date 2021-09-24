
import styled from "styled-components";

export const ContainerPage = styled.p`
    width: 100vw;
    height: 100vh;
    border: 1px solid red;
    background-image: url("../img/login-bg.jpg");
    background-repeat: no-repeat;
    background-size:auto;
`;

// CONTAINER //
export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;    
    background-color:rgba(0,0,80,0.7);
`;
export const ContainerRemember = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    color:silver;
`;

// BUTTON //
export const ButtonLogin = styled.button`
    width: 320px;
    height: 36px;
    margin: 28px 0px 8px 0px;
    user-select: none;

    font-size: 1.0rem;
    font-weight: 900;
    color: white;
    background-color: blue;
    border: 0px;
    border-radius: 4px;

    &:hover{
        cursor: pointer;        
        border: 2px solid silver;
    }
    &:active{
        font-size: 0.95rem;
    }
`;

// TEXTO //
export const TextLoginTitle = styled.p`
    color: rgba(0, 100, 255, 1);
    font-weight: 600;
    font-size: 3rem;
    padding: 24px;
`;
export const TextLoginEntrar = styled.p`
    color:white;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 28px;
`;
export const TextLoginError = styled.p`
    color: tomato;
    font-size: 16px;
    margin: 5px 0px 10px 0px;
`;
export const TextLoginRemember = styled.p`
    margin-left: 10px;
`;

// INPUT //
export const InputText = styled.input.attrs(props => ({
    type: "text"
}))`
    width: 320px;
    height: 36px;

    border:0px;
    border-radius: 4px;
    padding: 0px 8px;
`;
export const InputPassword = styled(InputText).attrs(props => ({
    type: "password"
}))`
`;
export const InputCheckbox = styled.input.attrs(props => ({
    type:"checkbox"
}))`
    width: 16px;
    height: 16px;
    margin: 10px 0px 10px 0px;
`;

// FORM //
export const Form = styled.form`
    display:flex;
    flex-direction:column;
    padding: 60px 50px 100px 50px;
    border-radius: 8px;
    background-color: rgba(0,0,0,0.5);
`;
