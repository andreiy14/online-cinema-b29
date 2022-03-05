import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import payment from '../assests/payment.png'
import { API } from "../config/api";
function MenuApprovement({id,setOpenModal})  {
    const [state, setState] = useState([])
    const idTrans = id
    console.log(idTrans + "idaprove")
    const navigate = useNavigate()
    const addApprove = async(text, ) =>{
        setState({
          ...state,
          status: text
        })
        console.log(state)
        // Configuration Content-type
      const config = {
        headers: {
        "Content-type": "application/json",
    
        },
      };
        //Data like
        const body = JSON.stringify(state);
        const response = await API.patch("/updatetransaction/" + idTrans, body, config);
        console.log(response)
   
     
    
      }
      
  return (
    <ModalBackground>
            
    <ModalContainer>
        
        
        <Body>
            
          
            <form >
            <Input>
              
                <NotePayment>
                      
                            <label onClick={()=>{addApprove("Approved"); }} style={{height: "45px", width:"70px",background:"green",cursor:"pointer"}} >Approved</label>
                            
                            <label  onClick={()=>{addApprove("Cancel")}} style={{height: "45px",width:"70px",background:"cancel", cursor:"pointer"}} >Cancel</label>
                           
                          <span onClick={()=>{setOpenModal(false);   window.location.reload(true)}}>Close</span>
                </NotePayment>
               
            </Input>
            
            </form>
        </Body>
     
    
    </ModalContainer>
</ModalBackground>
  )
}

export default MenuApprovement




const ModalBackground = styled.div`
     width: 100vw;
    height: 100vh;
    margin-top:-32px;
    margin-left: 500px;
    position: fixed;
    background: transparent;
    z-index:1;
    font-family:Avenir;

`
const ModalContainer = styled.div`
    margin-top: 80px;
  width: 350px;
height: 150px;

background: #0D0D0D;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
    
    display: flex;
    flex-direction: column;
`


const Body = styled.div`

flex: 50%;
    display: flex;
    flex-direction: column;
   margin-top: 12px;
    
   color: #0D0D0D;
    
    
`

const Header = styled.div`
        margin-top:36px;
        font-family: Avenir;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 107.91%;
        /* identical to box height, or 26px */

        text-align: center;

        color: #FFFFFF;
`

const Title = styled.div`
    font-family: Avenir;
font-style: normal;
font-weight: 900;
font-size: 24px;
line-height: 48px;
/* identical to box height, or 200% */
margin-left:38px;
margin-top:24px;


color: #FFFFFF;

`

const Input = styled.div`
    display:flex;
    flex-direction:column;
`
const NotePayment = styled.div`
  margin-left: 20px;
font-style: normal;
font-weight: normal;
font-size: 12px;
display:flex;
align-items:center;
justify-content:space-around;

color: #616161;
input[type='file'] {
    color: rgba(0, 0, 0, 0);
   
  }
  label{
      margin-top:12px;
    width: 159px;
height: 45px;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 17px;
/* identical to box height */

display: flex;
align-items: center;

color: #FFFFFF;
justify-content:center;
background: #CD2E71;
border-radius: 10px;
img{
    width: 25px;
height: 23.8px;
margin-left:8px;
}
  }
`
const InputAccount = styled.div`

margin-left: 38px;
    input[type='text']{
        width: 417px;
            height: 50px;
    
            background: rgba(188, 188, 188, 0.25);
        border: 2px solid #BCBCBC;
            box-sizing: border-box;
        border-radius: 5px;
        padding-left:12px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
    }
   

`

const BtnPay = styled.div`
    margin-top:36px;
    margin-left:36px;
    button{
        width: 417px;
height: 45px;
left: 34px;
top: 354px;

background: #CD2E71;
border-radius: 10px;
border:none;
    }
`