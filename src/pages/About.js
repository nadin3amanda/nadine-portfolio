import React from "react";
import styled, { keyframes } from "styled-components";
import profile4 from "../assets/about/nadine-anime-girl.png";
import profile2 from "../assets/about/nadine_and_cat.jpg";
import profile3 from "../assets/about/nadine_as_sage.jpg";
import profile1 from "../assets/brand/ai-photo.jpg";
import { useTheme } from "../components/ThemeProvider";

const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  h1 {
    font-size: 100px;
    font-family: "Urbanist", sans-serif;
    color: #86a8e7;
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
  margin: 12px auto;
  padding: 6px;
`;

export default function About() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <AboutContainer>
        <Header>
          <h1>Hi! I'm Nadine.</h1>
          <p>
            A creative Front End Developer with a passion for learning and
            designing.
          </p>
        </Header>
        <Column>
          <InfoContainer>
            <ColumnInfo>
              I am self-taught developer with over 6 years of experience in
              building, designing, and maintaining websites, and a total work
              experience of over a decade in multicultural settings. Always
              passionate about learning something new and being able to provide
              solutions to problems.
            </ColumnInfo>
            <Image src={profile1} alt="Profile" style={{ marginTop: "50px" }} />
            <ColumnInfo>
              I have a very unconventional work background which I am grateful
              for because it contributed a lot to my work ethic. Commencing as
              Technical Support Representative, I learned the art of
              communication and adapting to a multicultural environment. As a
              Customer Insight Consultant, I mastered quality assurance and the
              strategic use of customer data. Progressing to an Executive
              Assistant, I engaged with prestigious brands, all while nurturing
              my skills in Web Design and Front-End Development.
            </ColumnInfo>
          </InfoContainer>
          <InfoContainer>
            <Image
              src={profile4}
              alt="Personal"
              style={{ marginTop: "50px", marginBottom: "50px" }}
            />
            <ColumnInfo>
              I am a mom of 2 humans and 4 felines. I'm as hooked on iced coffee
              as I am playing my video games. Given a bit more room, you'll find
              me lost in the pages of a good book. My podcast preferences? Let's
              just say I effortlessly pivot from personal growth to unraveling
              enigmatic crimes. As for my digital diet, it spans from skincare
              revelations to intergalactic dwelling revelations, because who
              doesn't love a good mystery, whether on Earth or beyond?
            </ColumnInfo>
          </InfoContainer>
        </Column>
        <Column>
          <InfoContainer>
            <Image src={profile2} alt="Profile" />
            <ColumnInfo>
              My skills that possibly be relevant for your projects are HTML/5,
              CSS/3, SCSS, Javascript, Typescript, Jquery, React, NextJS, Styled
              Components, Microsoft Visual Studio Code, Git, GitHub, Linux,
              Ubuntu, iTerm 2, WordPress, Elementor, Microsoft Office, Google
              Suite, Adobe Photoshop, Adobe Illustrator, Figma, Canva.
            </ColumnInfo>
            <Image
              src={profile3}
              alt="Work Experience"
              style={{ marginTop: "50px", marginBottom: "50px" }}
            />
            <ColumnInfo>
              Amidst this voyage, I maintained a steadfast dedication to my
              craft as a Web Designer and Front-End Developer, a pursuit that
              has kept my skills vibrant and nurtures a dream to make it a
              compass for my future path. May my humble journey stand as a
              testament to the power of growth, embracing the unexpected, and
              the unwavering dedication to the artistry of progress.
            </ColumnInfo>
          </InfoContainer>
        </Column>
      </AboutContainer>
    </div>
  );
}
