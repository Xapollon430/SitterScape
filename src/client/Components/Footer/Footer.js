import React from "react";
import {
  FooterWrap,
  Menu,
  Contact,
  RecentPosts,
  NewsLetter,
  GridWrap,
} from "./FooterCss";

const Footer = () => {
  return (
    <FooterWrap>
      <GridWrap>
        <Contact>Contact</Contact>
        <Menu>Menu</Menu>
        <RecentPosts>Recent Posts</RecentPosts>
        <NewsLetter>News Letter</NewsLetter>
      </GridWrap>
    </FooterWrap>
  );
};

export default Footer;
