import styled from "styled-components";

export const InformationWrapper = styled.div`
  width: 100vw;
  min-width: 280px;
  margin: 50px auto 0px auto;
  display: grid;
  justify-items: center;
  background-color: FFFFF;
  @media (max-width: 340px) {
    margin: 50px 0px 0px 0px;
  }
`;

export const Title = styled.h1`
  color: rgb(100, 100, 105);
  font-size: 3rem;
  width: 100%;
  text-align: center;
  @media (max-width: 420px) {
    font-size: 1.7rem;
  }
  @media (min-width: 420px) and (max-width: 600px) {
    font-size: 2rem;
  }
  @media (min-width: 600px) and (max-width: 750px) {
    font-size: 2.5rem;
  }
`;

export const StepWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  margin: 50px 0px;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80%;
  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

export const Step = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
`;

export const StepNumber = styled.h3`
  color: #28a55f;
`;

export const StepImage = styled.img`
  @media (min-width: 950px) and (max-width: 1200px) {
    width: 200px;
  }
`;

export const StepTitle = styled.h2`
  margin: 0px;
  color: rgb(100, 100, 105);
  line-height: 1.5;
  text-align: center;
`;

export const StepParagraph = styled.p`
  color: rgb(100, 100, 105);
  font-size: 20px;

  @media (max-width: 950px) {
    width: 100%;
  }
  line-height: 1.5;
`;

export const CustomerWrap = styled.div`
  width: 60%;
  min-width: 280px;

  margin: 100px 0px 40px 0px;
  position: relative;
  @media (max-width: 1100px) {
    width: 100vw;
  }
`;

export const CustomerImage = styled.img`
  width: 100%;
  min-width: 280px;
`;

export const CustomerQuoteWrap = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: -50px;
  left: 50px;
  width: 370px;
  min-width: 280px;
  height: 220px;
  padding: 20px;
  background-color: white;
  border: 1px solid #e5e5e5;
  line-height: 2;
  border-radius: 5px;
  @media (max-width: 760px) {
    width: 100vw;
    height: 140px;
    left: 0px;
    top: -100px;
  }
  @media (min-width: 500px) and (max-width: 616px) {
    height: 120px;
    top: -100px;
  }
  @media (min-width: 400px) and (max-width: 500px) {
    height: 150px;
  }
  @media (max-width: 512px) {
    top: -120px;
  }
`;

export const CustomerQuote = styled.span`
  font-size: 22px;
  font-weight: 700;
  @media (min-width: 400px) and (max-width: 616px) {
    font-size: 18px;
  }
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

export const CustomerName = styled(CustomerQuote)`
  color: rgb(102, 114, 124);
`;

export const GreenLine = styled.div`
  width: 30px;
  height: 2px;
  background-color: #28a55f;
  margin-bottom: 10px;
`;

export const SitterName = styled.span`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 7px;
  position: absolute;
  bottom: 25px;
  right: 30px;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const Strong = styled.strong``;

export const InformationParagraph = styled.p`
  font-size: 1.2rem;
  color: rgb(100, 100, 105);
  margin: 5px 0px 100px 0px;
  width: 70%;
  text-align: center;
`;

export const Footer = styled.footer`
  height: 250px;
  width: 100vw;
  background: rgb(53, 58, 64);
`;

export const InformationTitle = styled.h1`
  color: rgb(100, 100, 105);
  font-size: 2rem;
`;
