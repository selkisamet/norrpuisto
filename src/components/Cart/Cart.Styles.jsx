import styled from "styled-components";

export const ContainerWrapperStyle = styled.div`
    background-color: #2D3545;
`;

export const TopDetailImageStyle = styled.img`
    width: 100%;
    object-fit: contain;
`;

export const PageHeaderStyle = styled.div`
    background-color: #2D3545;
    position: sticky;
    top: 0;
    padding: 2.5rem 3.3rem;
    z-index: 1;
`;

export const TitleStyle = styled.div`
    color: #ffffff;
    font-size: 2.2rem;
    display: flex;
    gap: 1rem;
    margin-top: 4rem;
`;

export const NumberStyle = styled.div`
    color: #FF84A6;
`;

export const ExplanationStyle = styled.div`
    color: #B3B3B3;
    font-size: 1.2rem;
    margin-top: 0.2rem;
`;

export const BodyContainerStyle = styled.div`
    padding: 0 2rem 2rem 2rem;
    color: #ffffff;
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 26rem;
    gap: 2rem;
    position: relative;
    align-items: start;
    background-repeat: no-repeat;
    background-position: 125%;
    background-size: contain;
    background-attachment: fixed;
`;

export const CardListContainerStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(23.6rem, 1fr));
    gap: 3rem;
`;

export const CardStyle = styled.div`
    border-radius: 1rem;
`;

export const ImageContainerStyle = styled.div`
    position: relative;
`;

export const RemoveIconStyle = styled.div`
    background-color: red;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    background-color: transparent;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    transition: all 0.2s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;

    &:hover{
        color: #ffffff;
        background-color: #FF84A6;
    }
`;

export const ColorBadgeStyle = styled.div`
    padding: 0.8rem 1rem;
    border-radius: 5rem;
    font-size: 0.9rem;
    font-weight: 500;
    background-color: ${(props) => props.dark ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)"};
    color: ${(props) => props.dark ? "#ffffff" : "#000000"};
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
`;

export const ColorCircleStyle = styled.div`
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 50%;
    background-color: ${props => props.backgroundColor};
`;

export const ProductImageStyle = styled.img`
    width: 100%;
    display: block;
    border-radius: 1rem;
`;

export const PoductInfoStyle = styled.div`
    color: #ffffff;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const NameStyle = styled.div`
    font-size: 1.05rem;
    font-weight: 700;
`;

export const PriceStyle = styled.div`
    font-size: 9px;
    font-weight: 500;
`;

export const CheckoutContainerStyle = styled.div`
    position: sticky;
    top: 16.9rem;
    align-self: start;
    backdrop-filter: blur(0.3rem);
`;

export const CheckoutBorderImageStyle = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
`;

export const CheckoutHeaderStyle = styled.div`
    padding: 1.8rem;
`;

export const CheckoutTitle = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 1.6rem;
`;

export const CheckoutNumberStyle = styled.div`
    color: #FF84A6;
`;

export const CheckoutPriceStyle = styled.div`
    font-size: 3.2rem;
    font-weight: 700;
    margin-top: 0.5rem;
`;

export const CheckoutButton = styled.div`
    color: #000000;
    margin-top: 2rem;
    padding: 0.8rem;
    border-radius: 5rem;
    background-color: #ffffff;
    text-align: center;
    font-size: 1.2rem;
    cursor: pointer;
`;

export const CheckoutFooterStyle = styled.div``;

export const CheckoutPaymentMethods = styled.div`
display: flex;
gap: 1rem;
align-items: baseline;
justify-content: center;
margin-top: 1.5rem;
`;

export const CheckoutMethodImageStyle = styled.img``;


export const CheckoutPaymentText = styled.div`
margin-top: 0.9rem;
text-align: center;
font-size: 0.8rem;
`;