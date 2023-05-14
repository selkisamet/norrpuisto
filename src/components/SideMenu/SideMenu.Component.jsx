import React from 'react';
import { ContainerWrapperStyle, ImageWrapperStyle, LogoImageStyle, LogoTypeImageStyle, MenuListWrapperStyle, LinkListItemStyle, NumberStyle, IconFlamaImageStyle, SocialMediaWrapperStyle, LinkSocialStyle } from "./SideMenu.Styles";
import LogoImage from '../../assets/images/darksurface-circle-logo-png.svg';
import LogoTypeImage from '../../assets/images/light-logotype-svg.svg';
import IconFlameImage from '../../assets/images/icons/flame.png';

const SideMenuComponent = () => {
    return (
        <ContainerWrapperStyle>
            <ImageWrapperStyle>
                <LogoImageStyle src={LogoImage} />
                <LogoTypeImageStyle src={LogoTypeImage} />
            </ImageWrapperStyle>

            <MenuListWrapperStyle>
                <LinkListItemStyle to="/home">Home</LinkListItemStyle>
                <LinkListItemStyle to="/cart">bag <NumberStyle>(7)</NumberStyle></LinkListItemStyle>
                <LinkListItemStyle>archive</LinkListItemStyle>
                <LinkListItemStyle>sizing</LinkListItemStyle>
                <LinkListItemStyle>contact</LinkListItemStyle>
                <LinkListItemStyle>NTFS <IconFlamaImageStyle src={IconFlameImage}></IconFlamaImageStyle></LinkListItemStyle>
            </MenuListWrapperStyle>

            <SocialMediaWrapperStyle>
                <LinkSocialStyle to="https://www.instagram.com/" target={"_blank"}><i className="icon-instagram"></i></LinkSocialStyle>
                <LinkSocialStyle to="https://twitter.com/" target={"_blank"}><i className="icon-twitter"></i></LinkSocialStyle>
            </SocialMediaWrapperStyle>
        </ContainerWrapperStyle>
    )
}

export default SideMenuComponent;