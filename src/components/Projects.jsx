import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    width: 100%;
    flex-direction: column;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Projects = styled.h1`
  color: #da4ea2;
  font-size: 65px;
  padding: 30px 0 40px 0;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
    padding: 10px 0 25px 0;
  }
`;

const ProjectTitle = styled.h2`
  color: white;
  font-size: 40px;

  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

const ProjectDescription = styled(Box)`
  color: #b9b9b9;
  font-size: 18px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Works = () => {
  return (
    <Section>
      <Container>
        <Projects>Projects</Projects>
        <List>
          <li>
            <ProjectTitle>Chatterbox</ProjectTitle>
            <ProjectDescription>
              Chatterbox is a real-time messaging app powered by Node.js and
              Socket.IO, enabling users to engage in instant conversations with
              friends, family, or colleagues. It leverages the power of Node.js
              for server-side handling and Socket.IO for real-time
              communication, providing a seamless and interactive chat
              experience.
            </ProjectDescription>
          </li>
          <li>
            <ProjectTitle>TaskMaster</ProjectTitle>
            <ProjectDescription>
              TaskMaster is a sleek and powerful task management app built with
              Flutter. It seamlessly integrates with Firebase, utilizing
              Firestore for database storage and Authentication for secure user
              login.
            </ProjectDescription>
          </li>
          <li>
            <ProjectTitle>Weatherly</ProjectTitle>
            <ProjectDescription>
              An intuitive weather app developed with Flutter. It harnesses the
              power of the OpenWeatherMap API to deliver accurate and up-todate
              weather data. Stay informed about current conditions, forecasts,
              and make smarter weather-related decisions with Weatherly.
            </ProjectDescription>
          </li>
          <li>
            <ProjectTitle>Keeper</ProjectTitle>
            <ProjectDescription>
              Keeper is a note-taking app developed with ReactJS. It allows
              users to create notes by taking title and description.
            </ProjectDescription>
          </li>
        </List>
      </Container>
    </Section>
  );
};

export default Works;
