import React from 'react';
import { ContainerWrapper, TitleStyle, TextStyle, ImageStyle, FormStyle, ButtonStyle, InputStyle } from './LoadingScreen.Styles';
import CardImage from '../../assets/images/darksurface-logo.svg';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const LoadingScreenComponent = () => {
    const [value, setValue] = useState();
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
            navigate("/home");
        }
        else {
            console.log("Code Doğru Değil.");
        }
    }

    return (
        <ContainerWrapper>

            <ImageStyle src={CardImage} alt="" />

            <TitleStyle>droppin'soon!</TitleStyle>

            <TextStyle>
                Puettava katumuotitaide on pian taalla! Varaa paikkasi nyt, niin paaset ennakkoon erittain rajoitetun eran tuotteisiimme! Tulet rakastamaan Norrpuistoa!
            </TextStyle>

            <FormStyle>
                <InputStyle type="text" placeholder="subscribe our newsletter_" onChange={handleOnChange} />
                <ButtonStyle onClick={handleSubmit}>subscribe</ButtonStyle>
            </FormStyle>

        </ContainerWrapper>

    )
}

export default LoadingScreenComponent