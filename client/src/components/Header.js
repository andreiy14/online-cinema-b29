import React, {useState} from 'react'
import styled from 'styled-components'
import icon from '../assests/Icon.png'
import Login from './Login.js'
import Register from './Register'
import App from '../App'
function Header( ) {
     const [login, setLogin] = useState(false);
     const [register, setRegister] = useState(false)
     
  return (
    <Container>
        <HeaderLeft>
            <IconHeader>
                <img src={icon} alt="" />
            </IconHeader>
        </HeaderLeft>
        <HeaderRight>
            <ButtonHeader>
               <BtnLogin>
                    <button onClick={() => {  setLogin(true);  } }>Login</button>
               </BtnLogin>
               <BtnRegister>
               <button onClick={() => {  setRegister(true) } }>Register</button>
               </BtnRegister>
            </ButtonHeader>
        </HeaderRight>
        {login && <Login setOpenModal={setLogin} setModalRegister={setRegister}  />}
        {register && <Register setOpenModal={setRegister} setModalLogin={setLogin}      />}
     
    </Container>
  )
 
}

export default Header
 
const Container = styled.div`
    width : 100%;
    height:115px;
    background-color:#000000;
    display:flex;
    font-family:Avenir
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
const ButtonHeader = styled.div`
     display:flex;
     margin-right:56px;
     margin-top:41px;
`

const BtnLogin = styled.div`
   
   button{
        width: 100px;
    height: 40px;
    background: #000000;
    border-radius: 5px;
    font-family: Avenir;
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    border:none;
    margin-right:12px;
    }
`
const BtnRegister = styled.div`
    
    
    button{
        width: 100px;
    height: 40px;
    background: #CD2E71;
    border-radius: 5px;
    font-family: Avenir;
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    border:none;
    }

`