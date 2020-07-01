import styled from "styled-components";
import bgImage from "../../images/background.jpg";

let BackgroundImage = styled.div`
    min-width: 322px;
    background-image: url(${bgImage});
    height: 100vh;
    width: 100vw;
    background-position: center;
`;

export default BackgroundImage;
