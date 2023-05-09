import React from 'react'
import LoadingScreenComponent from '../../components/LoadingScreen/LoadingScreen.Component';
import LayoutComponent from "../../components/Template/Layout/Layout.Component";

const LoadingScreenRouter = () => {
    return (
        <LayoutComponent Body={LoadingScreenComponent} />
    )
}

export default LoadingScreenRouter;