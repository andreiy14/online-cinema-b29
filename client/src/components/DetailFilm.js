import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import img from '../assests/spiderman.png'
import ReactPlayer from 'react-player'
import video from '../assests/video.mp4'
import icon from '../assests/logout.png'
import iconPlay from '../assests/Vector.png'
import MenuBuy from './MenuBuy'
import {useNavigate,useParams} from 'react-router-dom'
import { API } from '../config/api';

function DetailFilm() {
    let {id} = useParams();
    const idFilm = id
   const  [play,setPlay] = useState(false)
    const [open, setOpen] = useState(false)
    console.log(id+ "idnya")
    const [film, setFilm] = useState([]);
    const [user,setUser] = useState([]);
    const getUser = async () => {
        try {
          const response = await API.get('/getuser');
          // Store product data to useState variabel
          setUser(response.data.data.data);
          console.log(response.data.data  )
          setPlay(true)
         
        } catch (error) {
          console.log(error);
        setPlay(false)
        }
      };
      const notif = () =>{
          alert('please buy')
      }
    const getFilm = async (idFilm) => {
        try {
          const response = await API.get('/getfilm/'+ idFilm);
          // Store product data to useState variabel
          setFilm(response.data.data);
          console.log(response.data.data)
          
         
        } catch (error) {
          console.log(error);
        }
      };
 // Call function get products with useEffect didMount here ...
 useEffect(() => {
 getUser();
  getFilm(idFilm);
 
}, []);
  return (
    <Container>
        <LeftPage>
            <ImgCover>
            <img src={film.image} alt=" " />
            </ImgCover>
        </LeftPage>
        <RightPage>
            <Main>
                <TitleButton>
                    <Title><h1>{film.title}</h1></Title>
                  
                    <BtnBuy>
                       {play?( <button onClick={() => {  setOpen(true) } }>Buy Now</button>):( <button onClick={() => {  notif() } }>Buy Now</button>)}
                       
                    </BtnBuy>
                </TitleButton>
                <PlayVideo >
                    {play?(  <ReactPlayer  height="300px" width="850px" controls url={film.linkfilm} light={film.image} playing playIcon={<img src={iconPlay} alt=""/>}/>):
                    ( <AlertBuy>
                        <ReactPlayer   height="300px" width="850px"  playing={false}  light={film.image}  />
                    
                     </AlertBuy>
                    )

                   }
                   
                </PlayVideo>
                <Genre><span>{film.category}</span></Genre>
              
                <Price><span>Rp. {film.price},000</span></Price>
                <Desc>
                    <p>{film.description}</p>
                </Desc>
            </Main>
            
        </RightPage>
        {open && <MenuBuy setOpenModal={setOpen} film={film.id} user={user.id} title={film.title} price={film.price} numberAcc={user.numberaccount}  />}
    </Container>
  )
}

export default DetailFilm


const Container = styled.div`
    height:150vh;
    background-color: #000000;
    display:flex;
 

`
const LeftPage = styled.div`
    background-color:#000000;
    flex:30%;    

`
const ImgCover = styled.div`
    margin-top: 36px;
    margin-left:48px;
    position: absolute;
        img{
        
            width: 349px;
            height: 485px;
        }

`
const RightPage = styled.div`
        background-color:#000000;
        flex:70%;
        display:flex;
        flex-direction:column;
`

const Main = styled.div`
    margin-left:36px;
`
const TitleButton = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

`
const BtnBuy = styled.div`
    margin-right:56px;
    button{
        width: 100px;
        height: 40px;
        background: #CD2E71;
        border-radius: 5px;
        font-style: normal;
        font-weight: 900;
        font-size: 14px;
        line-height: 19px;
        border:none;

        color: #FFFFFF;
            }

`
const Title = styled.div`
    
        h1{
            font-family: Avenir;
font-style: normal;
font-weight: 900;
font-size: 48px;
line-height: 66px;
color: #FFFFFF;
        }
`

const PlayVideo = styled.div`

`

const Genre = styled.div`

font-family: Avenir;
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 48px;
color: #7E7E7E;
margin-top:12px;
`

const Price = styled.div`
font-family: Avenir;
font-style: normal;
font-weight: 900;
font-size: 23px;
line-height: 48px;


color: #CD2E71;
`

const Desc = styled.div`
    font-family: Avenir;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 48px;


color: #FFFFFF;

`
const AlertBuy = styled.div`

`