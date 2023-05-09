import React from 'react'
import HomeComponent from "../../components/Home/Home.Component"
import SideMenuComponent from "../../components/SideMenu/SideMenu.Component"
import LayoutComponent from "../../components/Template/Layout/Layout.Component"


const HomeRouter = () => {
    return (
        <LayoutComponent SideMenu={SideMenuComponent} Body={HomeComponent} />
    )
}

export default HomeRouter