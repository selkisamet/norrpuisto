import React, { useContext } from 'react';
import { ContainerWrapperStyle } from "./Home.Styles";
import { CartContext } from "../../context/Cart.Context";

const HomeComponent = () => {
    const { addToCart } = useContext(CartContext);

    const urunBir = () => {
        addToCart({
            id: 1,
            name: "Punahärö Futurista White",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sapien quis mi convallis vulputate. Ut eget nisl posuere, viverra sapien id, dictum lectus. Nulla facilisi. Donec in elementum nisi. Integer urna felis, commodo eget tempor sed, viverra eu enim.",
            feature1: "100% Embroidery",
            feature2: "400gsm fabric",
            colorName: "Blue",
            colorValue: "#25396C",
            backgroundMode: "light",
            size: "L",
            price: 25.00,
            image: "pexels-monstera-6311420.png",
            otherImages: ["product-detail-1.png", "product-detail-2.png", "product-detail-1.png", "product-detail-2.png", "product-detail-1.png"]
        })
    }

    const urunIki = () => {
        addToCart({
            id: 2,
            name: "Futurista Punahärö White",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sapien quis mi convallis vulputate. Ut eget nisl posuere, viverra sapien id, dictum lectus. Nulla facilisi. Donec in elementum nisi. Integer urna felis, commodo eget tempor sed, viverra eu enim.",
            feature1: "100% Embroidery",
            feature2: "400gsm fabric",
            colorName: "Blue",
            colorValue: "#25396C",
            backgroundMode: "light",
            size: "M",
            price: 50.00,
            image: "pexels-monstera-6311424.png",
            otherImages: ["product-detail-3.png", "product-detail-4.png"]
        })
    }

    const urunUc = () => {
        addToCart({
            id: 3,
            name: "White Punahärö Futurista",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sapien quis mi convallis vulputate. Ut eget nisl posuere, viverra sapien id, dictum lectus. Nulla facilisi. Donec in elementum nisi. Integer urna felis, commodo eget tempor sed, viverra eu enim.",
            feature1: "100% Embroidery",
            feature2: "400gsm fabric",
            colorName: "Blue",
            colorValue: "#25396C",
            backgroundMode: "light",
            size: "S",
            price: 75.00,
            image: "pexels-monstera-6311423.png",
            otherImages: ["product-detail-1.png", "product-detail-2.png", "product-detail-1.png"]
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