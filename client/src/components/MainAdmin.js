import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import img from '../assests/deadpool.png'
import spiderman from '../assests/spiderman.png'
import Header from './Header'
import HeaderProfile from './HeaderProfile'
import {useNavigate} from "react-router-dom"
import { API } from '../config/api';
import HeaderAdmin from './HeaderAdmin'
import TableTransaction from './TableTransaction'
function MainAdmin() {
    
  return (
    <Container>
         <HeaderAdmin  />
        <TableTransaction />
         
    </Container>
  )
}

export default MainAdmin
const Container = styled.div`
    background: #000000;
    height:100%;
    display:flex;

  justify-content:center;
  align-items:center;
    font-family:'Avenir';
    flex-direction:column;
   
    
   
   
`

