import React, { useEffect } from "react";
import styled from "styled-components";
import {BsPlusLg, BsArrowRight} from 'react-icons/bs'
import { IoLibrary } from "react-icons/io5";

export default function Playlists() {
  return (
    <Container>
      <ul>
      <li>
          <IoLibrary />
            <span>Your Library</span>
          </li>
        Playlists <BsPlusLg /> <BsArrowRight />
        <li>Song 1 - Artist 1</li>
        <li>Song 2 - Artist 2</li>
        <li>Song 3 - Artist 3</li>
        <li>Song 4 - Artist 4</li>
        <li>Song 5 - Artist 5</li>
        <li>Song 6 - Artist 6</li>
        <li>Song 7 - Artist 7</li>
        <li>Song 8 - Artist 8</li>
        { /*<li>Song 10 - Artist 10</li>
        <li>Song 11 - Artist 11</li>
        <li>Song 12 - Artist 12</li>
        <li>Song 13 - Artist 13</li>
        <li>Song 14 - Artist 14</li>
        <li>Song 15 - Artist 15</li>
        <li>Song 16 - Artist 16</li>
        <li>Song 17 - Artist 17</li>
        <li>Song 18 - Artist 18</li>
        <li>Song 19 - Artist 19</li>
        <li>Song 20 - Artist 20</li> */}
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
    border-radius: 10px;
    background-color: #121212;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
    height: 50vh;
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
      :hover {
        color: white;
      }
      li:hover{
        color: white;

      }
    }
  }
`;
