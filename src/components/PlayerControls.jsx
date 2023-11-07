
import React from 'react';
import styled from 'styled-components';
import { FaPlayCircle, FaMicrophone } from 'react-icons/fa';
import { HiQueueList } from 'react-icons/hi2';
import { LuMonitorSpeaker } from 'react-icons/lu';
import { BsRepeat, BsFillVolumeUpFill} from 'react-icons/bs';
import { BiSkipNext, BiSkipPrevious, BiShuffle } from 'react-icons/bi';
import VolumeBar from './VolumeBar';
// import SpotifyWebPlayer from 'react-spotify-web-playback';

function PlayerControls() {
  return (
    <Container>
      <div className="empty"></div>
      <div className="left-controls">
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
      </div>
      <div className="right-controls">
        <div className="volume-bar">
          <BsFillVolumeUpFill />
          <VolumeBar />
        </div>
        <div className="additional-controls">
          <FaMicrophone />
          <HiQueueList />
          <LuMonitorSpeaker />
        </div>
      </div>
    </Container>
  );
}

export default PlayerControls;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .empty {
    flex: 1;
  }

  .left-controls,
  .right-controls {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .play svg,
  .previous svg,
  .next svg,
  .repeat svg {
    color: #b3b3b3;
    font-size: 2.5rem;
    &:hover {
      color: white;
      transform: scale(1.05);
      transition: 0.2s ease-in-out;
    }
  }

  .previous svg,
  .next svg,
  .repeat svg {
    font-size: 2rem;
  }

  .volume-bar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}`