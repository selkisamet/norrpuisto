import React from 'react'
import { ContainerWrapperStyle, TopDetailImageStyle, PageHeaderStyle, TitleStyle, NumberStyle, ExplanationStyle, BodyContainerStyle, CardListContainerStyle, CheckoutContainerStyle, CardStyle, ImageContainerStyle, RemoveIconStyle, ColorBadgeStyle, ColorCircleStyle, ProductImageStyle, PoductInfoStyle, NameStyle, PriceStyle } from "./Cart.Styles";
import TopDetailImage from '../../assets/images/top-detail.svg';
import ProductImage from '../../assets/images/products/pexels-monstera-6311449.png';
import VectorImage from '../../assets/images/vector.svg';

const CartComponent = () => {
    return (
        <ContainerWrapperStyle>
            <PageHeaderStyle>
                <TopDetailImageStyle src={TopDetailImage} />

                <TitleStyle>your cart <NumberStyle>(7)</NumberStyle></TitleStyle>
                <ExplanationStyle>your little cutey shopping bag 🙃</ExplanationStyle>
            </PageHeaderStyle>

            <BodyContainerStyle style={{
                backgroundImage: `url('${VectorImage}')`
            }}>
                <CardListContainerStyle>
                    <CardStyle>
                        <ImageContainerStyle>
                            <RemoveIconStyle>X</RemoveIconStyle>

                            <ColorBadgeStyle>
                                <ColorCircleStyle backgroundColor="#25396C"></ColorCircleStyle> navy blue
                            </ColorBadgeStyle>

                            <ProductImageStyle src={ProductImage} />
                        </ImageContainerStyle>

                        <PoductInfoStyle>
                            <NameStyle>Punahärö Futurista White- Blue (L)</NameStyle>
                            <PriceStyle>€25.00</PriceStyle>
                        </PoductInfoStyle>
                    </CardStyle>

                    <CardStyle>
                        <ImageContainerStyle>
                            <RemoveIconStyle>X</RemoveIconStyle>

                            <ColorBadgeStyle dark>
                                <ColorCircleStyle backgroundColor="#ffffff"></ColorCircleStyle> color name
                            </ColorBadgeStyle>

                            <ProductImageStyle src={ProductImage} />
                        </ImageContainerStyle>

                        <PoductInfoStyle>
                            <NameStyle>Punahärö Futurista White- Blue (L)</NameStyle>
                            <PriceStyle>€25.00</PriceStyle>
                        </PoductInfoStyle>
                    </CardStyle>

                    <CardStyle>
                        <ImageContainerStyle>
                            <RemoveIconStyle>X</RemoveIconStyle>

                            <ColorBadgeStyle>
                                <ColorCircleStyle backgroundColor="#25396C"></ColorCircleStyle> navy blue
                            </ColorBadgeStyle>

                            <ProductImageStyle src={ProductImage} />
                        </ImageContainerStyle>

                        <PoductInfoStyle>
                            <NameStyle>Punahärö Futurista White- Blue (L)</NameStyle>
                            <PriceStyle>€25.00</PriceStyle>
                        </PoductInfoStyle>
                    </CardStyle>

                    <CardStyle>
                        <ImageContainerStyle>
                            <RemoveIconStyle>X</RemoveIconStyle>

                            <ColorBadgeStyle dark>
                                <ColorCircleStyle backgroundColor="#ffffff"></ColorCircleStyle> color name
                            </ColorBadgeStyle>

                            <ProductImageStyle src={ProductImage} />
                        </ImageContainerStyle>

                        <PoductInfoStyle>
                            <NameStyle>Punahärö Futurista White- Blue (L)</NameStyle>
                            <PriceStyle>€25.00</PriceStyle>
                        </PoductInfoStyle>
                    </CardStyle>

                    <CardStyle>
                        <ImageContainerStyle>
                            <RemoveIconStyle>X</RemoveIconStyle>

                            <ColorBadgeStyle>
                                <ColorCircleStyle backgroundColor="#25396C"></ColorCircleStyle> navy blue
                            </ColorBadgeStyle>

                            <ProductImageStyle src={ProductImage} />
                        </ImageContainerStyle>

                        <PoductInfoStyle>
                            <NameStyle>Punahärö Futurista White- Blue (L)</NameStyle>
                            <PriceStyle>€25.00</PriceStyle>
                        </PoductInfoStyle>
                    </CardStyle>

                    <CardStyle>
                        <ImageContainerStyle>
                            <RemoveIconStyle>X</RemoveIconStyle>

                            <ColorBadgeStyle dark>
                                <ColorCircleStyle backgroundColor="#ffffff"></ColorCircleStyle> color name
                            </ColorBadgeStyle>

                            <ProductImageStyle src={ProductImage} />
                        </ImageContainerStyle>

                        <PoductInfoStyle>
                            <NameStyle>Punahärö Futurista White- Blue (L)</NameStyle>
                            <PriceStyle>€25.00</PriceStyle>
                        </PoductInfoStyle>
                    </CardStyle>
                </CardListContainerStyle>

                <CheckoutContainerStyle>

                </CheckoutContainerStyle>
            </BodyContainerStyle>
        </ContainerWrapperStyle>
    )
}

export default CartComponent