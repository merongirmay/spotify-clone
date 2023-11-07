import { useEffect } from "react";
import styled from "styled-components";
import { AiFillClockCircle } from "react-icons/ai";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

export default function Body({ headerBackground }) {
  const [{ token, selectedPlaylistId, selectedPlaylist }, dispatch] =
    useStateProvider();

  useEffect(() => {
    const getInitialPlaylist = async () => {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(data)
      const selectedPlaylist = {
        id: data.id,
        name: data.name,
        //if it starts from anchor tag print an empty string
        description: data.description.startsWith("<a") ? "" : data.description,
        image: data.images[0].url,
        tracks: data.tracks.items.map(({ track }) => ({
          id: track.id,
          date: track.added_at,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      };
      // console.log(data);

      
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
    };
    getInitialPlaylist();
  }, [token, dispatch, selectedPlaylistId]);

  const convertToMinAndSec = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = (ms % 60).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <Container>
      {selectedPlaylist && (
        <>
          <div className="playlist">
            <div className="image">
              <img src={selectedPlaylist.image} alt={selectedPlaylist} />
            </div>
            <div className="details">
              <span className="type">PLAYLIST</span>
              <h1 className="title">{selectedPlaylist.name}</h1>
              <p className="description">{selectedPlaylist.description}</p>
            </div>
          </div>
          <div className="list">
            <div
              className="header_row"
              style={{
                backgroundColor: headerBackground ? "#000000dc" : "transparent",
              }}
            >
              <div className="col" style = {{marginBottom:"0rem"}}>
                <span style={{marginLeft: "-2rem", fontWeight:"bold", fontSize: "0.8rem"}}>#</span>
              </div>
              <div className="col">
                <span style={{marginLeft: "-2rem", fontWeight:"bold", fontSize: "0.8rem"}}>Title</span>
              </div>
              <div className="col">
                <span style = {{fontSize : "0.8rem", marginLeft: "-13rem",fontWeight:"bold"}}>Album</span>
              </div>
              
              <div className="col">
                <span>
                  <AiFillClockCircle style={{ fontSize: "16px", marginLeft: "-1.5rem"}} />
                </span>
              </div>
            </div>
            <div className="line"> </div>
            <div className="tracks">
              {selectedPlaylist.tracks.map(
                (
                  {
                    id,
                    name,
                    artists,
                    image,
                    duration,
                    album,
                    context_uri,
                    track_number,
                  },
                  index
                ) => {
                  return (
                    <div className="row" key={id} style = {{cursor:"pointer"}}>
                      <div className="col">
                        <span style = {{marginLeft :"0.7rem"}}>{index + 1}</span>
                      </div>
                      <div className="col detail">
                        <div className="image">
                          <img style = {{marginLeft :"-3.5rem"}} src={image} alt="track" />
                        </div>
                        <div className="info">
                          <span style = {{fontSize : "1rem", fontWeight: "bold", marginLeft :"-1rem", marginBottom:"0.3rem"}}className="name" >{name}</span>
                          <span style = {{fontSize : "0.8rem", marginLeft :"-1rem", fontWeight: "bold"}}>{artists}</span>
                        </div>
                      </div>
                      <div className="col-album">
                        <span style = {{fontSize : "0.8rem", fontWeight: "bold", marginLeft :"8rem", color:"grey"}}>{album}</span>
                      </div>
                      <div className="col">
                        <span style = {{fontSize : "0.8rem",fontWeight: "bold",marginLeft :"25rem", color:"grey"}}>{convertToMinAndSec(duration)}</span>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  .line {
    position: sticky;
    top: 15vh;
    height: 1px;
    background-color: white;
    margin-bottom:1rem;
    margin-top:0;
  }
  .playlist {
    margin: 0 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    .image {
      img {
        margin-top: 2rem;
        height: 15rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px, 25px, 50px, -12px;
      }
    }
    .details {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: #e0dede;
      .title {
        color: white;
        font-size: 4rem;
      }
    }
  }
  .list {
    .header_row {
      display: grid;
      grid-template-columns: 0.3fr 3fr 2fr 0.1fr;
      color: #dddcdc;
      margin: 1rem 0 0 0;
      position: sticky;
      top: 10vh;
      padding: 1rem 3rem;
      transition: 0.3s ease-in-out;
    }
    .tracks {
      display: flex;
      flex-direction: column;
      margin-bottom: 5rem;
      .row {
        padding: 0.5rem 0.5rem;
        display: grid;
        grid-template-columns: 0.3fr 1fr 1fr 1fr 0.1fr;
        &:hover {
          background-color: rgb(42, 42, 42);
        }
        .col {
          margin:rem;
          display: flex;
          align-items: center;
          color: #dddcdc;
          img {
            height: 40px;
          }
        }
        .detail {
          display: flex;
          gap: 1rem;
          .info {
            display: flex;
            flex-direction: column;
            span{
              color: d4d5d6;
              font-size: 12.5px;
            }
            .name{
              color: white;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
`;
