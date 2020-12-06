import styled from "styled-components";

export const FooterWrap = styled.footer`
  width: 100vw;
  min-width: 334px;
  background: rgb(64, 72, 79);
`;

export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 300px;
  justify-items: center;
  width: 60%;
  padding: 15px 30px 60px 15px;
  margin: 0 auto;

  grid-gap: 10px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    width: 80%;
  }
  @media (max-width: 560px) {
    grid-template-columns: 100px 250px;
    margin: 0;
  }
  @media (max-width: 442px) {
    grid-template-columns: 100px 200px;
    margin: 0;
  }
`;

export const Contact = styled.div`
  @media (max-width: 560px) {
    grid-column: 1 / span 2;
  }
`;

export const Menu = styled.div``;

export const RecentPosts = styled.div``;

export const NewsLetter = styled.div`
  @media (max-width: 560px) {
    grid-column: 1 / span 2;
  }
`;

export const FooterTitle = styled.h5`
  color: white;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

export const FooterText = styled.span`
  color: rgb(169, 169, 169);
`;

export const FooterLink = styled.a`
  color: rgb(169, 169, 169);
  display: block;
  margin-top: 5px;
`;

export const NewsLetterInput = styled.input`
  background: white;
  border: none;
  outline: none;
  width: 140px;
  height: 35px;
  padding: 0px 0px 0px 10px;
`;

export const NewsLetterButton = styled.button`
  background: #28a55f;
  color: white;
  height: 35px;
  outline: none;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

export const SocialMediaWrap = styled.div``;

export const SocialMediaImage = styled.img`
  width: 30px;
  margin: 5px 5px 0px 0px;
`;

export const Copyright = styled.p`
  color: white;
  text-align: center;
  padding-bottom: 10px;
  margin: 0px;
`;

export const Link = styled.a``;
