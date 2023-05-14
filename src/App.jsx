import { Outlet, Route, Routes } from "react-router-dom"
import { createGlobalStyle } from "styled-components";
import { Fragment } from "react";
import LoadingScreenRouter from "./routers/LoadingScreen/LoadingScreen.Router"
import HomeRouter from "./routers/Home/Home.Router";
import CartRouter from "./routers/Cart/Cart.Router";
import "./assets/css/icomoon-font-style.css";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />

      <Fragment>
        <Routes>
          <Route path="/" element={<LoadingScreenRouter />} />
          <Route path="/home" element={<HomeRouter />} />
          <Route path="/cart" element={<CartRouter />} />
        </Routes>
        <Outlet />
      </Fragment>

    </Fragment>
  )
}

export default App;

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 10px;
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;
  }

  body{
    font-size: 1.6rem;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

// const LayoutStyle = styled.div`
//   display: grid;
//   grid-template-columns: 21.2rem 1fr;
//   background-color: blue;
// `;

// const SideMenuStyle = styled.div`
//   background-color: red;
//   width: 100%;
//   height: 100vh;
// `;

// const BodyStyle = styled.div``;