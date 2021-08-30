import styled from "styled-components";
import IntroIllustration from "../../assets/illustration-intro.png";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: hsl(218, 28%, 13%);
`;

const IntroImage = styled.img`
  max-width: 450px;
`;

const IntroTitle = styled.h2`
  max-width: 450px;
`;

export default function Intro() {
  return (
    <Section>
      <IntroImage src={IntroIllustration} alt="Collaboration illustration" />
      <h2> All your files in one secure location, accessible anywhere.</h2>
      <p></p>
      <button></button>
    </Section>
  );
}
