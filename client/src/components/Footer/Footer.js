import { memo } from "react";
import * as S from "./Footer.styles";
import facebook from "../../images/icons8-facebook-64.png";
import instagram from "../../images/icons8-instagram-64.png";
import youtube from "../../images/icons8-play-button-64.png";
import pinterest from "../../images/icons8-pinterest-64.png";
import twitter from "../../images/icons8-twitter-64.png";

const Footer = memo(() => {
  return (
    <S.FooterWrap>
      <S.GridWrap>
        <S.Menu>
          <S.FooterTitle>MENU</S.FooterTitle>
          <S.FooterLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Home
          </S.FooterLink>
          <S.FooterLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Our Blog
          </S.FooterLink>
          <S.FooterLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Products
          </S.FooterLink>
          <S.FooterLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Sitters
          </S.FooterLink>
          <S.FooterLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            About
          </S.FooterLink>
          <S.FooterLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Careers
          </S.FooterLink>
        </S.Menu>
        <S.RecentPosts>
          <S.FooterTitle>RECENT POSTS</S.FooterTitle>
          <S.FooterLink href="/joke">
            Why Are Cats Better Than Dogs?
          </S.FooterLink>
          <S.FooterLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Best Dog Diets
          </S.FooterLink>
          <S.FooterLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Checklist Before Adoption
          </S.FooterLink>
        </S.RecentPosts>
        <S.Contact>
          <S.FooterTitle>CONTACT</S.FooterTitle>
          <S.FooterText>
            Street: 8380 Greensboro Drive <br />
            City: Mc Lean <br />
            State: Virginia <br />
            Zip Code: 22182 <br />
            Phone Number: 703-589-3760
          </S.FooterText>
        </S.Contact>
        <S.NewsLetter>
          <S.FooterTitle>NEWS LETTER</S.FooterTitle>
          <S.NewsLetterInput placeholder="Your email adress..."></S.NewsLetterInput>
          <S.NewsLetterButton>Subscribe</S.NewsLetterButton>
          <S.SocialMediaWrap>
            <S.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <S.SocialMediaImage src={facebook} />
            </S.Link>
            <S.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <S.SocialMediaImage src={instagram} />
            </S.Link>
            <S.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <S.SocialMediaImage src={youtube} />
            </S.Link>
            <S.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <S.SocialMediaImage src={pinterest} />
            </S.Link>
            <S.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <S.SocialMediaImage src={twitter} />
            </S.Link>
          </S.SocialMediaWrap>
        </S.NewsLetter>
      </S.GridWrap>
      <S.Copyright>© 2020 SitterScape. All Rights Reserved</S.Copyright>
    </S.FooterWrap>
  );
});

export default Footer;
