import styled from "styled-components";

export const ProductDetailOverlayStyle = styled.div`
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
    padding: 0 4rem;
`;

export const ProductDetailPopupStyle = styled.div`
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
    gap: 2.6rem;
`;

export const PopupImageContainerStyle = styled.div``;

export const PopupImageStyle = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 2rem;
`;

export const PopupDetailStyle = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.4rem;
`;

export const ProductNameStyle = styled.div`
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: 500;
`;

export const ProductFeaturesStyle = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const FeatureBadgeStyle = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    height: 2.6rem;
    width: 12rem;
    border-radius: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
`;

export const ProductTextStyle = styled.div`
    color: #ffffff;
    font-size: 1rem;
    line-height: 1.4rem;
    letter-spacing: 0.08rem;
    font-weight: 400;
`;

export const ProductSizesStyle = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;

export const SizeBadgeStyle = styled.div`
  color: #B6B6B6;
  height: 2.5rem;
  width: 5.5rem;
  border-radius: 5rem;
  border: solid 0.1rem #B6B6B6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 800;
  color: ${(props) => props.selectedSize ? "#1F1B1B" : ""};
  background-color: ${(props) => props.selectedSize ? "#E2E2E2" : ""};
`;

export const ProductImagesSliderStyle = styled.div`
    height: 15rem;
    max-width: 500px;
    width: 100%;
    cursor: grab;
`;

export const ProductDetailImagesStyle = styled.img`
    width: 132px;
`;

export const NavigationButtonsStyle = styled.div`
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
`;

export const PreviousStyle = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.6rem;
`;

export const PreviousButtonStyle = styled.div`
    color: #ffffff;
    border: 0.1rem solid #FFFFFF;
    border-radius: 5rem;
    height: 2.4rem;
    width: 7.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PreviousTextStyle = styled.div`
    color: #ffffff;
`;

export const NextStyle = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: 0.6rem;
`;

export const NextButtonStyle = styled.div`
    color: #161F31;
    background-color: #FFFFFF;
    border: 0.1rem solid #FFFFFF;
    height: 2.4rem;
    width: 7.2rem;
    border-radius: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    cursor: pointer;
`;

export const NextTextStyle = styled.div`
    color: #ffffff;
`;

export const ClosePopupStyle = styled.div`
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