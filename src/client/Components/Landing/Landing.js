import React, { useContext } from "react";
import Header from "../Header/Header";
import Jumbotron from "./Jumbotron/Jumbotron";
import BackgroundImage from "./LandingCss";
import Modal from "../../UI/Modal/Modal";
import Information from "./Information/Information";
import AuthModal from "../Auth/AuthModal";
import Footer from "../Footer/Footer";
import { changeIsModalOpen } from "../../store/actions";
import { StoreContext } from "../../store/store";

function Landing() {
  const [state, dispatch] = useContext(StoreContext);
  const closeRegisterModal = () => {
    dispatch(changeIsModalOpen(false));
  };
  return (
    <React.Fragment>
      <BackgroundImage>
        <Header />
        <Jumbotron />
      </BackgroundImage>
      <Modal showModal={state.isModalOpen} onClose={closeRegisterModal}>
        <AuthModal onClose={closeRegisterModal} />
      </Modal>
      <Information />
      <Footer />
    </React.Fragment>
  );
}

export default Landing;
