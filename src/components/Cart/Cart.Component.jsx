import React, { Fragment, useContext, useEffect } from 'react'
import { ContainerWrapperStyle, TopDetailImageStyle, PageHeaderStyle, HeaderRowStyle, TitleWrapStyle, TitleStyle, NumberStyle, ExplanationStyle, RemovedWrapStyle, RemovedText, RemovedNubmerStyle, RemovedButton, BodyContainerStyle, CardListContainerStyle, CheckoutContainerStyle, CardStyle, ImageContainerStyle, CardWrapStyle, IncreaseDecreaseButtonsStyle, IncreaseButtonStyle, ProductCountStyle, DecreaseButtonStyle, RemoveIconStyle, ColorBadgeStyle, ColorCircleStyle, ProductImageStyle, PoductInfoStyle, NameStyle, PriceStyle, CheckoutHeaderStyle, CheckoutTitle, CheckoutNumberStyle, CheckoutPriceStyle, CheckoutButton, CheckoutFooterStyle, CheckoutPaymentMethods, CheckoutMethodImageStyle, CheckoutPaymentText } from "./Cart.Styles";
import TopDetailImage from '../../assets/images/top-detail.svg';
import VectorImage from '../../assets/images/vector.svg';
import ShopPayImage from '../../assets/images/shoppay.svg';
import GooglePayImage from '../../assets/images/googlepay.svg';
import PayPalImage from '../../assets/images/paypal.svg';
import { useState } from "react";
import { CartContext } from "../../context/Cart.Context";
import styled from "styled-components";

const CartComponent = () => {
    const { addToCart, cartItems, removeCart, deletedProducts, unDeleteCart, getTotalItemCount, getTotalPrice, cartDelete } = useContext(CartContext);
    const [productList, setProductList] = useState(cartItems);
    const [popupStatus, setPopupStatus] = useState(false);

    console.log(cartItems);

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

                                    <CardWrapStyle onClick={() => setPopupStatus(true)}>
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



            <ProductDetailOverlayStyle popupShow={popupStatus === true ? "popupShow" : ""}>
                <ProductDetailPopupStyle popupShow={popupStatus === true ? "popupShow" : ""}>
                    <ClosePopupStyle onClick={() => setPopupStatus(false)}>X</ClosePopupStyle>

                    <PopupImageContainerStyle>
                        <PopupImageStyle src={require("../../assets/images/products/pexels-monstera-6311420.png")} />
                    </PopupImageContainerStyle>

                    <PopupDetailStyle>
                        <ProductNameStyle>Punahärö Futurista White-Blue</ProductNameStyle>

                        <ProductFeaturesStyle>
                            <FeatureBadgeStyle>100% Embroidery</FeatureBadgeStyle>
                            <FeatureBadgeStyle>400gsm fabric</FeatureBadgeStyle>
                        </ProductFeaturesStyle>

                        <ProductTextStyle>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sapien quis mi convallis vulputate. Ut eget nisl posuere, viverra sapien id, dictum lectus. Nulla facilisi. Donec in elementum nisi. Integer urna felis, commodo eget tempor sed, viverra eu enim.
                        </ProductTextStyle>

                        <ProductSizesStyle>
                            <SizeBadgeStyle>S</SizeBadgeStyle>
                            <SizeBadgeStyle>M</SizeBadgeStyle>
                            <SizeBadgeStyle>L</SizeBadgeStyle>
                        </ProductSizesStyle>

                        <ProductImagesSliderStyle>
                            Resimler buraya gelecek.
                        </ProductImagesSliderStyle>

                        <NavigationButtonsStyle>
                            <PreviousStyle>
                                <PreviousButtonStyle>Previous</PreviousButtonStyle>
                                <PreviousTextStyle>black Punahärö Futurista hoodie</PreviousTextStyle>
                            </PreviousStyle>

                            <NextStyle>
                                <NextButtonStyle>Next</NextButtonStyle>
                                <NextTextStyle>black Punahärö Futurista hoodie</NextTextStyle>
                            </NextStyle>
                        </NavigationButtonsStyle>

                    </PopupDetailStyle>
                </ProductDetailPopupStyle>
            </ProductDetailOverlayStyle>


        </Fragment >
    )
}

export default CartComponent;

const ProductDetailOverlayStyle = styled.div`
    position: fixed;
    background: linear-gradient(0deg, rgba(8, 38, 97, 0.5), rgba(8, 38, 97, 0.5)), radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 10;
    backdrop-filter: blur(10px);
    opacity: ${(props) => props.popupShow ? "1" : "0"};
    visibility: ${(props) => props.popupShow ? "visible" : "hidden"};
    transition: all 0.2s ease;
`;

const ProductDetailPopupStyle = styled.div`
    background-color: #161F31;
    height: 60rem;
    max-width: 97.6rem;
    width: 100%;
    border-radius: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: relative;
    display: flex;
    padding: 3.6rem;
`;

const PopupImageContainerStyle = styled.div``;

const PopupImageStyle = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain ;
    border-radius: 2rem;
`;

const PopupDetailStyle = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
`;

const ProductNameStyle = styled.div``;

const ProductFeaturesStyle = styled.div``;

const FeatureBadgeStyle = styled.div``;

const ProductTextStyle = styled.div``;

const SizeBadgeStyle = styled.div``;

const ProductImagesSliderStyle = styled.div``;

const ProductSizesStyle = styled.div``;

const NavigationButtonsStyle = styled.div``;

const PreviousStyle = styled.div``;

const PreviousButtonStyle = styled.div``;

const PreviousTextStyle = styled.div``;

const NextStyle = styled.div``;

const NextButtonStyle = styled.div``;

const NextTextStyle = styled.div``;

const ClosePopupStyle = styled.div`
    color: #ffffff;
    position: absolute;
    top: 2rem;
    right: 2rem;
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    cursor: pointer;
    
    &:hover{
        background-color: #454C5A;
    }
`;