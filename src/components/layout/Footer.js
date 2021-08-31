import styled from "styled-components";

import Logo from "../../assets/logo.svg";
import LocationIcon from "../../assets/icon-location.svg";
import PhoneIcon from "../../assets/icon-phone.svg";
import EmailIcon from "../../assets/icon-email.svg";
import FacebookLogo from "../../assets/social-media/facebook.svg";
import InstagramLogo from "../../assets/social-media/instagram.svg";
import TwitterLogo from "../../assets/social-media/twitter.svg";

const FooterBar = styled.footer`
  margin-top: 100px;
  color: white;
  background-color: hsl(216, 53%, 9%);
  display: flex;
  flex-direction: column;
`;

const LogoImg = styled.img`
  max-width: 250px;
  padding: 50px 30px;
`;

const Contact = styled.address`
  display: flex;
  padding: 10px 20px;
`;

const ContactIcon = styled.img`
  transform: scale(1);
  display: inline-block;
  margin-right: 20px;
`;

const PagesLinks = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  padding: 0 30px;
  line-height: 2;
  font-size: 20px;
`;

const Link = styled.a`
  text-decoration: none;
`;

const SocialMedias = styled.div`
  padding: 60px 30px;
  display: flex;
  justify-content: center;
`;

const SocialMedia = styled.img`
  border: solid 1px white;
  border-radius: 50%;
  max-width: 35px;
  max-height: 35px;
  margin: 0 10px;
`;

export default function Footer() {
  return (
    <FooterBar>
      <LogoImg src={Logo} alt="Fylo logo" />

      <div>
        <Contact>
          <ContactIcon src={LocationIcon} alt="Pin icon" />
          <Link>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Link>
        </Contact>

        <Contact>
          <ContactIcon src={PhoneIcon} />
          <Link href="tel:+1-543-123-4567">+1-543-123-4567</Link>
        </Contact>

        <Contact>
          <ContactIcon src={EmailIcon} />
          <Link href="mailto:example@fylo.com">example@fylo.com</Link>
        </Contact>
      </div>

      <PagesLinks>
        <Link>About Us</Link>
        <Link>Jobs</Link>
        <Link>Press</Link>
        <Link>Blog</Link>
      </PagesLinks>

      <PagesLinks>
        <Link>Contact Us</Link>
        <Link>Terms</Link>
        <Link>Privacy</Link>
      </PagesLinks>

      <SocialMedias>
        <SocialMedia src={FacebookLogo} alt="Facebook logo" />
        <SocialMedia src={TwitterLogo} alt="Twitter logo" />
        <SocialMedia src={InstagramLogo} alt="Instagram logo" />
      </SocialMedias>
    </FooterBar>
  );
}
