import React from 'react';
import { ContainerWrapperStyle, TitleStyle, TextStyle, ImageStyle, FormStyle, ButtonStyle, InputStyle } from './LoadingScreen.Styles';
import CardImage from '../../assets/images/darksurface-logo.svg';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const LoadingScreenComponent = () => {
    const [value, setValue] = useState();
    const [greenButton, setGreenButton] = useState();
    const navigate = useNavigate();
    const code = "code2022";


    const handleOnChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = () => {
        if (value === null) {
            console.log("Boş Geçilemez.");
        }
        else if (code === value) {
            console.log("Code Doğru.");
            setGreenButton("#00C572");

            setTimeout(() => {
                navigate("/home");
            }, 2000);
        }
        else {
            console.log("Code Doğru Değil.");
        }
    }


    return (
        <ContainerWrapperStyle>

            <ImageStyle src={CardImage} alt="" />

            <TitleStyle>droppin'soon!</TitleStyle>

            <TextStyle>
                Puettava katumuotitaide on pian taalla! Varaa paikkasi nyt, niin paaset ennakkoon erittain rajoitetun eran tuotteisiimme! Tulet rakastamaan Norrpuistoa!
            </TextStyle>

            <FormStyle>
                <InputStyle type="text" placeholder="subscribe our newsletter_" onChange={handleOnChange} />
                <ButtonStyle greenButton={greenButton} onClick={handleSubmit}>subscribe</ButtonStyle>
            </FormStyle>

        </ContainerWrapperStyle>

    )
}

export default LoadingScreenComponent