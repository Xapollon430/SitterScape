import { Fragment, useState } from "react";
import * as S from "./Landing.styles";
import LandingHeader from "./Header/LandingHeader";
import Jumbotron from "./Jumbotron/Jumbotron";
import Information from "./Information/Information";
import Footer from "../Footer/Footer";
import UnderDevelopmentSnackbar from "../common/UnderDevelopmentSnackbar";

function Landing() {
  return (
    <Fragment>
      <S.StyledBackground>
        <LandingHeader />
        <Jumbotron />
      </S.StyledBackground>
      <Information />
      <Footer />
      <UnderDevelopmentSnackbar />
    </Fragment>
  );
}

export default Landing;
