import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerWrapperStyle = styled.div`
    background-color: #2D3545;
    height: 100vh;
    border-right:  1px solid  rgb(255, 248, 241, 0.3);
    padding: 4rem 2rem 4rem 2rem;
    position: sticky;
    top: 0;
`;

export const ImageWrapperStyle = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
`;

export const LogoImageStyle = styled.img`
    height: 10.6rem;
    width: 10.6rem;
    border-radius: 50%;
`;

export const LogoTypeImageStyle = styled.img``;

export const MenuListWrapperStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 6.5rem;
`;

export const LinkListItemStyle = styled(Link)`
    color: #ffffff;
    padding: 0.68rem 2.2rem;
    border: 1px solid #4D4D4D;
    border-radius: 5rem;
    display: inline-flex;
    transition: all 0.2s ease;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 400;
    width: fit-content;
    text-decoration: none;
    &:hover{
        background-color: #3F495B;
    }
`;

export const NumberStyle = styled.div`
   color: #FF84A6;
   margin-left: 0.5rem;
`;

export const IconFlamaImageStyle = styled.img`
   /* padding-left: 1rem; */
   object-fit: contain;
   margin-left: 1rem;
`;

export const SocialMediaWrapperStyle = styled.div`
    display: flex;
    gap: 2.5rem;
    margin-top: 10rem;
    padding-left: 1rem;
`;

export const LinkSocialStyle = styled(Link)`
    text-decoration: none;
`;