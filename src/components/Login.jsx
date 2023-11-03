import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

function Login() {
    
    const navigate = useNavigate(); // Get the navigate function from the hook

    const handleClick = () => {
      // Use the navigate function to go to the "/spotify" route
      navigate('/spotify');
    }
  return (
    <Container>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="spotify" />
        <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  )
}

export default Login

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100vh;
    width:100vw;
    background-color:#1db954;
    gap : 5 rem;
    img {
        height:20vh;
    }
    button {
        padding: 1rem 5rem;
        border-radius: 5rem;
        background-color: black;
        border:none;
        color :#49f585;
        font-size: 1.4rem;
        cursor: pointer;
    }

`;