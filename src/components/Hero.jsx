import React from "react";
import styled from "@emotion/styled";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box } from "@mui/material";
import Typed from 'typed.js';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 90px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  font-size: 30px;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const LinkedInIcon = styled(LinkedIn)`
  cursor: pointer;
  margin-right: 30px;
  font-size: 30px;
`;

const GitHubIcon = styled(GitHub)`
  cursor: pointer;
  font-size: 30px;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 600px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(30px);
    }
  }
`;

const Hero = () => {

    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ['Web Development', 'Machine Learning', 'Flutter', 'Coding!'],
        typeSpeed: 50,
    });

    return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
    };
    }, []);

  return (
    <Section>
      {/* <Navbar /> */}
      <Container>
        <Left>
          <Title>Narendra Jadhav</Title>

          <Subtitle>Tech Enthusiast & Learner</Subtitle>

          <Desc><span ref={el} /></Desc>
          <Box>
            <LinkedInIcon
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/narendra-jadhav-318444213/",
                  "_blank"
                )
              }
            />
            <GitHubIcon
              onClick={() =>
                window.open("https://github.com/Narendra-Jadhav", "_blank")
              }
            />
          </Box>
        </Left>
        <Right>
          <Img src="./images/coder.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
