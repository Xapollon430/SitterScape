import { Fragment } from "react";
import * as S from "./Landing.styles";
import Header from "./Header/Header";
import Jumbotron from "./Jumbotron/Jumbotron";
import Information from "./Information/Information";
import Footer from "../Footer/Footer";

function Landing() {
  return (
    <Fragment>
      <S.StyledBackground>
        <Header from="/" />
        <Jumbotron />
      </S.StyledBackground>
      <Information />
      <Footer />
    </Fragment>
  );
}

export default Landing;
