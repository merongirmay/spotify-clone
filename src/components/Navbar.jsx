import React, { useEffect } from 'react';
import { FaUserAlt, FaUsers, FaBell } from 'react-icons/fa';
import styled from 'styled-components';
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';

function Navbar() {
 

  return (
    <Container>
      <div className="icons">
        <FaBell />
        <FaUsers />
        <FaUserAlt />
      </div>
  
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  width: 100%;
  height: 25%;
  .icons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 10vh;
    padding: 1rem;
    margin-top: 0;
  }
  svg {
    color: #b3b3b3;
    font-size: 2.2rem;
    padding: 0.5rem;
    &:hover {
      color: white;
      transform: scale(1.05);
      transition: 0.2s ease-in-out;
    }
  }
`;
