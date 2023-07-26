import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";

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
  width: 85%;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 90%;
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
  font-size: 60px;
  padding: 40px 0 40px 0;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
    padding: 15px 0 25px 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    font-size: 45px;
    padding: 30px 0 30px 0;
  }
`;

const ProjectTitle = styled.h2`
  color: white;
  font-size: 35px;
  display: inline;

  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    font-size: 30px;
  }
`;

const Link = styled(OpenInNew)`
  display: inline;
  margin-left: 15px;
  color: #b9b9b9;
  cursor: pointer;
  font-size: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const ProjectDescription = styled(Box)`
  color: #b9b9b9;
  font-size: 16px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    font-size: 15px;
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
            <Link
              onClick={() =>
                window.open(
                  "https://github.com/Narendra-Jadhav/ChatterBox",
                  "_blank"
                )
              }
            />
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
            <Link
              onClick={() =>
                window.open(
                  "https://github.com/Narendra-Jadhav/TaskMaster",
                  "_blank"
                )
              }
            />
            <ProjectDescription>
              TaskMaster is a sleek and powerful task management app built with
              Flutter. It seamlessly integrates with Firebase, utilizing
              Firestore for database storage and Authentication for secure user
              login.
            </ProjectDescription>
          </li>
          <li>
            <ProjectTitle>Weatherly</ProjectTitle>
            <Link
              onClick={() =>
                window.open(
                  "https://github.com/Narendra-Jadhav/Weatherly",
                  "_blank"
                )
              }
            />
            <ProjectDescription>
              An intuitive weather app developed with Flutter. It harnesses the
              power of the OpenWeatherMap API to deliver accurate and up-todate
              weather data. Stay informed about current conditions, forecasts,
              and make smarter weather-related decisions with Weatherly.
            </ProjectDescription>
          </li>
          <li>
            <ProjectTitle>Keeper</ProjectTitle>
            <Link
              onClick={() =>
                window.open(
                  "https://github.com/Narendra-Jadhav/keeper",
                  "_blank"
                )
              }
            />
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
