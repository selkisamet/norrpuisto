import styled from "styled-components";

export const ContainerWrapper = styled.div`
    color: #ffffff;
    background-color: #2D3545;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

export const TitleStyle = styled.h1`
    font-size: 4rem;
`;
export const TextStyle = styled.p`
    font-weight: 300;
    max-width: 55%;
    text-align: center;
`;

export const ImageStyle = styled.img`
    max-width: 20rem;
    width: 100%;
`;

export const FormStyle = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
`;

export const InputStyle = styled.input`
    color: #ffffff;
    height: 4rem;
    width: 29rem;
    border-radius: 5rem;
    background-color: transparent;
    border: solid 1px #ffffff;
    padding-left: 2rem;

    &:focus{
        outline: none;
    }
`;

export const ButtonStyle = styled.button`
    height: 4rem;
    border-radius: 5rem;
    padding: 0 4rem;
    border: solid 0.1rem transparent;
    cursor: pointer;
    transition: all 0.2s ease;
    

    &:hover{
        color: #ffffff;
        background-color: #161F31;
        border: solid 0.1rem #ffffff;
    }
`;