import React, { useEffect } from 'react'
import styled from 'styled-components'



export default function Playlists() {

 useEffect


  return (



    <div>Playlists</div>
  )
}






const Container = styled.div`
 ul{
      list-style-type: none;
      display: flex;
      flex-direction: column;
      padding: 16px;
      gap: 16px;
      li{
        display: flex;
        gap: 16px;
        cursor: pointer;
        transition: 0.2ms ease-in-out ;
        :hover{
         color: #fff;
        }
      }
    }



`