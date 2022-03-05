import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

import { API } from '../config/api';
import icon from '../assests/Polygon.png'
import ReactTable from "react-table"; 
import MenuApprovement from './MenuApprovement';


function TableTransaction() {
    const [film, setFilm] = useState([]);
    const [open, setOpen] = useState(false)
    const [state, setState] = useState()
    const Navigate = useNavigate()
    const getFilm = async () => {
        try {
          const response = await API.get('/getransaction');
          // Store product data to useState variabel
          setFilm(response.data.data);
          console.log(response.data.data)
          
         
        } catch (error) {
          console.log(error);
        }
      };
      const detailFilm = (id)=>{
        setState(id)
        
      }
 // Call function get products with useEffect didMount here ...
 useEffect(() => {
 
  getFilm();
 
}, []);

  return (
    <Container>

         
                 {film.map((item,index)=>(
                     
                        
                     <DetailHistory key={index} > 
                        <TitleFilm>
                            <span>{item.idFilm} </span>
                            <span>| Order by :{item.idUser}</span>
                        </TitleFilm>
                        <DateOrder>
                             <span>Bukti Transfer :{item.image}</span>
                        </DateOrder>
                        <TotalPrice>
                            <Price>
                                 <span>Total : Rp.{item.price} .000</span>
                            </Price>
                            <Status  onClick={() => {  setOpen(true); detailFilm(item.id)  } }>
                                 <span>{item.status}</span>
                            </Status>
                        </TotalPrice>
                        </DetailHistory>
                     
                     
                 ))}    
               {open && <MenuApprovement setOpenModal={setOpen} id={state} />}
    </Container>
  )
}

export default TableTransaction

const Container = styled.div`
    height:100vh;
    background-color: #000000;
    width:70%;
    color:#FFFFFF;
    display:flex;
    flex-wrap: wrap;
`
const DetailHistory = styled.div`
    background: rgba(205, 46, 113, 0.44);
    width: 419px;
height: 101px;
margin-right:4px;
margin-top:46px;
display:flex;
flex-direction:column;
`
const TitleFilm = styled.div`
    font-style: normal;
font-weight: 900;
font-size: 14px;
line-height: 19px;
margin-top:15px;
margin-left:14px;

color: #FFFFFF;
`

const DateOrder = styled.div`
    font-style: normal;
font-weight: 900;
font-size: 9px;
line-height: 12px;
margin-top:12px;
margin-left:14px;
color: #FFFFFF;
`

const TotalPrice = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:12px;
margin-left:14px;
`
const Price = styled.div`
        font-style: normal;
        font-weight: 900;
        font-size: 10px;
        line-height: 14px;
        /* identical to box height */


        color: #CD2E71;
`
const Status = styled.div`

margin-right:12px;
        width: 112px;
height: 19px;
background: #00FF47;
opacity:0.4;
border-radius: 2px;
display:flex;
align-items:center;
justify-content:center;
color: white;
font-style: bold;
font-weight: 900;
font-size: 10px;
line-height: 14px;
    span{
        position:absolute;
        font-style:bold;
font-weight: 900;
font-size: 12px;
line-height: 14px;
/* identical to box height */
z-index:1;
  

    color: white;
    } 
`


