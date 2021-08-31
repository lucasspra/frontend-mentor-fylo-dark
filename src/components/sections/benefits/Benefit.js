import styled from "styled-components";

const Image = styled.img`
  padding-top: 150px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 23px;
  color: white;
  text-align: center;
  padding: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  text-align: center;
  color: white;
  padding: 0 34px;
`;

export default function Benefit(props) {
  return (
    <article>
      <Image src={props.image} alt={props.altText} />
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </article>
  );
}
