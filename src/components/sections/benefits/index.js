import styled from "styled-components";
import Benefit from "./Benefit";

import AnywhereLogo from "../../../assets/icon-access-anywhere.svg";
import SecurityLogo from "../../../assets/icon-security.svg";
import CollaborationLogo from "../../../assets/icon-collaboration.svg";
import AnyFileLogo from "../../../assets/icon-any-file.svg";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Benefits() {
  return (
    <Section>
      <Benefit
        image={AnywhereLogo}
        alt="Computer and cellphone illustration"
        title="Access your files, anywhere"
        description="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
      />

      <Benefit
        image={SecurityLogo}
        alt="Shield illustration"
        title="Security you can trust"
        description="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
      />

      <Benefit
        image={CollaborationLogo}
        alt="Team and clock illustration"
        title="Real-time collaboration"
        description="  Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
      />

      <Benefit
        image={AnyFileLogo}
        alt="Folder and files illustration"
        title="Store any type of file"
        description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
      />
    </Section>
  );
}
