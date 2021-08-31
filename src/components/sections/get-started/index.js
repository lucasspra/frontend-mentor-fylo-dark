import styled from "styled-components";

const Card = styled.section`
  background-color: hsl(217, 28%, 15%);
  margin: 150px 25px 20px 25px;
  border-radius: 5px;
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.15) 3px 3px 2.6px;
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
  text-align: center;
`;

const Description = styled.p`
  color: white;
  font-size: 16px;
  line-height: 1.5;
  padding: 0px 20px 30px 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Email = styled.input`
  border-radius: 50px;
  border: 1px;
  padding: 20px 30px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 16px 20px;
  border-radius: 50px;
  border: none;
  background: linear-gradient(to right, hsl(176, 68%, 64%), hsl(198, 60%, 50%));
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

const onClickHandler = (event) => {
  event.preventDefault();
};

export default function GetStarted() {
  return (
    <Card>
      <Title>Get early access today</Title>
      <Description>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </Description>

      <Form>
        <Email type="email" placeholder="email@example.com" />
        <Button onClick={onClickHandler}>Get Started For Free</Button>
      </Form>
    </Card>
  );
}
