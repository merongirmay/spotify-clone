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
      //  console.log(items)

      //const imageUrl = items.images[0].url;
      // console.log(items.images[0].url);

      const playlists = items.map((playlist) => {
        const name = playlist.name;
        const id = playlist.id;
        const ownerName = playlist.owner.display_name;
        const imageUrl = playlist.images[0].url;
        const type = playlist.type;

        return { name, id, ownerName, imageUrl, type };
      });

      console.log(playlists);

      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };

    getPlaylistData();
  }, [token, dispatch]);

  return (
    <Container>
      <div className="playlist-container">
        <div className="library">
          <span>Playlists</span>
          <span>Artist</span>
          <span>Album</span>
          <span>Podcasts & Shows</span>
     </div>

     
        <div className="info">
          {playlists.map(({ name, id, ownerName, imageUrl, type }) => {
            return (
              <div className="info playlist-item" key={id}>
                <div className="image playlist-image-name">
                  <img src={imageUrl} alt={name} />
                  <span className="playlist-name">{name}</span>
                </div>
                <div className="playlist-type-username ">
                <span className="playlist-type"> {type} </span>
                <BsDot /> 
                  <span className="playlist-username">{ownerName}</span>  
                </div>
              </div>
              
            );
          })}
        </div>
        {playlists.map(({ name, id, ownerName, imageUrl, type }) => {
            return (
              <li key={id}>
                <img src={imageUrl} alt={name} /> {name}
                <span style={{ display: "block" }}>
                  {" "}
                  {type} <BsDot />
                  {ownerName}
                </span>
              </li>
            );
          })} 
       
        </div>
   
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  overflow: hidden;
  color: rgb(179, 179, 179);
  margin: 10px;
    /* border: 1px solid white; */
    .library {
      position: sticky;
      top: 0;
      border: 1px solid white;
      display: flex;
      justify-content: space-around;

      span {
        background-color: #2a2a2a;
        /* box-shadow: rgba(0, 0, 0, 0.25) 0px, 25px, 50px, -12px; */
        /* border: 1px solid white; */
        border-radius: 15px;
        color: white;
        padding: 5px;
        font-size: 13px;
      }
    }
    .info {
      display: flex;
     flex-direction: column;
      gap: 1rem;
      .image {
        img {
       
          gap: 16px;
          height: 3rem;
          box-shadow: rgba(0, 0, 0, 0.25) 0px, 25px, 50px, -12px;
          border-radius: 5px;
        }
      }
.playlist-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
 
  border-radius: 8px;
  .playlist-image-name {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  .playlist-image-name img {
  width: 64px;
  height: 64px;
  margin-right: 8px;
}
.playlist-name {
  font-size: 16px;
  font-weight: bold;
}
}
.playlist-type-username {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .playlist-type {
  font-size: 14px;
  color: gray;
}
.playlist-username {
  font-size: 14px;
  color: gray;
}
}

}
      /* .info {
        display: flex;
        flex-direction: row;
        span{
          display: flex;
          flex-direction: row;
        }
      } */
    }

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
    &::-webkit-scrollbar {
      width: 11px;

      &-thumb {
        background-color: gray;
      }
      /* &-track {
        background-color: black; // we can try and see if we can use the track bkg
      } */
    }
    li {
      display: flex;
      gap: 16px;
      cursor: pointer;
      transition: 0.2ms ease-in-out;
      padding: 10px;
      color: white;
      border-radius: 5px;
      &:hover {
        background-color: black;
      }
      img {
        height: 3rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px, 25px, 50px, -12px;
        border-radius: 5px;
      }
    }
    .playlists {
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
    }
`;
