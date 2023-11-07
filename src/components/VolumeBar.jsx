import React, { useState } from 'react';
import styled from 'styled-components';

const VolumeBarContainer = styled.div`
  width: 100px; /* Adjust the width as needed */
`;

const VolumeSlider = styled.input`
  width: 100%;
  height: 4px; /* Adjust the height for thickness */
  -webkit-appearance: none;
  background: linear-gradient(90deg, #1db954 0%, #1db954 var(--volume-position, 50%), white var(--volume-position, 50%), white 100%);
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
    cursor: pointer;
  }

  &:hover {
font-size:1.2rem  }
`;

function VolumeBar() {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
  };

  const volumePosition = volume + '%';

  return (
    <VolumeBarContainer>
      <VolumeSlider
        type="range"
        min="0"
        max="100"
        step="1"
        value={volume}
        onInput={handleVolumeChange} // Use onInput instead of onChange
        style={{ '--volume-position': volumePosition }}
      />
    </VolumeBarContainer>
  );
}

export default VolumeBar;
