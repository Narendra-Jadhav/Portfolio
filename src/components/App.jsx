import styled from '@emotion/styled';
import React from 'react'
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./images/bg.png");
  &::-webkit-scrollbar{
    display: none;
  }
`;

const App = () => {
  return (
    <Container>
      <Hero />
      <Projects />
      <Contact />
    </Container>
  )
}

export default App;