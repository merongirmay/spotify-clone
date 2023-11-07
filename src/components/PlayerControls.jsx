import styled from "styled-components";
import { FaPlayCircle } from "react-icons/fa";
import { CiRepeat } from "react-icons/ci";
import { BiSkipNext, BiSkipPrevious, BiShuffle } from "react-icons/bi";

function PlayerControls() {
  return (
    <Container>
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
