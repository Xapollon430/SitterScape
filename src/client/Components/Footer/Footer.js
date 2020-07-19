import React from "react";
import {
  FooterWrap,
  Menu,
  Contact,
  RecentPosts,
  NewsLetter,
  GridWrap,
  FooterTitle,
} from "./FooterCss";

const Footer = () => {
  return (
    <FooterWrap>
      <GridWrap>
        <Contact>
          <FooterTitle>CONTACT</FooterTitle>
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
