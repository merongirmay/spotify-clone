
import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { useStateProvider } from "../utils/StateProvider";

export default function Navbar({navBackground}) {
  const [{ userInfo}] = useStateProvider();
//   console.log(userInfo);

  return (
    <Container style={{backgroundColor: navBackground ? "rgba(0,0,0,0.7)" : "transparent"}}  >
      <div className="search_bar">
        <FaSearch />
        <input type="text" placeholder="Artists, songs or podcasts" />
      </div>
      <a href="#" className="avatar">
        <div className="user_name">{userInfo?.userName}</div>
        <div className="bell">
          <GoBell />
        </div>

        <img
          className="profile_img"
          src={userInfo?.userImg}
          alt="profile img"
        />
      </a>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 15vh;
  position: sticky;
  top: 0;
  transition: 0.3s ease-in-out;
 
  .search_bar {
    background-color: white;
    width: 30%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
      border: none;
      height: 2rem;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }
  .avatar {
    text-decoration: none;
    color: #000000b4;

    padding: 0.3rem 0.4rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    transition: 0.2s ease-in-out;
    .user_name {
      display: grid;
      place-items: center;
      /* border: 1px solid red; */
      background-color: #b3b3b3;
      padding: 0.8rem 1.2rem;

      /* height: 3rem;
      width: 6rem; */
      font-size: 1.1rem;
      border-radius: 2rem;
      transition: 0.2s ease-in-out;
      &:hover {
        color: white;
      }
    }
    .bell {
      display: grid;
      place-items: center;
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
      background-color: #b3b3b3;
      font-size: 1.1rem;
      transition: 0.2s ease-in-out;
      &:hover {
        color: white;
      }
    }
    .profile_img {
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
    }
  }
`;








































// import React, { useEffect } from 'react';
// import { FaUserAlt, FaUsers, FaBell } from 'react-icons/fa';

// import styled from 'styled-components';
// import { useStateProvider } from '../utils/StateProvider';


// function Navbar() {
 

//   return (
//     <Container>
//       <div className="icons">
//         <FaBell />
//         <FaUsers />
//         <FaUserAlt />
//       </div>
  
//     </Container>
//   );
// }

// // export default Navbar;

// // const Container = styled.div`
// //   width: 100%;
// //   height: 25%;
// //   .icons {
// //     display: flex;
// //     align-items: center;
// //     justify-content: flex-end;
// //     height: 10vh;
// //     padding: 1rem;
// //     margin-top: 0;
// //   }
// //   svg {
// //     color: #b3b3b3;
// //     font-size: 2.2rem;
// //     padding: 0.5rem;
// //     &:hover {
// //       color: white;
// //       transform: scale(1.05);
// //       transition: 0.2s ease-in-out;
// //     }
// //   }
// // `;


