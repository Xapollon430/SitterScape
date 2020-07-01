import styled from "styled-components";

export const ModalWrap = styled.div`
	z-index: 100;
	position: fixed;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 60%;
	max-width: 400px;
	background: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	border-radius: 8px;
`;
