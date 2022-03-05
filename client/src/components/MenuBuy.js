import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import payment from '../assests/payment.png'
import { API } from "../config/api";
function MenuBuy({title,price,numberAcc,film,user,setOpenModal}) {
    const navigate = useNavigate()
    const userId = user
    const filmTitle = film
    const pricefilm = price
    const [state, setState] = useState({
        idUser:userId,
        film:filmTitle,
        status:'pending',
        image:'',
      
      
        });
        const handleOnChange = (e) =>{
            setState({
                  ...state,
                  [e.target.name]:
                  e.target.type === 'file' ? e.target.files : e.target.value,
                })
                console.log(e.target.value)
     
              }

              const handleOnSubmit = async (e)=>{
            try{    e.preventDefault();
               console.log(state)
                    // Configuration Content-type
const config = {
    headers: {
      "Content-type":"multipart/form-data",
  
    },
  };
  
  // Store data with FormData as object
  const formData = new FormData();
  formData.set('image', state.image[0], state.image[0].name);
  formData.set("status", state.status);
  formData.set("idFilm", state.film);
  formData.set("idUser", state.idUser);
  

  ;
  
 
  
  // Insert data user to database
      const response = await API.post("/buyfilm", formData, config); 
      console.log(response)
    
        console.log(state)
        console.log('success')
        setOpenModal(false)
}catch(error){
    console.log(error)
}
        
            }
    
  return (
    <ModalBackground>
            
    <ModalContainer>
        
        
        <Body>
            <Header>
                <span style={{}}>Cinema</span><span style={{color:"#CD2E71"}}>Online</span><span>: {numberAcc}</span>
            </Header>
            <Title>
                <span>{title}</span>
            </Title>
            <Price> 
                <span>Total : </span> <span style={{color:"#CD2E71"}}>Rp. {price},000</span>
            </Price>
            <form onSubmit={handleOnSubmit}>
            <Input>
                <InputAccount>
                    <input type='text' onChange={handleOnChange} name="numberaccount" placeholder="Input Your Account Number" />
                    
                    
                </InputAccount>
                <NotePayment>
                      
                        <label for="file">Attach Payment  <img src={payment}/> </label>
                            <input type="file"   onChange={handleOnChange}  id="file" name="image"  style={{display:'none'}}  />
                            <input type="text"  onChange={handleOnChange} name="status" style={{display:'none'}} />
                            <input type="text"  onChange={handleOnChange} name="film"  style={{display:'none'}} />
                            <input type="text"  onChange={handleOnChange} name="idUser"  style={{display:'none'}} />
                            <input type="text"  onChange={handleOnChange} name="price"  style={{display:'none'}} />
                            <span>*transfers can be made to holyways accounts</span>
                </NotePayment>
               
            </Input>
            <BtnPay>
                <button>Pay</button>
            </BtnPay>
            </form>
        </Body>
     
    
    </ModalContainer>
</ModalBackground>
  )
}

export default MenuBuy




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
  width: 484px;
height: 426px;

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
const Price = styled.div`
font-family: Avenir;
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 48px;

margin-left:38px;
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