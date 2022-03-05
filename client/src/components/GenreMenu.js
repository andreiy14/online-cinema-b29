import React, {useState, useContext,useEffect} from 'react'
import styled from 'styled-components'

import user from '../assests/user.png'
import clapperboard from '../assests/clapperboard.png'
import logout from '../assests/logout.png'
import {useNavigate, Link} from 'react-router-dom'
import { UserContext } from "../context/userContext";
import { API } from '../config/api';
function GenreMenu({setOpenModal}) {
    const Navigate = useNavigate()
    const [state, dispatch] = useContext(UserContext);
    const [category, setCategory] = useState([])
    const navigate = useNavigate()
    const getCategories = async () => {
        try {
          const response = await API.get('/getcategories');
          // Store product data to useState variabel
          setCategory(response.data.data);
          console.log(response.data.data)
          
         
        } catch (error) {
          console.log(error);
        }
      };
    const ListFilm = () =>{
        navigate('/listfilm')
        console.log("hello")
    }
    const detailCategory = (id)=>{
       
        Navigate('/getfilmbasedcategory/'+ id)
        setOpenModal(false);
      }
useEffect(() => {
 
        getCategories();
       
      }, []);
    
  return (
        <ModalBackground>
            
            <ModalContainer>
                
                
                <Body>
                    <ListMenu >
                   {category.map((item,index)=>(

<Texts key={index}  onClick={() =>{detailCategory(item.id)}}>    <h1>{item.category}</h1> </Texts>
                   ))}
                   
                     
                
                    </ListMenu>
                    
                    
                </Body>
             
            
            </ModalContainer>
        </ModalBackground>
  )
}

export default GenreMenu

const ModalBackground = styled.div`
     width: 100vw;
    height: 100vh;
    margin-top:40px;
    margin-left: 500px;
    position: fixed;
    background: transparent;
    z-index:1;
    font-family:Avenir;

`
const ModalContainer = styled.div`
    margin-top: 80px;
  width: 330px;
  height: 300px;
  justify-content:center;
 
  background: #0D0D0D;
  border-radius: 10px;
    
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
display: inline-block;
   margin-left: 35px;
    margin-top: 2px;
    color: #CD2E71;
`

const Body = styled.div`

flex: 50%;
    display: flex;
    flex-direction: column;
   margin-top: 12px;
 
  
   color: #0D0D0D;
    
    
`


const ListMenu = styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;
margin-top:12px;
font-family: Avenir;
font-style: normal;
font-weight: 800;
font-size: 12px;
line-height: 33px;
color:#FFFF;
img{
    width: 40px;
height: 40px;
}
`
const Icons =styled.div`
     margin-left:36px;
`
const Texts = styled.div`
    margin-left:14px;
    cursor: pointer;
     &:hover{
       color:#CD2E71;
      
     }
`
const MenuLogout = styled.div`
        display:flex;
        align-items:center;
        margin-top:34px;
        font-family: Avenir;
        font-style: normal;
        font-weight: 800;
        font-size: 12px;
        line-height: 33px;
        border-top: 1px solid white;
        color:#FFFF;
        img{
            width: 40px;
        height: 40px;
        }
`

const IconLogout = styled.div`
    margin-top:20px;
    margin-left:36px;
    cursor:pointer;
`

const TextLogout = styled.div`
margin-left:14px;
margin-top:18px;
cursor:pointer;
`