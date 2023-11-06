import React from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=0384a3364b7d4b1b847e1490f9c3d00c&response_type=token&redirect_uri=http://localhost:5173&scope=streaming%20user-library-read%20user-library-modify%20user-read-email%20user-read-private%20user-modify-playback-state%20user-read-playback-state%20user-read-currently-playing%20user-read-recently-played%20user-read-playback-position%20user-top-read";

function Login() {
  // const navigate = useNavigate(); // Get the navigate function from the hook

  // const handleClick = () => {
  //   // Use the navigate function to go to the "/spotify" route
  //   navigate('/spotify');
  // }
  return (
    <Container>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="spotify"
      />
      <a href={AUTH_URL}>Connect Reactify</a>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5 rem;
  img {
    height: 20vh;
  }
  a {
    text-decoration: none;
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    border: none;
    color: #49f585;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
