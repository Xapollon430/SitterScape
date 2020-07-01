import React from "react";
import {
    InformationWrapper,
    Title,
    InformationParagraph,
    StepWrapper,
    Step,
    StepTitle,
    StepImage,
    StepNumber,
    StepParagraph,
    CustomerWrap,
    CustomerImage,
    CustomerQuoteWrap,
    CustomerQuote,
    CustomerName,
    GreenLine,
    SitterName,
    Footer,
    SocialMediaImage,
    SocialMediaWrapper,
    FooterDivider,
} from "./InformationCss";
import handshake from "../../../images/steps-handshake.png";
import profile from "../../../images/steps-profile.png";
import search from "../../../images/steps-search.png";
import customerImage from "../../../images/petsitter.jpg";

const Information = React.memo(() => {
    return (
        <InformationWrapper>
            <Title>How We Make It All Work</Title>
            <StepWrapper>
                <Step>
                    <StepImage src={profile} />
                    <StepNumber>STEP 1</StepNumber>
                    <StepTitle>
                        Create a Sit Account and Get Comfortable
                    </StepTitle>
                    <StepParagraph>
                        Start your Sit account whether you are a Sitter or an
                        Owner. Fill your information for us to find a good match
                        for you.
                    </StepParagraph>
                </Step>
                <Step>
                    <StepImage src={search} />
                    <StepNumber>STEP 2</StepNumber>
                    <StepTitle>
                        Sort for a Sitter Using Our Connections
                    </StepTitle>
                    <StepParagraph>
                        Use our directory to read reviews and filter for someone
                        with your desired skills to take care of your pet.
                    </StepParagraph>
                </Step>
                <Step>
                    <StepImage src={handshake} />
                    <StepNumber>STEP 3</StepNumber>
                    <StepTitle>
                        Meet the Most Qualified Sitters In Your Area
                    </StepTitle>
                    <StepParagraph>
                        After picking out the perfect Sitter you can book and
                        pay securely on our website. Then it is time for you to
                        relax.
                    </StepParagraph>
                </Step>
            </StepWrapper>

            <CustomerWrap>
                <CustomerImage src={customerImage} />
                <CustomerQuoteWrap>
                    <GreenLine />
                    <CustomerQuote>
                        My sitter sent me pictures everytime she took Buddy for
                        walks. It was so thoughtful and reassuring!
                    </CustomerQuote>
                    <CustomerName> - Abby H.</CustomerName>
                </CustomerQuoteWrap>
                <SitterName>
                    <strong>Audrey F. </strong> in Vienna, VA
                </SitterName>
            </CustomerWrap>

            <Title>Who We Are</Title>

            <InformationParagraph>
                Are you looking for a Pet sitter or Pet sitting job? At Sit we
                have built a community that revolves around our love for pets.
                Sit makes it easier for everyone to connect other pet lovers for
                their services. We can find care for your pets when you can't
                take care of them.
            </InformationParagraph>
            <Footer>
                <SocialMediaWrapper>
                    <img src="https://img.icons8.com/ios/30/ffffff/facebook-new.png" />{" "}
                    <img src="https://img.icons8.com/ios/30/ffffff/instagram-new.png" />{" "}
                    <img src="https://img.icons8.com/ios/30/ffffff/youtube-play.png" />{" "}
                    <img src="https://img.icons8.com/ios/30/ffffff/pinterest.png" />{" "}
                    <img src="https://img.icons8.com/ios/30/ffffff/linkedin.png" />{" "}
                    &copy; 2020 Sit. All rights reserved.
                </SocialMediaWrapper>
            </Footer>
        </InformationWrapper>
    );
});

export default Information;
