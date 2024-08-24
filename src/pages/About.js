import React from "react";
import styled, { keyframes } from "styled-components";
import profile2 from "../assets/about/nadine_and_cat.jpg";
import profile3 from "../assets/about/nadine_as_sage.jpg";
import profile1 from "../assets/brand/ai-photo.jpg";
import { useTheme } from "../components/ThemeProvider";
const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 52vw;
  margin: 0 auto;
  padding: 0;

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`;

const Header = styled.div`
  padding: 0;
  margin: 0 auto;
  display: block;
  width: 90%;

  h1 {
    font-size: 100px;
    font-family: "Urbanist", sans-serif;
    color: #86a8e7;
    padding: 0;
    margin-top: 1rem;
  }
  p {
    margin-top: -3vw;
    font-size: 30px;
  }

  @media only screen and (max-width: 600px) {
    margin: 0 0 5% 3%;
    align-items: center;
    text-align: start;
  }
`;
const Column = styled.div`
  flex: 1;
  padding: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 600px) {
    margin: 3px auto;
  }
`;

const ColumnInfo = styled.div`
  width: 20vw;
  height: auto;
  text-align: start;
  font-size: 18px;
  line-height: 1.7;
  padding: 3px;
  vertical-align: middle;
  margin: 20px 0 20px 0;

  @media only screen and (max-width: 600px) {
    width: 90%;
    margin: 10% 0 10% 0;
  }
`;

const glowAnimation = keyframes`
  0%, 100% {
    border-color: #d16ba5;
    box-shadow: 0 0 10px #d16ba5;
  }
  50% {
    border-color: #5ffbf1;
    box-shadow: 0 0 24px #5ffbf1;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 2px solid transparent;
  box-shadow: 0 0 10px transparent;
  animation: ${glowAnimation} 2s infinite;
  margin: 5px auto;

  @media only screen and (max-width: 600px) {
    display: block;
    margin: 0 auto;
  }
`;

const InfoContainer = styled.div`
  margin: 0px auto;
  padding: 6px;
`;

export default function About() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <AboutContainer>
        <Header>
          <h1>Hi there, I'm Nadine</h1>
          <p>
            <span style={{ fontFamily: "VT323, monospace", fontSize: "38px" }}>
              Pixel Perfectionist&nbsp;
            </span>
            & <em>Your Go-To UI/UX Alchemist</em>.
          </p>
        </Header>
        <Column>
          <InfoContainer>
            <ColumnInfo>
              Self-Taught Developer with 7+ Years of Crafting Websites and a
              Decade of Multicultural Experience—Passionate About Learning,
              Solving Problems, and Making the Web a Better Place, One Pixel at
              a Time!
              <br />
              <br />
              If it’s on the web, I’ve probably designed, developed, or debugged
              it!
            </ColumnInfo>
            <Image src={profile1} alt="Profile" style={{ marginTop: "50px" }} />
            <ColumnInfo>
              Throughout my journey, I've stayed passionately dedicated to web
              design and front-end development, keeping my skills sharp and
              fueling my dream to chart a future in this field. My story is a
              testament to growth, embracing the unexpected, and the unwavering
              commitment to the art of progress.
            </ColumnInfo>
          </InfoContainer>
        </Column>
        <Column>
          <InfoContainer>
            <Image src={profile2} alt="Profile" />
            <ColumnInfo>
              My unconventional journey—from Technical Support to Customer
              Insight Consultant, and finally to Executive Assistant—has shaped
              my work ethic and honed my skills. I’ve mastered communication,
              quality assurance, and the art of adapting to diverse
              environments. Now, I’m channeling all those experiences into
              crafting exceptional web designs and front-end solutions.
            </ColumnInfo>
            <Image
              src={profile3}
              alt="Work Experience"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            />
          </InfoContainer>
        </Column>
      </AboutContainer>
    </div>
  );
}
