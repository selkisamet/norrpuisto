import React from 'react';
import { ContainerWrapperStyle, ImageWrapperStyle, LogoImageStyle, LogoTypeImageStyle, MenuListWrapperStyle, ListItemStyle, NumberStyle, IconStyle, SocialMediaWrapperStyle } from "./SideMenu.Styles";
import LogoImage from '../../assets/images/darksurface-circle-logo-png.svg';
import LogoTypeImage from '../../assets/images/light-logotype-svg.svg';
import { Link } from "react-router-dom";

const SideMenuComponent = () => {
    return (
        <ContainerWrapperStyle>
            <ImageWrapperStyle>
                <LogoImageStyle src={LogoImage} />
                <LogoTypeImageStyle src={LogoTypeImage} />
            </ImageWrapperStyle>

            <MenuListWrapperStyle>
                <ListItemStyle>Home</ListItemStyle>
                <ListItemStyle>bag <NumberStyle>7</NumberStyle></ListItemStyle>
                <ListItemStyle>archive</ListItemStyle>
                <ListItemStyle>sizing</ListItemStyle>
                <ListItemStyle>contact</ListItemStyle>
                <ListItemStyle>NTFS <IconStyle></IconStyle></ListItemStyle>
            </MenuListWrapperStyle>

            <SocialMediaWrapperStyle></SocialMediaWrapperStyle>
        </ContainerWrapperStyle>
    )
}

export default SideMenuComponent;