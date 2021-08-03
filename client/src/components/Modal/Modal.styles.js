import styled from "styled-components";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // can i * as icon? performance?
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ModalWrap = styled.div`
  z-index: 1002;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 400px;
  background: white;
  box-shadow: 0 2px 8px r gba(0, 0, 0, 0.26);
  border-radius: 8px;
  padding: 20px;

  @media (max-width: 800px) {
    width: 100vw;
    max-width: 100vw;
    max-height: 90%;
    overflow-y: scroll;
    box-sizing: border-box;

    overflow-y: scroll;
  }
`;

export const GrayBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 1001;
`;

export const ModalCancel = styled((props) => (
  <FontAwesomeIcon size="2x" icon={faTimes} {...props} />
))`
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
`;
