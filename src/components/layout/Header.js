import styled from "styled-components";
import Logo from "../../assets/logo.svg";

const HeaderBar = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

  font-family: "Raleway", sans-serif;
  color: white;
  background-color: hsl(218, 28%, 13%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  max-width: 100px;
  padding: 25px 10px;
`;

const Options = styled.ul`
  display: flex;
`;

const Option = styled.li`
  padding: 20px;
  font-size: 15px;
`;

export default function Header() {
  return (
    <HeaderBar>
      <h1>
        <a href="/">
          <LogoImg src={Logo} alt="Fylo" />
        </a>
      </h1>

      <Options>
        <Option>Features</Option>
        <Option>Team</Option>
        <Option>Sign In</Option>
      </Options>
    </HeaderBar>
  );
}
