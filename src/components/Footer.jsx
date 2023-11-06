import React from 'react'
import styled from 'styled-components'
import {FaPlayCircle} from 'react-icons/fa';
import {BiSkipNextCircle, BiSkipPreviousCircle} from 'react-icons/bi';


function Footer() {
  return (
    <Container> 
      <BiSkipPreviousCircle />
      <FaPlayCircle />
      <BiSkipNextCircle />
    </Container>
  )
}

export default Footer

const Container = styled.div`
background-color:black;
color:white;
height:100%;
border: 1px solid white
`

