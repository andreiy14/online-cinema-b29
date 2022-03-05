import React, {useState,useEffect,useContext} from 'react'
import styled from 'styled-components'
import spiderman from '../assests/spiderman.png'
import {useNavigate} from "react-router-dom"
import { API } from '../config/api';
import { UserContext } from "../context/userContext";

function Profile() {
    const [user, setUser] = useState([]);
    const [transaction,setTransaction] = useState([])
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
      const getTransaction = async () => {
        try {
          const response = await API.get('/getransactionuser');
          // Store product data to useState variabel
          setTransaction(response.data.data);
          
         
         
        } catch (error) {
          console.log(error);
        }
      };
 // Call function get products with useEffect didMount here ...
 useEffect(() => {
 getTransaction()
  getUser();
 
}, []);
  return (
        <Container>
            <MyProfile>
                <UserName>
                    <span>My Profile</span>
                </UserName>
                <DetailUser>
                    <ImgUser>
                        <img src={spiderman} alt="" />
                    </ImgUser>
                    <DataUser>
                        <FullName>
                            <span style={{color:"#CD2E71"}}>FullName</span>
                            <span>{user.fullname}</span>
                        </FullName>
                        <Email>
                        <span style={{color:"#CD2E71"}}>Email</span>
                            <span>{user.email}</span>
                        </Email>
                        <Phone>
                        <span style={{color:"#CD2E71"}}>Phone</span>
                            <span>08121288282</span>
                        </Phone>
                    </DataUser>
                </DetailUser>

            </MyProfile>
            <HistoryTransaction>
            <UserName>
            <span>History Transaction</span>
                </UserName>
             
                 {transaction.map((item,index)=>(
                     
                        
                     <DetailHistory key={index} > 
                        <TitleFilm>
                            <span>{item.idFilm}</span>
                        </TitleFilm>
                        <DateOrder>
                             <span>{item.createdAt}</span>
                        </DateOrder>
                        <TotalPrice>
                            <Price>
                                 <span>Total : Rp. {item.price}.000</span>
                            </Price>
                            <Status>
                                 <span>{item.status}</span>
                            </Status>
                        </TotalPrice>
                        </DetailHistory>
                     
                     
                 ))}    
              

                
            </HistoryTransaction>
        </Container>
  )
}

export default Profile

const Container = styled.div`

background: #000000;
    height:100vh;
    display:flex;
    
    font-family:'Avenir';
    color: #FFFFFF;
   

`
const MyProfile = styled.div`
    display:flex;
    flex:50%;
    background-color: #000000;
    flex-direction:column;
`
const UserName = styled.div`
    font-family: Product Sans;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 44px;
margin-left:136px;

/* identical to box height */


color: #FFFFFF;
`
const DetailUser = styled.div`
    display:flex;
    margin-top:32px;
    margin-left:136px;
    
`
const ImgUser = styled.div`
   
    flex:10%;

    img{
        width: 180px;
height: 221.79px;
    }
`
const DataUser = styled.div`
    flex:40%;
    display:flex;
    flex-direction:column;
    margin-left:34px;
`
const FullName = styled.div`
    display:flex;
    flex-direction:column;
    
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 22px;
margin-bottom:36px;
/* identical to box height */


color: #616161;

`
const Email = styled.div`
  
    display:flex;
    flex-direction:column;
    
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 22px;
margin-bottom:36px;
/* identical to box height */


color: #616161;

`

const Phone = styled.div`
    
    display:flex;
    flex-direction:column;
    
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 22px;
margin-bottom:36px;
/* identical to box height */


color: #616161;
`

const HistoryTransaction = styled.div`
display:flex;
    flex:50%;
    flex-direction:column;

`
const Detail = styled.div`
    flex-direction:column;
    display:flex;
`
const DetailHistory = styled.div`
    background: rgba(205, 46, 113, 0.44);
    width: 419px;
height: 101px;
margin-left:136px;
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


