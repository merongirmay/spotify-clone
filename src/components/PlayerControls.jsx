import styled from "styled-components";
import { FaPlayCircle } from "react-icons/fa";
import { CiRepeat } from "react-icons/ci";
import { BiSkipNext, BiSkipPrevious, BiShuffle } from "react-icons/bi";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { reducerCases } from "../utils/Constants";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";

function PlayerControls() {
  const [{ token, playerState }, dispatch] = useStateProvider();

  const changeTrack = async (type) => {
   const data = await axios.post(
      `https://api.spotify.com/v1/me/player/${type}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    const response = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );

    const { item } = data;
    if (data !== "") {
      const currentlyPlaying = {
        id: item.id,
        name: item.name,
        artists: item.artists.map((artist) => artist.name),
        image: item.album.images[2].url,
      };
      dispatch({ type: reducerCases.SET_CURRENTLY_PLAYING, currentlyPlaying });
    } else {
      dispatch({
        type: reducerCases.SET_CURRENTLY_PLAYING,
        currentlyPlaying: null,
      });
    }
  };

  const changeState = async () => {
    const state = playerState ? "pause" : "play";

    const response = await axios.put(
      `https://api.spotify.com/v1/me/player/${state}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: reducerCases.SET_PLAYER_STATE,
      playerState: !playerState,
    });
  };

  return (
    <Container>
      <div className="left-controls">
        <div className="shuffle">
          <BiShuffle />
        </div>
        <div className="previous">
          <BiSkipPrevious onClick={() => changeTrack("previous")} />
        </div>
        <div className="play">
        {playerState ? (
          <BsFillPauseCircleFill onClick={changeState} />
        ) : (
          <BsFillPlayCircleFill onClick={changeState} />
        )}
        </div>
        <div className="next">
          <BiSkipNext onClick={() => changeTrack("next")} />
        </div>
        <div className="repeat">
          <CiRepeat />
        </div>
      </div>
      <div className="right-controls"></div>
    </Container>
  );
}

export default PlayerControls;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left-controls,
  .right-controls {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .play svg {
    color: white;
    font-size: 2.5rem;
    &:hover {
      color: white;
      transform: scale(1.05);
      transition: 0.2s ease-in-out;
    }
  }

  .previous svg,
  .next svg {
    color: #b3b3b3;
    font-size: 2.2rem;
    &:hover {
      color: white;
    }
  }

  .repeat svg,
  .shuffle svg {
    color: #b3b3b3;
    font-size: 1.2rem;
    &:hover {
      color: white;
    }
  }
`;
