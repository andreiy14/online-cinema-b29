import React, {useContext , useState,useEffect} from 'react'
import styled from 'styled-components'
import icon from '../assests/Icon.png'
import spiderman from '../assests/spiderman.png'
import ProfileMenuAdmin from  './ProfileMenuAdmin'
import {useNavigate} from "react-router-dom"
import { API } from '../config/api';
import { UserContext } from "../context/userContext";
import App from '../App'
function HeaderAdmin({setHeader}) {
    const [menu, setMenu] = useState(false)
    const [open,setOpen] = useState(true)
    const navigate = useNavigate()
    const [user, setUser] = useState([]);
    const getUser = async () => {
        try {
          const response = await API.get('/getuser');
          // Store product data to useState variabel
          setUser(response.data.data.data);
          console.log(response.data.data.data)
          
         
        } catch (error) {
          console.log(error);
        }
      };
 // Call function get products with useEffect didMount here ...
 useEffect(() => {
 
  getUser();
 
}, []);
  return (
    <Container>
        <HeaderLeft>
            <IconHeader>
                <img src={icon} alt="" />
            </IconHeader>
        </HeaderLeft>
        <HeaderRight>
            <HeaderProfileUser>
                 <ImgProfile onClick={() => {  setMenu(true) } }>
                    <img src={spiderman} alt="" />
                </ImgProfile>

               
              y
            </HeaderProfileUser>
        </HeaderRight>
        {menu && <ProfileMenuAdmin setOpenModal={setMenu}  setHeader={setHeader}  />}
    </Container>
    
  )
}

export default HeaderAdmin
const Container = styled.div`
    width : 100%;
    height:115px;
    background-color:#000000;
    display:flex;
    font-family:Avenir;
`

const HeaderLeft = styled.div`
    background-color:#000000;
    flex:50%;
`
const IconHeader = styled.div`
    position: absolute;
    margin-left:56px;
    margin-top:41px;
    img{
    width: 159px;   
    height: 44.27px;
    }
`

const HeaderRight = styled.div`
    background-color:#000000;
    flex:50%;
    display:flex;
    justify-content:flex-end;
`
const HeaderProfileUser = styled.div`
     display:flex;
     margin-right:56px;
     margin-top:41px;
`


const ImgProfile = styled.div`

background:white;
width:60px;
height:60px;
border-radius:100%;
img{
    width:60px;
height:60px;
border-radius:100%; 
}
`