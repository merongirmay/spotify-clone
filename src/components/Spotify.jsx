import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';

function Spotify() {
  return (
    <Container>
      <div className="spotify-body">
        <Sidebar />
        <div className="body">
          <Navbar />
          <div className="body-contents">
            <Body />
          </div>
        </div>
      </div>
      <div className="spotify-footer">
        <Footer />
      </div>
    </Container>
  );
}

export default Spotify;

const Container = styled.div`
max-width:100vw;
max-height:100vh;
overflow:hidden;
display: grid;
grid-template-rows :85vh 15vh;

.spotify-body {
  display:grid;
  grid-template-columns: 20vw 80vw;
  height:100%;
  width:100%;
  background-color:black;
  color:white;
  
}
.body {
  height:100%;
  width:100%;
  overflow:auto;
  background-color:black;
  color:white;
  border: 1px solid white

}`