import React from "react";
import {
    Section,
    Title,
    Paragraph,
    Button,
    Footer,
    Link,
} from "./JumbotronCss";
import { Link as RouterLink } from "react-router-dom";

const Jumbotron = React.memo(() => {
    return (
        <Section>
            <Title>
                You love your pets, <br /> so do we.
            </Title>
            <Paragraph>
                At Sit.com we provide the most quality <br />
                caretakers to your beloved pets.
            </Paragraph>
            <RouterLink to="/search">
                <Button>Find a Sitter!</Button>
            </RouterLink>

            <Footer>
                Are you looking for a pet sitting job?
                <Link href="gugle">Apply Now.</Link>
            </Footer>
        </Section>
    );
});

export default Jumbotron;
