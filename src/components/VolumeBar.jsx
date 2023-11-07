import { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { HiOutlineQueueList } from "react-icons/hi2";
import { IoMdVolumeHigh } from "react-icons/io";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { LuMonitorSpeaker } from "react-icons/lu";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";

function VolumeBar() {
  const [{ token }] = useStateProvider();

  const setVolume = async (e) => {
    await axios.put(
      `https://api.spotify.com/v1/me/player/volume`,
      {},
      {
        params: {
            volume_percent: parseInt(e.target.value)
        },
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
  };
  // const [volume, setVolume] = useState(50);

  // const handleVolumeChange = (e) => {
  //   const newVolume = e.target.value;
  //   setVolume(newVolume);
  // };

  // const volumePosition = volume + "%";

  return (
    <VolumeBarContainer>
      <AiOutlinePlaySquare />
      <HiOutlineQueueList />
      <LuMonitorSpeaker />
      <VolumeControl>
        <IoMdVolumeHigh />
        <input className="volume_slider" type="range" min={0} max={100} onMouseUp={(e) => setVolume(e)} />
      </VolumeControl>
      <BsArrowsAngleExpand />
    </VolumeBarContainer>
  );
}

export default VolumeBar;

const VolumeBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 16rem;
  font-size: 1.2rem;
  color: #b3b3b3;
  &:hover {
    color: white;
  }
`;

const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  .volume_slider {

  }
`;

const VolumeSlider = styled.input`
  width: 100%;
  height: 4px; /* Adjust the height for thickness */
  -webkit-appearance: none;
  background: linear-gradient(
    90deg,
    #1db954 0%,
    #1db954 var(--volume-position, 50%),
    white var(--volume-position, 50%),
    white 100%
  );
  border-radius: 2px;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background: white;
    border: 2px solid white;
    border-radius: 50%;
  }
`;
