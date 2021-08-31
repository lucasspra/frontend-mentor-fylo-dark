import styled from "styled-components";
import Testimonial from "./Testimonial";

import Profile1 from "../../../assets/profiles/profile-1.jpg";
import Profile2 from "../../../assets/profiles/profile-2.jpg";
import Profile3 from "../../../assets/profiles/profile-3.jpg";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Testimonials() {
  return (
    <Section>
      <Testimonial
        quote="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        image={Profile1}
        name="Satish Patel"
        occupation="Founder & CEO, Huddle"
      />

      <Testimonial
        quote="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        image={Profile2}
        name="Bruce McKenzie"
        occupation="Founder & CEO, Huddle"
      />

      <Testimonial
        quote="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        image={Profile3}
        name="Iva Boyd"
        occupation="Founder & CEO, Huddle"
      />
    </Section>
  );
}
