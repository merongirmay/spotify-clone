import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';

function Spotify() {
  return (
    <Container>
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      <SidebarContainer>
        <TopSidebar>
          Search/home
        </TopSidebar>
        <BottomSidebar>
          playlist/library
        </BottomSidebar>

      </SidebarContainer>
      <BodyContainer>
        <Body />
      </BodyContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
}

export default Spotify;

const Container = styled.div`
display: grid;
grid-template-areas:
  'sidebar navbar'
  'sidebar body'
  'footer footer';
grid-template-rows: auto 1fr auto;
grid-template-columns: 15vw 1fr; 
height: 100vh;
background-color:black;
color: white;
`;

const NavbarContainer = styled.div`
  grid-area: navbar;
  border: 1px solid white;
  height :30vh;
`;

const SidebarContainer = styled.div`
  grid-area: sidebar;
  border: 1px solid white;
  width: 15vw;
  display: grid;
  grid-template-rows: 20% 1fr; /* Splitting the sidebar into two parts */
`;

const TopSidebar = styled.div`
  border: 1px solid white;
`;

const BottomSidebar = styled.div`
  border: 1px solid white;
`;

const BodyContainer = styled.div`
  grid-area: body;
  border: 1px solid white;
  width: 85vw;
`;

const FooterContainer = styled.div`
  grid-area: footer;
  border: 1px solid white;
  height: 10vh;
`;
