import styled from "styled-components";
import IntroIllustration from "../../assets/illustration-intro.png";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(218, 28%, 13%);
`;

const IntroImage = styled.img`
  max-width: 450px;
`;

const IntroTitle = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: white;
  text-align: center;
  max-width: 380px;
  padding: 30px;
`;

const IntroDescription = styled.p`
  font-size: 19px;
  color: white;
  text-align: center;
  padding: 0 36px 35px 36px;
  max-width: 400px;
`;

const IntroButton = styled.button`
  padding: 20px 120px;
  border-radius: 50px;
  border: none;
  background: linear-gradient(to right, hsl(176, 68%, 64%), hsl(198, 60%, 50%));
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

export default function Intro() {
  return (
    <Section>
      <IntroImage src={IntroIllustration} alt="Collaboration illustration" />

      <IntroTitle>
        All your files in one secure location, accessible anywhere.
      </IntroTitle>

      <IntroDescription>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends, family and
        co-workers.
      </IntroDescription>

      <IntroButton>Get Started</IntroButton>
    </Section>
  );
}
