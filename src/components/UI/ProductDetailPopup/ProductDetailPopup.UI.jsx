import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ProductDetailOverlayStyle, ProductDetailPopupStyle, PopupImageContainerStyle, PopupImageStyle, PopupDetailStyle, ProductNameStyle, ProductFeaturesStyle, FeatureBadgeStyle, ProductTextStyle, ProductSizesStyle, SizeBadgeStyle, ProductImagesSliderStyle, ProductDetailImagesStyle, NavigationButtonsStyle, PreviousStyle, PreviousButtonStyle, PreviousTextStyle, NextStyle, NextButtonStyle, NextTextStyle, ClosePopupStyle } from "./ProductDetailPopup.Styles";

const ProductDetailPopup = ({ popupStatus,
    setPopupStatus,
    selectedProductDetail,
    handleNextProduct,
    handlePreviousProduct }) => {
    const [productDetail, setProductDetail] = useState({});
    const handleDragStart = (e) => e.preventDefault();



    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 3 },
    };

    useEffect(() => {
        setProductDetail(selectedProductDetail);
    }, [selectedProductDetail])

    return (
        <ProductDetailOverlayStyle popupShow={popupStatus === true ? "popupShow" : ""}>
            <ProductDetailPopupStyle popupShow={popupStatus === true ? "popupShow" : ""}>
                <ClosePopupStyle onClick={() => setPopupStatus(false)}>X</ClosePopupStyle>

                <PopupImageContainerStyle>
                    <PopupImageStyle src={productDetail.image ? require("../../../assets/images/products/" + productDetail.image) : ""} />
                </PopupImageContainerStyle>

                <PopupDetailStyle>
                    <ProductNameStyle>{productDetail.name}</ProductNameStyle>
                    <ProductFeaturesStyle>
                        <FeatureBadgeStyle>{productDetail.feature1}</FeatureBadgeStyle>
                        <FeatureBadgeStyle>{productDetail.feature2}</FeatureBadgeStyle>
                    </ProductFeaturesStyle>

                    <ProductTextStyle>
                        {productDetail.description}
                    </ProductTextStyle>

                    <ProductSizesStyle>
                        <SizeBadgeStyle selectedSize={productDetail.size === "S"}>S</SizeBadgeStyle>
                        <SizeBadgeStyle selectedSize={productDetail.size === "M"}>M</SizeBadgeStyle>
                        <SizeBadgeStyle selectedSize={productDetail.size === "L"}>L</SizeBadgeStyle>
                    </ProductSizesStyle>

                    <ProductImagesSliderStyle>
                        <AliceCarousel paddingRight={80} mouseTracking items={productDetail.otherImages?.map((item, index) => {
                            return <ProductDetailImagesStyle key={index} src={require("../../../assets/images/products/" + item)} onDragStart={handleDragStart} alt="resim" />
                        })} responsive={responsive} disableButtonsControls={true} disableDotsControls={true} keyboardNavigation={true} />
                    </ProductImagesSliderStyle>

                    <NavigationButtonsStyle>
                        <PreviousStyle>
                            <PreviousButtonStyle onClick={handlePreviousProduct}>Previous</PreviousButtonStyle>
                            <PreviousTextStyle>black Punahärö Futurista hoodie</PreviousTextStyle>
                        </PreviousStyle>

                        <NextStyle>
                            <NextButtonStyle onClick={handleNextProduct}>Next</NextButtonStyle>
                            <NextTextStyle>black Punahärö Futurista hoodie</NextTextStyle>
                        </NextStyle>
                    </NavigationButtonsStyle>

                </PopupDetailStyle>
            </ProductDetailPopupStyle>
        </ProductDetailOverlayStyle>
    )
}

export default ProductDetailPopup;