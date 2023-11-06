import React from 'react';
import styled from 'styled-components';
import SpotifyPlayer from 'react-spotify-web-playback'
import { FaPlayCircle } from 'react-icons/fa';
import { BsRepeat } from 'react-icons/bs';
import { BiSkipNext, BiSkipPrevious, BiShuffle } from 'react-icons/bi';
// import SpotifyWebPlayer from 'react-spotify-web-playback';

function PlayerControls() {
  return (
    <Container>
      <div className="shuffle">
        <BiShuffle />
      </div>
      <div className="previous">
        <BiSkipPrevious />
      </div>
      <div className="play">
        <FaPlayCircle />
      </div>
      <div className="next">
        <BiSkipNext />
      </div>
      <div className="repeat">
        <BsRepeat />
      </div>
      <div>
        <SpotifyPlayer />
      </div>
    </Container>
  );
}

export default PlayerControls;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .shuffle,
  .previous,
  .next,
  .repeat {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .play {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: #b3b3b3;
      font-size: 2.5rem;
      &:hover {
        color: white;
        transform: scale(1.05); 
        transition: 0.2s ease-in-out;
      }
    }
  }

  .previous, .next {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: #b3b3b3;
      font-size: 2rem;
      &:hover {
        color: white;
      }
    }
  }
`;
