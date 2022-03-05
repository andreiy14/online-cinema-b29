import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import './ProfileMenu.css'
import user from '../assests/user.png'
import clapperboard from '../assests/clapperboard.png'
import logout from '../assests/logout.png'
import {useNavigate, Link} from 'react-router-dom'
import { UserContext } from "../context/userContext";
function ProfileMenuAdmin({setOpenModal,setHeader}) {
    const [state, dispatch] = useContext(UserContext);
    const navigate = useNavigate()

    const ListFilm = () =>{
        navigate('/listfilm')
        console.log("hello")
    }
    const Profile = () =>{
        navigate('/user')
        console.log("hello")
    }
    const addFilm = () =>{
        navigate('/addfilm')
        console.log("hello")
    }
    const handleLogout = () => {
        console.log(state);
        dispatch({
          type: "LOGOUT",
        });
        <Link to='/' />
        window.location.reload(true)
        setHeader(false)
      };
  return (
        <ModalBackground>
            
            <ModalContainer>
                
                
                <Body>
                  
                    <ListMenu onClick={() => {addFilm()}}>
                    <Icons>   <img src={clapperboard} alt="" /></Icons>
                    <Texts>    <h1>Add Film</h1></Texts>
                    </ListMenu>
                    <MenuLogout onClick={() =>{handleLogout()}}>
                        <IconLogout> <img src={logout} alt="" /></IconLogout>
                        <TextLogout > <h1>Logout</h1></TextLogout>
                        
                    </MenuLogout>
                </Body>
             
            
            </ModalContainer>
        </ModalBackground>
  )
}

export default ProfileMenuAdmin

const ModalBackground = styled.div`
     width: 100vw;
    height: 100vh;
    margin-top:40px;
    margin-left: 1000px;
    position: fixed;
    background: transparent;
    z-index:1;
    font-family:Avenir;

`
const ModalContainer = styled.div`
    margin-top: 80px;
  width: 295px;
  height: 200px;
  
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
`
const MenuLogout = styled.div`
        display:flex;
        align-items:center;
        margin-top:25px;
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