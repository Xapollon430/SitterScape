import React from "react";
import { Section, Title, Paragraph, Button, Info, Link } from "./JumbotronCss";
import { Link as RouterLink } from "react-router-dom";

const Jumbotron = React.memo(() => {
  return (
    <Section>
      <Title>
        You love your pets, <br /> so do we.
      </Title>
      <Paragraph>
        At Sit.com we provide the quality <br />
        caretakers to your beloved pets.
      </Paragraph>
      <RouterLink to="/search">
        <Button>Find a Sitter!</Button>
      </RouterLink>

      <Info>
        Are you looking for a pet sitting job?
        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          Apply Now.
        </Link>
      </Info>
    </Section>
  );
});

export default Jumbotron;
