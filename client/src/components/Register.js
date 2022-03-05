import React, {useEffect, useState}from 'react'
import styled from 'styled-components'
import './Register.css'
import {useNavigate} from "react-router-dom"


import { API } from "../config/api";
function Register({setOpenModal, setModalLogin}) {
    const [state, setState] = useState({
        email:'',
        fullname:'',
        password:''
        });
    const handleOnChange = (e) =>{
        setState({
              ...state,
              [e.target.name] :   e.target.value
            })
            console.log(e.target.value)
          }
    const navigate = useNavigate()
    const handleOnSubmit = async (e)=>{
        e.preventDefault();
       
             // Configuration Content-type
         const config = {
         headers: {
           "Content-type": "application/json",
       
         },

       };
       // Data body
const body = JSON.stringify(state);
// Insert data user to database
const response = await API.post("/register", body, config); 
console.log(response)
setOpenModal(false);

navigate("/")
    }
    
return (
        <ModalBackground>
            <ModalContainer>
                <Title>
                <h1>Register</h1>
                </Title>
                <form onSubmit={handleOnSubmit}>
                <Body>
                <input  type="email" onChange={handleOnChange} value={state.email} name="email"  placeholder="Email"/>
            <input type="password" onChange={handleOnChange} value={state.password}   name="password" placeholder="Password"/>
            <input type="text" onChange={handleOnChange}  value={state.fullname}  name="fullname" placeholder="FullName"/>
                </Body>
                <Footer>
                <button id="login"  >Register</button>
          <button id="cancelBtnn"  onClick={() => {
      setOpenModal(false);
      
      setModalLogin(true)
      
    }} >Already have an account ?  Klik Here</button>
                </Footer>
                </form>
            </ModalContainer>
        </ModalBackground>
  )
}

export default Register

const ModalBackground = styled.div`
     width: 100vw;
    height: 100vh;
    margin-left: 500px;
    position: fixed;
    background: transparent;
    z-index:1;
    font-family:Avenir;

`
const ModalContainer = styled.div`
    margin-top: 80px;
  width: 416px;
  height: 408px;
  
  background: #1F1F1F;
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
   margin-top: -12px;
    align-items: center;
    
    text-align: center;
    color: #6A6A6A;
    input{
        z-index: 1;
    margin-top: 16px;
    color: #6A6A6A;
    width: 350px;
height: 50px;


background: rgba(210, 210, 210, 0.25);
border: 2px solid #D2D2D2;
box-sizing: border-box;
border-radius: 5px;
    }
`

const Footer = styled.div`
     margin-top: 50px;
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFF
`