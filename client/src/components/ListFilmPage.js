import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import img from '../assests/spiderman.png'
import { API } from '../config/api';
function ListFilmPage() {
    const Navigate = useNavigate()
    const [film, setFilm] = useState([]);
    const getFilm = async () => {
        try {
          const response = await API.get('/getfilmapproved');
          // Store product data to useState variabel
          setFilm(response.data.data);
          console.log(response.data.data)
          
         
        } catch (error) {
          console.log(error);
        }
      };
      const detailFilmm = (id)=>{
        Navigate('/detailpage/'+ id)
        
      }
      useEffect(() => {
 
        getFilm();
       
      }, []);
  return (
    <Container>
       <Title><h1>My List Film</h1></Title>
        <ListFilm>
        {film.map((item,index) =>(
           
           <Film key={index}>
           <img onClick={()=>{detailFilmm(item.idFilm); console.log(item.idFilm)}} src={item.image} alt="" />
       </Film>
         
       ))}    
            
            
        </ListFilm>
    </Container>
  )
}

export default ListFilmPage

const Container = styled.div`
    background: #000000;
    height:100vh;
    display:flex;
    flex-direction:column;
    font-family:'Avenir';
    color: #FFFFFF;
 
    
`
const Title = styled.div`
    margin-left:58px;
`
const ListFilm = styled.div`
    display:flex;
    margin-left:58px;
    margin-top:24px;
`
const Film = styled.div`
margin-right:32px;

    img{
        width: 180px;
height: 250px;
border-radius: 5px;
    }
`