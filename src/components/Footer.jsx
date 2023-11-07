import React from 'react';
import styled from 'styled-components';
import PlayerControls from './PlayerControls';
import CurrentTrack from './CurrentTrack';

function Footer() {
  return (
    <Container>
      <CurrentTrack />
      <PlayerControls />
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background-color: black;
  color: white;
  height: 100%;
  width: 100%;
  /* border-top: 1px solid white; */
  display: grid;
    grid-template-columns: 1fr 2fr 1fr;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;
