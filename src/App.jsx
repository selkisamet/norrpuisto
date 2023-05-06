import { Route, Routes } from "react-router-dom"
import LoadingScreenRouter from "./routers/LoadingScreen/LoadingScreen.Router"
import HomeComponent from "./components/Home/Home.Component"
import { createGlobalStyle } from "styled-components";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoadingScreenRouter />} />
        <Route path="/home" element={<HomeComponent />} />
      </Routes>
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
  }

  body{
    font-size: 1.6rem;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;