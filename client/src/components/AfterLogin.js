import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import img from '../assests/deadpool.png'
import spiderman from '../assests/spiderman.png'
import Header from './Header'
import HeaderProfile from './HeaderProfile'
import {useNavigate} from "react-router-dom"
import { API } from '../config/api';
function AfterLogin() {
    const [sign, setSign] = useState(false)
    const Navigate = useNavigate()
    const [film, setFilm] = useState([]);
   
    const getFilm = async () => {
        try {
          const response = await API.get('/getfilms');
          // Store product data to useState variabel
          setFilm(response.data.data);
          console.log(response.data.data)
          
         
        } catch (error) {
          console.log(error);
        }
      };
      const detailFilm = (id)=>{
        Navigate('/detailpage/'+ id)
      }
 // Call function get products with useEffect didMount here ...
 useEffect(() => {
 
  getFilm();
 
}, []);
  return (
    <Container>
         <HeaderProfile  />
      
         <ImgMain style={{background: `url(${img})`}}> 
             <TitleFilm><h1 style={{ color:"#A52620"}}>DEAD</h1>
                            <h1 style={{marginTop:"-30px", color:"white"}}>POOL</h1>
             </TitleFilm>

             <DetailFilm>
                <h1 style={{marginTop:"-28px", color:"#FFFFFF"}}>Action</h1>

                <h1 style={{marginTop:"-30px", color:"#CD2E71", fontFamily:"Avenir"}}>Rp 99,000</h1>
                <p style={{fontSize: "14px",lineHeight: "25px",color: "#bfbdbd",fontStyle: "normal",
                            fonWeight: "normal",fontFamily:"Avenir",marginTop:"-12px",width:"700px"}}>
                                Hold onto your chimichangas, folks. From the studio that brought you all 3 Taken films comes the block-busting, fourth-wall-breaking masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL is a giddy slice of awesomeness packed with more twists than Deadpool’s enemies’ intestines and more action than prom night. Amazeballs!
                                </p>
                <button style={{width: "100px",
                                    height: "40px", 
                                    background: "#CD2E71",
                                    borderRadius:" 5px",
                                    border:"none",
                                    fontFamily:"Avenir",
                                    color:"#d4d2d2",
                                    fontStyle:'normal'
                                    }}>Buy Now</button>
             </DetailFilm>
         
         
        
        </ImgMain>
        <ListFilm>
            <h1>List Film</h1>
            <Images>
        {film.map((item,index) =>(
           
            <ImgList key={index}>
               <img onClick={()=>{detailFilm(item.id)}} src= {item.image} alt="" />
            </ImgList>
          
        ))}    
              </Images>
           
        </ListFilm>
    </Container>
  )
}

export default AfterLogin
const Container = styled.div`
    background: #000000;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family:'Avenir';
    flex-direction:column;
   
    
   
   
`

const ImgMain = styled.div`
    margin-top:68px;
    width: 1081px;
height: 200%;
background-color:red;
z-index:0;

border-radius: 5px;
`
const TitleFilm = styled.div`
    margin-left:79px;
    font-family:Avenir;
font-style:normal;
font-weight: 900;

font-size: 28px;
line-height: 48px;

`

const DetailFilm = styled.div`
    margin-left:79px;
    font-family:Avenir;
    margin-top:-12px;
    font-style: normal;
    font-weight: 900;
    font-size: 10px;
    line-height: 48px;
    h1{
        font-family:Avenir;
    }

`

const ListFilm = styled.div`
color:white;
background-color:#000000;
width: 1205px;
height: 400px;
margin-top: 12px;



`
const Images = styled.div`
    display:flex;
    margin-left:8px;
`
const ImgList = styled.div`
    margin-right:20px;
    img{
        width: 180px;
height: 250px;
border-radius: 5px;
    }
    
`