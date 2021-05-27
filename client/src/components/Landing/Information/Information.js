import { memo } from "react";
import * as S from "./Information.styles";

import profile from "../../../images/steps-profile.png";
import search from "../../../images/steps-profile.png";
import handshake from "../../../images/steps-profile.png";
import petsitter from "../../../images/petsitter.jpg";

const Information = memo(() => {
  return (
    <S.InformationWrapper>
      <S.Title>How We Make It All Work</S.Title>
      <S.StepWrapper>
        <S.Step>
          <S.StepImage src={profile} />
          <S.StepNumber>STEP 1</S.StepNumber>
          <S.StepTitle>Create a Sit Account and Get Comfortable</S.StepTitle>
          <S.StepParagraph>
            Create your SitterScape account whether you are a sitter or an
            owner. Fill your information for us to find a match.
          </S.StepParagraph>
        </S.Step>
        <S.Step>
          <S.StepImage src={search} />
          <S.StepNumber>STEP 2</S.StepNumber>
          <S.StepTitle>Sort for a Sitter Using Our Connections</S.StepTitle>
          <S.StepParagraph>
            Use SitterScape's directory to read reviews and filter for someone
            with your desired skills to take care of your pets.
          </S.StepParagraph>
        </S.Step>
        <S.Step>
          <S.StepImage src={handshake} />

          <S.StepNumber>STEP 3</S.StepNumber>
          <S.StepTitle>Meet the Qualified Sitters In Your Area</S.StepTitle>
          <S.StepParagraph>
            After picking out the perfect Sitter you can book and pay securely
            on our website. Then it is time for you to relax.
          </S.StepParagraph>
        </S.Step>
      </S.StepWrapper>

      <S.CustomerWrap>
        <S.CustomerImage src={petsitter} />
        <S.CustomerQuoteWrap>
          <S.GreenLine />
          <S.CustomerQuote>
            My sitter sent me pictures everytime she took Buddy for walks. It
            was so thoughtful and reassuring!
          </S.CustomerQuote>
          <S.CustomerName> - Abby H.</S.CustomerName>
        </S.CustomerQuoteWrap>
        <S.SitterName>
          <S.Strong>Audrey F. </S.Strong> in Vienna, VA
        </S.SitterName>
      </S.CustomerWrap>

      <S.InformationTitle>Who We Are</S.InformationTitle>

      <S.InformationParagraph>
        Are you looking for a pet sitter or pet sitting job? At SitterScape we
        have built a community that revolves around our love for pets.
        SitterScape makes it easier for everyone to connect other pet lovers for
        their services. We can find care for your pets when you can't take care
        of them.
      </S.InformationParagraph>
    </S.InformationWrapper>
  );
});

export default Information;
