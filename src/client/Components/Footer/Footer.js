import React from "react";
import {
  FooterWrap,
  Menu,
  Contact,
  RecentPosts,
  NewsLetter,
  GridWrap,
  FooterTitle,
  FooterText,
} from "./FooterCss";

const Footer = () => {
  return (
    <FooterWrap>
      <GridWrap>
        <Contact>
          <FooterTitle>CONTACT</FooterTitle>
          <FooterText>
            Street: 8380 Greensboro Drive <br />
            City: Mc Lean <br />
            State: Virginia <br />
            Zip Code: 22182 <br />
            Phone Number: 703-589-3760
          </FooterText>
        </Contact>
        <Menu>
          <FooterTitle>MENU</FooterTitle>
        </Menu>
        <RecentPosts>
          <FooterTitle>RECENT POSTS</FooterTitle>
        </RecentPosts>
        <NewsLetter>
          <FooterTitle>NEWS LETTER</FooterTitle>
        </NewsLetter>
      </GridWrap>
    </FooterWrap>
  );
};

export default Footer;
