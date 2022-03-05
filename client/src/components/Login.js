import React, {useState,useContext} from 'react'
import styled from 'styled-components'
import './Login.css'
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../context/userContext';
import { API } from "../config/api";
function Login({setOpenModal,setModalRegister}) {
    const [login, setLogin] = useState({
  email:'',
  password:''
  });
  const [state, dispatch] = useContext(UserContext);
console.log(state)
  const handleOnChange = (e) =>{
    setLogin({
      ...login,
      [e.target.name] :   e.target.value,
      
    })
   
  };
  const navigate = useNavigate()
 const handleOnSubmit =  async(e)=>{
   try{
    e.preventDefault();
    // Configuration Content-type
    const config = {
    headers: {
      "Content-type": "application/json",
    },
    };

    // Data body
    const body = JSON.stringify(login);

    // Insert data user to database
      const response = await API.post("/login", body, config); 
      console.log(response)
      if (response?.status === 200) {
        // Send data to useContext
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: response.data.data,
        });

        // Status check
        if (response.data.data.status == 'admin') {
            navigate('/adminpage');
          } else  {
            navigate('/mainpage');
          }
         
        
       console.log("success")
      }

   }catch (error) {
     navigate("/")




   }
    
   

  }
  return (
        <ModalBackground>
            <ModalContainer>
                <Title>
                <h1>Login</h1>
                </Title>
                <form onSubmit={handleOnSubmit}>
                <Body>
                <input onChange={handleOnChange} value={state.email}   type="email" name="email"  placeholder="Email"/>
            <input type="password"  onChange={handleOnChange} value={state.password}   name="password" placeholder="Password"/>
                </Body>
                <Footer>
                <button id="login"  >Login</button>
          <button id="cancelBtnn"  onClick={() => {
      setOpenModal(false);
      
      setModalRegister(true)
      
    }}>Don't have an account ? Klik Here</button>
                </Footer>
                </form>
            </ModalContainer>
        </ModalBackground>
  )
}

export default Login

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
     margin-top: 80px;
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`