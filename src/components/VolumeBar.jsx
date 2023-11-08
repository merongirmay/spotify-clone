import styled from "styled-components";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { HiOutlineQueueList } from "react-icons/hi2";
import { IoMdVolumeHigh } from "react-icons/io";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { LuMonitorSpeaker } from "react-icons/lu";
import { BsVolumeMuteFill } from "react-icons/bs";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";

function VolumeBar() {
  const [{ token }] = useStateProvider();
  const [volume, setVolume] = useState(50);
  const [muted, setMuted] = useState(false)

  const setVolumeAPI = async (newVolume) => {
    await axios.put(
      `https://api.spotify.com/v1/me/player/volume`,
      {},
      {
        params: {

          volume_percent: parseInt(e.target.value),

          volume_percent: newVolume,
main
        },
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    setVolumeAPI(newVolume);
  };


  const toggleMute = () => {
    if (muted) {
      handleVolumeChange(50);
    }
    else {
      handleVolumeChange(0);
    }
    setMuted(!muted);
  }
  
  const volumePosition = volume + "%";


  return (
    <VolumeBarContainer>
      <AiOutlinePlaySquare />
      <HiOutlineQueueList />
      <LuMonitorSpeaker />
      <VolumeControl>

        <IoMdVolumeHigh />
        <input
          className="volume_slider"
          type="range"
          min={0}
          max={100}
          onMouseUp={(e) => setVolume(e)}
        />

        {muted ? (
          <BsVolumeMuteFill onClick={toggleMute} />
           ) : (
          <IoMdVolumeHigh onClick={toggleMute} />
         )}
        {muted ? (
        <VolumeSlider
          type="range"
          min={0}
          max={100}
          step="1"
          value={0}
          onInput={(e) => handleVolumeChange(parseInt(e.target.value))}
          style={{ "--volume-position": "0%" }}
      />
      ) : (
        <VolumeSlider
        type="range"
        min={0}
        max={100}
        step="1"
        value={volume}
        onInput={(e) => handleVolumeChange(parseInt(e.target.value))}
        style={{ "--volume-position": volumePosition }}
      />
    )}
 main
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
  font-size: 1.5rem;
  color: #b3b3b3;
  svg {
    font-size: 1.5rem;
  }
  &:hover {
    color: white;
  }
  input {
    border-radius: 2rem;
    height: 0.2rem;
    cursor:pointer;
   
  }
`;

const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  .volume_slider {
  }
`;

`
main

const VolumeSlider = styled.input`
  width: 100%;
  height: 4px; /* Adjust the height for thickness */
  -appearance: none;
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
