import React, { useContext } from 'react';
import { ContainerWrapperStyle } from "./Home.Styles";
import { CartContext } from "../../context/Cart.Context";

const HomeComponent = () => {
    const { addToCart } = useContext(CartContext);

    const urunBir = () => {
        addToCart({
            id: 1,
            name: "Punahärö Futurista White",
            colorName: "Blue",
            colorValue: "#25396C",
            backgroundMode: "light",
            size: "L",
            price: 25.00,
            image: "pexels-monstera-6311420.png"
        })
    }

    const urunIki = () => {
        addToCart({
            id: 2,
            name: "Punahärö Futurista White",
            colorName: "Blue",
            colorValue: "#25396C",
            backgroundMode: "light",
            size: "L",
            price: 50.00,
            image: "pexels-monstera-6311420.png"
        })
    }

    const urunUc = () => {
        addToCart({
            id: 3,
            name: "Punahärö Futurista White",
            colorName: "Blue",
            colorValue: "#25396C",
            backgroundMode: "light",
            size: "L",
            price: 75.00,
            image: "pexels-monstera-6311420.png"
        })
    }
    return (
        <ContainerWrapperStyle>
            <button onClick={() => urunBir()}>Ürün 1</button>
            <button onClick={() => urunIki()}>Ürün 2</button>
            <button onClick={() => urunUc()}>Ürün 3</button>
        </ContainerWrapperStyle>
    )
}

export default HomeComponent