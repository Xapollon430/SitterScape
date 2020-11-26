import { memo } from "react";
import { Link as RouterLink } from "react-router-dom";
import * as S from "./Jumbotron.styles";

const Jumbotron = memo(() => {
  return (
    <S.Section>
      <S.Title>
        You love your pets, <br /> so do we.
      </S.Title>
      <S.Paragraph>
        At Sit.com we provide the quality <br />
        caretakers to your beloved pets.
      </S.Paragraph>
      <RouterLink to="/search">
        <S.Button>Find a Sitter!</S.Button>
      </RouterLink>

      <S.Info>
        Are you looking for a pet sitting job?
        <S.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          Apply Now.
        </S.Link>
      </S.Info>
    </S.Section>
  );
});

export default Jumbotron;
