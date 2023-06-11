import React, { useState } from 'react';
// import { ContainerWrapperStyle } from "./Home.Styles";
import styled from "styled-components";
import GirlProduct from "../../assets/images/products/product-girl.png";

const HomeComponent = () => {
    const [rightWidth, setRightWidth] = useState(550);
    const [imageScale, setImageScale] = useState(1);
    const [imagePosition, setImagePosition] = useState(100);
    // const refRightCol = useRef(0);

    const calculateOpacity = () => {
        if (rightWidth <= 550) {
            return 0;
        } else if (rightWidth === 700) {
            return 1;
        } else {
            return (rightWidth - 550) / 700; // 200-700 arasındaki genişlik değerlerine göre lineer bir şekilde opacite hesaplanır
        }
    };

    const handleMouseMove = (e) => {
        const newWidth = window.innerWidth - e.clientX;

        if (newWidth < 200) {
            setRightWidth(200);
            setImageScale(1);
            setImagePosition(-61);
            return;
        }

        setRightWidth(newWidth);
        setImageScale(newWidth > 550 ? 1.1 : 1);
        setImagePosition(newWidth < 300 ? -61 : 100);

        console.log(newWidth);
    };

    const handleMouseUp = (e) => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);

        const newWidth = window.innerWidth - e.clientX;

        if (newWidth < 300) {
            setRightWidth(200);
            return;
        }

        if (newWidth > 800) {
            setRightWidth(2000);
            return;
        }
        else {
            setRightWidth(550);
            return;
        }


    };

    const handleMouseDown = () => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <ContainerWrapperStyle>
            <ColStyle >
                <ExpanderCircleWrapStyle onMouseDown={handleMouseDown}>
                    <ExpanderCircleStyle>&#10094; &#10095;</ExpanderCircleStyle>
                </ExpanderCircleWrapStyle>
            </ColStyle>
            <ExpandableStyle style={{ width: rightWidth }}>

                <ProductDetailsAndCodeStyle style={{ opacity: calculateOpacity() }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic officia adipisci quia recusandae sunt, rem repellat, commodi officiis, tenetur quod in ut id quam optio inventore velit at animi ipsa?
                </ProductDetailsAndCodeStyle>

                <ImageStyle src={GirlProduct} alt="" style={{ transform: `scale(${imageScale})`, right: imagePosition }} />
            </ExpandableStyle>
        </ContainerWrapperStyle >
    )
}

export default HomeComponent;

const ProductDetailsAndCodeStyle = styled.div`
    width: 500px;
    transition: all 0.2s ease;
    z-index: 1;
`;


const ContainerWrapperStyle = styled.div`
    height: 100vh;
    background-color: #2D3545;
    padding-left: 2rem;
    display: grid;
    grid-template-columns: 1fr auto;    
`;

const ColStyle = styled.div`
    flex: 1;
    border-right: 1px solid black;
    position: relative;
    z-index: 5;
    background-color: rgb(45, 53, 69);
`;

const ExpandableStyle = styled.div`
    background-color: #F7F6F6;
    max-width: 70vw;
    min-width: 20rem;
    display: flex;
    gap: 10px;
    overflow-x: hidden;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 5rem;
`;

const ExpanderCircleWrapStyle = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    position: absolute;
    bottom: 25%;
    right: -50px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
`;

const ImageStyle = styled.img`
    height: 80%;
    object-fit: contain;
    border-radius: 2rem;
    position: fixed;
    bottom: 0;
    transition: all 0.5s ease;
`;

const ExpanderCircleStyle = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #D6D6D6;
    cursor: grab;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 600;
    padding-bottom: 1px;
    position: relative;
    

    &:after{
        content: "";
        background-color: rgb(45, 53, 69);
        height: 100%;
        width: 0.15rem;
        position: absolute;
        top: 0;
    }
`;