import React from 'react'
import { LayoutWrapperStyle, SideMenuWrapper, BodyWrapperStyle } from "./Layout.Styles";


const LayoutComponent = ({ SideMenu, Body, isActive }) => {
    return (
        // active = { selectedServices.length > 0 ? "active" : "" }
        <LayoutWrapperStyle displayGrid={SideMenu}>
            {
                SideMenu && <SideMenuWrapper>
                    <SideMenu />
                </SideMenuWrapper>
            }


            <BodyWrapperStyle>
                <Body />
            </BodyWrapperStyle>
        </LayoutWrapperStyle>
    )
}

export default LayoutComponent;