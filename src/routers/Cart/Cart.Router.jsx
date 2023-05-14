import React from 'react';
import SideMenuComponent from "../../components/SideMenu/SideMenu.Component";
import CartComponent from "../../components/Cart/Cart.Component";
import LayoutComponent from "../../components/Template/Layout/Layout.Component";

const CartRouter = () => {
    return (
        <div>
            <LayoutComponent SideMenu={SideMenuComponent} Body={CartComponent} />
        </div>
    )
}

export default CartRouter;