import React, { Fragment, useContext, useEffect } from 'react'
import { ContainerWrapperStyle, TopDetailImageStyle, PageHeaderStyle, HeaderRowStyle, TitleWrapStyle, TitleStyle, NumberStyle, ExplanationStyle, RemovedWrapStyle, RemovedText, RemovedNubmerStyle, RemovedButton, BodyContainerStyle, CardListContainerStyle, CheckoutContainerStyle, CardStyle, ImageContainerStyle, CardWrapStyle, IncreaseDecreaseButtonsStyle, IncreaseButtonStyle, ProductCountStyle, DecreaseButtonStyle, RemoveIconStyle, ColorBadgeStyle, ColorCircleStyle, ProductImageStyle, PoductInfoStyle, NameStyle, PriceStyle, CheckoutHeaderStyle, CheckoutTitle, CheckoutNumberStyle, CheckoutPriceStyle, CheckoutButton, CheckoutFooterStyle, CheckoutPaymentMethods, CheckoutMethodImageStyle, CheckoutPaymentText } from "./Cart.Styles";
import TopDetailImage from '../../assets/images/top-detail.svg';
import VectorImage from '../../assets/images/vector.svg';
import ShopPayImage from '../../assets/images/shoppay.svg';
import GooglePayImage from '../../assets/images/googlepay.svg';
import PayPalImage from '../../assets/images/paypal.svg';
import { useState } from "react";
import { CartContext } from "../../context/Cart.Context";
import ProductDetailPopup from "../UI/ProductDetailPopup/ProductDetailPopup.UI";

const CartComponent = () => {
    const { addToCart, cartItems, removeCart, deletedProducts, unDeleteCart, getTotalItemCount, getTotalPrice, cartDelete } = useContext(CartContext);
    const [productList, setProductList] = useState(cartItems);
    const [popupStatus, setPopupStatus] = useState(false);
    const [selectedProductDetail, setSelectedProductDetail] = useState({});

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleIncrease = (productItem) => {
        addToCart(productItem)
    };

    const handleDecrease = (productItem) => {
        removeCart(productItem)
    };

    const handleRemove = (productItem) => {
        cartDelete(productItem);
    };

    const handleUnDelete = () => {
        unDeleteCart();
    };

    const handleProductDetail = (productItem) => {
        setSelectedProductDetail(productItem)
        setPopupStatus(true);
    }

    const handleNextProduct = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < productList.length) {
            handleProductDetail(productList[nextIndex]);
            setCurrentIndex(nextIndex);
        }
    };

    const handlePreviousProduct = () => {
        const previousIndex = currentIndex - 1;
        if (previousIndex >= 0) {
            handleProductDetail(productList[previousIndex]);
            setCurrentIndex(previousIndex);
        }
    };



    useEffect(() => {
        setProductList(cartItems);
    }, [cartItems])


    return (
        <Fragment>
            <ContainerWrapperStyle>
                <PageHeaderStyle>
                    <TopDetailImageStyle src={TopDetailImage} />
                    <HeaderRowStyle>
                        <TitleWrapStyle>
                            <TitleStyle>your cart <NumberStyle>({getTotalItemCount()})</NumberStyle></TitleStyle>
                            <ExplanationStyle>your little cutey shopping bag 🙃</ExplanationStyle>
                        </TitleWrapStyle>

                        {
                            deletedProducts.length > 0 ? <RemovedWrapStyle>
                                <RemovedText>
                                    <RemovedNubmerStyle>{deletedProducts.length}</RemovedNubmerStyle>
                                    Item Removed
                                </RemovedText>

                                <RemovedButton onClick={handleUnDelete}>Undo</RemovedButton>
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
                                return <CardStyle key={productItem.id} >
                                    <IncreaseDecreaseButtonsStyle>
                                        <DecreaseButtonStyle onClick={() => handleDecrease(productItem)}>-</DecreaseButtonStyle>
                                        <ProductCountStyle>{productItem.quantity}</ProductCountStyle>
                                        <IncreaseButtonStyle onClick={() => handleIncrease(productItem)}>+</IncreaseButtonStyle>
                                    </IncreaseDecreaseButtonsStyle>

                                    <RemoveIconStyle onClick={() => handleRemove(productItem)}>X</RemoveIconStyle>

                                    <CardWrapStyle onClick={() => handleProductDetail(productItem)}>
                                        <ImageContainerStyle>

                                            <ColorBadgeStyle backgroundMode={productItem.backgroundMode === "dark" ? "dark" : ""}>
                                                <ColorCircleStyle backgroundColor={productItem.colorValue}></ColorCircleStyle> {productItem.colorName}
                                                <p>{productItem.quantity}</p>
                                            </ColorBadgeStyle>

                                            <ProductImageStyle src={require("../../assets/images/products/" + productItem.image)} />
                                        </ImageContainerStyle>

                                        <PoductInfoStyle>
                                            <NameStyle>{productItem.name} - {productItem.colorName} {productItem.size}</NameStyle>
                                            <PriceStyle>€{productItem.price.toFixed(2)}</PriceStyle>
                                        </PoductInfoStyle>
                                    </CardWrapStyle>
                                </CardStyle>
                            })
                        }

                    </CardListContainerStyle>

                    <CheckoutContainerStyle>

                        <CheckoutHeaderStyle>
                            <CheckoutTitle>
                                <CheckoutNumberStyle>{getTotalItemCount()}</CheckoutNumberStyle> Item Total
                            </CheckoutTitle>
                            <CheckoutPriceStyle>€{getTotalPrice()}</CheckoutPriceStyle>
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



            <ProductDetailPopup popupStatus={popupStatus}
                setPopupStatus={setPopupStatus}
                selectedProductDetail={selectedProductDetail}
                handleNextProduct={handleNextProduct}
                handlePreviousProduct={handlePreviousProduct} />


        </Fragment >
    )
}

export default CartComponent;