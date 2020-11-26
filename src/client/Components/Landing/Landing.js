import { useContext, Fragment } from "react";
import { changeIsModalOpen } from "../../store/actions";
import { StoreContext } from "../../store/store";
import Header from "../Header/Header";
import Jumbotron from "./Jumbotron/Jumbotron";
import Modal from "../../UI/Modal/Modal";
import Information from "./Information/Information";
import AuthModal from "../Auth/AuthModal";
import Footer from "../Footer/Footer";
import * as S from "./Landing.styles";

function Landing() {
  const [state, dispatch] = useContext(StoreContext);
  const closeAuthModal = () => {
    dispatch(changeIsModalOpen(false));
  };
  return (
    <Fragment>
      <S.StyledBackground>
        <Header />
        <Jumbotron />
      </S.StyledBackground>
      <Modal showModal={state.isModalOpen} onClose={closeAuthModal}>
        <AuthModal onClose={closeAuthModal} />
      </Modal>
      <Information />
      <Footer />
    </Fragment>
  );
}

export default Landing;
