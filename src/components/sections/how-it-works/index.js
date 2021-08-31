import styled from "styled-components";

import ProductiveIllustration from "../../../assets/illustration-stay-productive.png";
import ArrowIcon from "../../../assets/icon-arrow.svg";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(218, 28%, 13%);
  padding: 170px 0;
`;

const Image = styled.img`
  margin: 0 10px;
  max-width: 420px;
`;

const Title = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 23px;
  color: white;
  display: block;
  padding-top: 40px;
  padding-bottom: 20px;
`;

const Description = styled.p`
  color: white;
  font-size: 18px;
  line-height: 1.5;
  padding: 0px 30px 25px 30px;
`;

const Link = styled.div`
  display: flex;
  align-self: flex-start;
  border-bottom: solid hsl(176, 68%, 64%) 1px;
  padding-bottom: 8px;
  margin-left: 30px;
`;

const Text = styled.a`
  color: hsl(176, 68%, 64%);
  font-size: 16px;
`;

const Icon = styled.img`
  margin-left: 8px;
`;

export default function HowItWorks() {
  return (
    <Section>
      <Image
        src={ProductiveIllustration}
        alt="People collaborating with ideas illustration"
      />
      <Title>Stay productive, wherever you are</Title>

      <Description>
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
      </Description>
      <Description>
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
      </Description>

      <Link>
        <Text>See how Fylo works</Text>
        <Icon src={ArrowIcon} />
      </Link>
    </Section>
  );
}
