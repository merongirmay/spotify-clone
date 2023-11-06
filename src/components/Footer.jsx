import React from 'react';
import styled from 'styled-components';
import PlayerControls from './PlayerControls';

function Footer() {
  return (
    <Container>
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
  border-top: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;
