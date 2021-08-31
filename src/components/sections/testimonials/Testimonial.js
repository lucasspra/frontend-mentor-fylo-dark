import styled from "styled-components";

const Card = styled.article`
  background-color: hsl(219, 30%, 18%);
  margin: 15px 50px;
  border-radius: 5px;
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
`;

const Quote = styled.p`
  color: white;
  line-height: 1.8;
`;

const Person = styled.div`
  margin-top: 20px;
  display: flex;
`;

const Image = styled.img`
  border-radius: 50%;
  max-width: 40px;
`;

const PersonDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
`;

const Name = styled.p`
  color: white;
  font-weight: 700;
`;

const Occupation = styled.p`
  color: white;
  font-size: 11px;
`;

export default function Testimonial(props) {
  return (
    <Card>
      <Quote>{props.quote}</Quote>

      <Person>
        <Image src={props.image} alt={props.altText} />

        <PersonDetails>
          <Name>{props.name}</Name>
          <Occupation>{props.occupation}</Occupation>
        </PersonDetails>
      </Person>
    </Card>
  );
}
