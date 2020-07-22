import styled from "styled-components";

export const FooterWrap = styled.footer`
  width: 100vw;
  background: rgb(64, 72, 79);
`;

export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 300px;
  justify-items: center;
  width: 60%;
  margin: 0 auto;
  padding: 15px 0px 60px 0px;
  grid-gap: 10px;
`;

export const Contact = styled.div``;

export const Menu = styled.div``;

export const RecentPosts = styled.div``;

export const NewsLetter = styled.div``;

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
  border: 1px solid black;
  width: 140px;
  height: 30px;
  outline: none;
`;

export const NewsLetterButton = styled.button`
  background: #28a55f;
  color: white;
  height: 35px;
  outline: none;
  border: none;
  cursor: pointer;
`;
