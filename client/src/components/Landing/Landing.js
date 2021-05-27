import { Fragment } from "react";
import * as S from "./Landing.styles";
import LandingHeader from "./Header/LandingHeader";
import Jumbotron from "./Jumbotron/Jumbotron";
import Information from "./Information/Information";
import Footer from "../Footer/Footer";

function Landing() {
  return (
    <Fragment>
      <S.StyledBackground>
        <LandingHeader />
        <Jumbotron />
      </S.StyledBackground>
      <Information />
      <Footer />
    </Fragment>
  );
}

export default Landing;
