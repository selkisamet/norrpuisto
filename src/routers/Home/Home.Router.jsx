import React from 'react'
import SideMenuComponent from "../../components/SideMenu/SideMenu.Component"
import HomeComponent from "../../components/Home/Home.Component"
import LayoutComponent from "../../components/Template/Layout/Layout.Component"


const HomeRouter = () => {
    return (
        <LayoutComponent SideMenu={SideMenuComponent} Body={HomeComponent} />
    )
}

export default HomeRouter