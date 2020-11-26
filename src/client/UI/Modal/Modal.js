import ReactDOM from "react-dom";
import { Fragment } from "react";
import * as S from "./Modal.styles";

const Backdrop = (props) => {
  const content = <S.GrayBackdrop onClick={props.onClose} />;
  return ReactDOM.createPortal(
    content,
    document.getElementById("backdrop-hook")
  );
};

const ModalOverlay = (props) => {
  const content = <S.ModalWrap>{props.children}</S.ModalWrap>;
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return props.showModal ? (
    <Fragment>
      <Backdrop onClose={props.onClose} />
      <ModalOverlay {...props} />
    </Fragment>
  ) : null;
};

export default Modal;
