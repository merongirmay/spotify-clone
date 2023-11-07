import React, { useEffect } from "react";
import styled from "styled-components";
import { BsPlusLg, BsArrowRight } from "react-icons/bs";
import { IoLibrary } from "react-icons/io5";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";
import { MdSearch } from "react-icons/md";

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
      console.log(response);
      const { items } = response.data;
      // console.log(items)

      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });

      // console.log(playlists)

      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };

    getPlaylistData();
  }, [token, dispatch]);

  return (
    <Container>
      <ul>
      <div className="library">
        <span>Playlists</span> 
        
        <MdSearch />
        
      {/*<BsPlusLg /> <BsArrowRight /> */}
      </div>
        {playlists.map(({ name, id }) => {
          return <li key={id}>{name}</li>;
        })}
        {playlists.map(({ name, id }) => {
            return <li key={id}>{name}</li>;
          })}
          {playlists.map(({ name, id }) => {
            return <li key={id}>{name}</li>;
          })}
          {playlists.map(({ name, id }) => {
            return <li key={id}>{name}</li>;
          })}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  overflow: hidden;
  color: rgb(179, 179, 179);
  margin: 10px;
  

ul {
    /* border: 1px solid white; */
    .library{
      position: sticky;
      top: 0;
      span{
          /* background-color: black; */
    
      }
    }
    border-radius: 10px;
    background-color: #121212;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
    height: 53vh;
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
      &:hover{
        background-color: black;
      }
    }
  }
`;
