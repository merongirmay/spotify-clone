import { useEffect } from "react";
import styled from "styled-components";
import { BsDot } from "react-icons/bs";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

export default function Playlists() {
  const [{ token, playlists }, dispatch] = useStateProvider();

  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response);
      const { items } = response.data;
       // console.log(items)

      //const imageUrl = items.images[0].url;
      // console.log(items.images[0].url);
      const playlists = items.map((playlist) => {
        const name = playlist.name;
        const id = playlist.id;
        const ownerName = playlist.owner.display_name;
        //const imageUrl = playlist.uri;
        const type = playlist.type;
        
        return { name, id, ownerName, type };
      });
      console.log(playlists)
      // const playlists = items.map(({ name, id }) => {
      //   return { name, id };
      // });

      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };

    getPlaylistData();
  }, [token, dispatch]);

  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
  };

  return (
    <Container>
      {/*<ul>
     <div className="library">
          <span>Playlists</span>
          <span>Artist</span>
          <span>Album</span>
          <span>Podcasts & Shows</span>
     </div>
        {playlists.map(({ name, id }) => {
          return <li key={id} onClick={() =>changeCurrentPlaylist(id)} >{name}</li>;
        })}
      
      </ul> */}

      <div className="library">
        <span>Playlists</span>
        <span>Artist</span>
        <span>Album</span>
        <span>Podcasts & Shows</span>
      </div>

      {playlists.map(({ name, id, ownerName, type }) => {
        return (
          <div
            className="playlist"
            key={id}
            onClick={() => changeCurrentPlaylist(id)}
          >
            <div className="image">
              <img src="https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2" alt=""/>
            </div>
            <div className="playlist_info">
              <h4>
                {name}
              </h4>
              <span> {type} <BsDot />{ownerName}</span>
            </div>
          </div>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  overflow: hidden;
  color: rgb(179, 179, 179);
  margin: 10px;
  border-radius: 10px;
  background-color: #121212;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  height: 67vh;
  max-height: 100%;
  overflow: auto;
  :hover{
    background-color: rgb(42, 42, 42);
  }
  &::-webkit-scrollbar {
    width: 11px;

    &-thumb {
      background-color: gray;
    }

    /* &-track {


    border-radius: 10px;
    background-color: #121212;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
    height: 70vh;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 11px;

      &-thumb {
        background-color: gray;
      }
      /* &-track {
main
        background-color: black; // we can try and see if we can use the track bkg
      } */
  }
  /* border: 1px solid white; */
  .library {
    position: sticky;
    top: 0;
    /* border: 1px solid white; */
    display: flex;
    justify-content: space-around;

    span {
      background-color: #2a2a2a;
      /* box-shadow: rgba(0, 0, 0, 0.25) 0px, 25px, 50px, -12px; */
      /* border: 1px solid white; */
      border-radius: 15px;
      color: white;
      padding: 5px 8px;
      font-size: 13px;
    }
  }
  .playlist {
    display: flex;
    align-items: center;
    gap: 1rem;
    :hover{
      background-color: rgb(42, 42, 42);
    }
    &_info{
      display: flex;
      flex-direction: column;
      gap:0.3rem;
       h4{
      color: #fff;
    }}
    .image {
      img {
        gap: 16px;
        height: 3rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px, 25px, 50px, -12px;
        border-radius: 5px;
        color: white;
      }
  }
  }

  
/* .playlists {
    display: flex;
    flex-direction: column;
    padding: 10px;
    color: white;
    border-radius: 5px;
    img {
      gap: 16px;
      height: 3rem;
      box-shadow: rgba(0, 0, 0, 0.25) 0px, 25px, 50px, -12px;
      border-radius: 5px;
    }
    div {
      display: flex;
      justify-content: flex-start;
      align-content: center;
      align-items: flex-start;
      gap: 16px;
    }
    span {
      justify-content: flex-start;
    }
    h5 {
      color: #888888;
    }
  } */
`;
