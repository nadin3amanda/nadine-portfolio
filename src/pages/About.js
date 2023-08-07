import React from "react";
import styled from "styled-components";
import profile1 from "../assets/about/nadine_and_cat.jpg";
import profile2 from "../assets/brand/ai-photo.jpg";
import profile3 from "../assets/about/nadine_as_sage.jpg";

const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LeftColumn = styled.div`
  flex: 1;
  padding: 20px;
`;

const RightColumn = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const Description = styled.div`
  font-size: 18px;
  line-height: 1.6;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

export default function About() {
  return (
    <AboutContainer>
      <LeftColumn>
        <Description>
          A creative Front End Developer with a passion for learning and
          designing.
        </Description>
      </LeftColumn>
      <RightColumn>
        <Image src={profile1} alt="Profile" />
      </RightColumn>
      <LeftColumn>
        <Image src={profile2} alt="Profile" />
      </LeftColumn>
      <RightColumn>
        <Description>
          In my free time, I enjoy photography and capturing beautiful moments
          with my camera.
        </Description>
      </RightColumn>
      <LeftColumn>
        <Description>
          I have 5 years of experience working as a web developer. I have worked
          on various projects and gained expertise in frontend technologies.
        </Description>
      </LeftColumn>
      <RightColumn>
        <Image src={profile3} alt="Work Experience" />
      </RightColumn>
    </AboutContainer>
  );
}
