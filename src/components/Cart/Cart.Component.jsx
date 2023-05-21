import React from 'react'
import { ContainerWrapperStyle, TopDetailImageStyle, PageHeaderStyle, HeaderRowStyle, TitleWrapStyle, TitleStyle, NumberStyle, ExplanationStyle, RemovedWrapStyle, RemovedText, RemovedNubmerStyle, RemovedButton, BodyContainerStyle, CardListContainerStyle, CheckoutContainerStyle, CardStyle, ImageContainerStyle, RemoveIconStyle, ColorBadgeStyle, ColorCircleStyle, ProductImageStyle, PoductInfoStyle, NameStyle, PriceStyle, CheckoutHeaderStyle, CheckoutTitle, CheckoutNumberStyle, CheckoutPriceStyle, CheckoutButton, CheckoutFooterStyle, CheckoutPaymentMethods, CheckoutMethodImageStyle, CheckoutPaymentText } from "./Cart.Styles";
import TopDetailImage from '../../assets/images/top-detail.svg';
import VectorImage from '../../assets/images/vector.svg';
import ShopPayImage from '../../assets/images/shoppay.svg';
import GooglePayImage from '../../assets/images/googlepay.svg';
import PayPalImage from '../../assets/images/paypal.svg';
import { useState, useEffect } from "react";
import axios from "axios";

const CartComponent = () => {

    const [productList, setProductList] = useState([]);
    const [deletedProduct, setDeletedProduct] = useState([]);

    const getProductList = async () => {
        try {
            const response = await axios.get("http://localhost:3001/cartService");
            setProductList(response.data);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        getProductList();
    }, []);

    const handleRemove = (productItemId) => {
        const updatedItems = productList.filter((productItem) => productItem.id !== productItemId);
        setProductList(updatedItems);
        setDeletedProduct((prevDeletedProduct) => [...prevDeletedProduct, productItemId]);
        console.log("Silinen ürünler: " + (deletedProduct.length + 1));
    };

    const resetHandle = () => {
        getProductList();
        setDeletedProduct([]);
    };



    return (
        <ContainerWrapperStyle>
            <PageHeaderStyle>
                <TopDetailImageStyle src={TopDetailImage} />
                <HeaderRowStyle>
                    <TitleWrapStyle>
                        <TitleStyle>your cart <NumberStyle>(7)</NumberStyle></TitleStyle>
                        <ExplanationStyle>your little cutey shopping bag 🙃</ExplanationStyle>
                    </TitleWrapStyle>

                    {
                        deletedProduct.length > 0 ? <RemovedWrapStyle>
                            <RemovedText>
                                <RemovedNubmerStyle>{deletedProduct.length}</RemovedNubmerStyle>
                                Item Removed
                            </RemovedText>

                            <RemovedButton onClick={resetHandle}>Undo</RemovedButton>
                        </RemovedWrapStyle> : ""
                    }

                </HeaderRowStyle>
            </PageHeaderStyle>

            <BodyContainerStyle style={{
                backgroundImage: `url('${VectorImage}')`
            }}>
                <CardListContainerStyle>
                    {
                        productList?.map((productItem) => {
                            return <CardStyle key={productItem.id}>
                                <ImageContainerStyle>
                                    <RemoveIconStyle onClick={() => handleRemove(productItem.id)}>X</RemoveIconStyle>

                                    <ColorBadgeStyle backgroundMode={productItem.backgroundMode === "dark" ? "dark" : ""}>
                                        <ColorCircleStyle backgroundColor={productItem.colorValue}></ColorCircleStyle> {productItem.colorName}
                                    </ColorBadgeStyle>

                                    <ProductImageStyle src={require("../../assets/images/products/" + productItem.image)} />
                                </ImageContainerStyle>

                                <PoductInfoStyle>
                                    <NameStyle>{productItem.name} - {productItem.colorName} {productItem.size}</NameStyle>
                                    <PriceStyle>€{productItem.price.toFixed(2)}</PriceStyle>
                                </PoductInfoStyle>
                            </CardStyle>
                        })
                    }

                </CardListContainerStyle>

                <CheckoutContainerStyle>

                    <CheckoutHeaderStyle>
                        <CheckoutTitle>
                            <CheckoutNumberStyle>7</CheckoutNumberStyle> Item Total
                        </CheckoutTitle>
                        <CheckoutPriceStyle>€175,00</CheckoutPriceStyle>
                        <CheckoutButton>checkout</CheckoutButton>
                    </CheckoutHeaderStyle>

                    <CheckoutFooterStyle>
                        <CheckoutPaymentMethods>
                            <CheckoutMethodImageStyle src={ShopPayImage} />
                            <CheckoutMethodImageStyle src={GooglePayImage} />
                            <CheckoutMethodImageStyle src={PayPalImage} />
                        </CheckoutPaymentMethods>

                        <CheckoutPaymentText>Tax included and shipping calculated at checkout</CheckoutPaymentText>
                    </CheckoutFooterStyle>

                </CheckoutContainerStyle>
            </BodyContainerStyle>
        </ContainerWrapperStyle>
    )
}

export default CartComponent;