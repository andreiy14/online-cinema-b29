import React ,{useState, useEffect} from 'react'
import styled from 'styled-components'
import icon from '../assests/thumbnail.png'
import {useNavigate} from 'react-router-dom'
import { API } from "../config/api";
function FormAdd() {
    const navigate = useNavigate()
    const [preview, setPreview] = useState(null); //For image preview
    const [state, setState] = useState({
        title:'',
        category:'',
        price:'',
        image:'',
        linkfilm:'',
        description:'',
        });
        const handleOnChange = (e) =>{
            setState({
                  ...state,
                  [e.target.name]:
                  e.target.type === 'file' ? e.target.files : e.target.value,
                })
                console.log(e.target.value)
                           // Create image url for preview
    if (e.target.type === "file") {
        let url = URL.createObjectURL(e.target.files[0]);
        setPreview(url);
      }
                
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
  formData.set("price", state.price);
  formData.set("linkfilm", state.linkfilm);
  formData.set("title", state.title);
  formData.set("description",state.description);
  formData.set("category", state.category);
  ;
  
 
  
  // Insert data user to database
      const response = await API.post("/addfilmm", formData, config); 
      console.log(response)
    
        console.log(state)
        console.log('success')
        navigate('/adminpage')
    
}catch(error){
    console.log(error)
}
        
            }
    
  return (
        <Container>
            <Title>
                <h1>Add Film</h1>
            </Title>
            <form onSubmit={handleOnSubmit}>
            {preview && (
                <div>
                  <img
                    src={preview}
                    style={{
                      maxWidth: "150px",
                      maxHeight: "150px",
                      objectFit: "cover",
                      marginLeft:"120px"
                    }}
                    alt="preview"
                  />
                </div>
              )}
                 <InputTitleImage>
                <InputTitle>
                <input type="text" onChange={handleOnChange}  placeholder='title' name="title" />
                </InputTitle>
                <InputImage>
                <label for="file">Attach Thumbnail  <img src={icon}/> </label>
                            <input onChange={handleOnChange} type="file"   id="file" name="image"  style={{display:'none'}}  />
               
                </InputImage>
            </InputTitleImage>
            <InputCategory>
                <input onChange={handleOnChange} type='text' name="category" placeholder='category'   />
            </InputCategory>
            <InputPrice>
            <input  onChange={handleOnChange} type='text' name="price" placeholder='price'   />
                </InputPrice>

            <InputLink>
            <input onChange={handleOnChange} type='text' name="linkfilm" placeholder='linkfilm'   />
            </InputLink>
            
            <InputDesc>
            <textarea onChange={handleOnChange} name='description'  />
            </InputDesc>
            <BtnSubmit>
                <button>Add Film</button>
            </BtnSubmit>
            </form>

        </Container>
  )
}

export default FormAdd

const Container = styled.div`
    height:200vh;
    display:flex;
    flex-direction:column;
    background-color:#000000;
    color:white;
`
const Title = styled.div`
    font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 33px;
margin-left:86px;
/* identical to box height */


color: #FFFFFF;


`
const InputTitleImage = styled.div`
    margin-left:86px;
    display:flex;
    
`
const InputTitle = styled.div`

input{
    z-index: 1;
margin-top: 16px;
color: #6A6A6A;
width: 927px;
height: 50px;


background: rgba(210, 210, 210, 0.25);
border: 2px solid #D2D2D2;
box-sizing: border-box;
border-radius: 5px;
}
`

const InputImage = styled.div`
margin-left:12px;
    input[type='file'] {
    color: rgba(0, 0, 0, 0);
   
  }
  label{
      margin-top:12px;
    width: 213px;
height: 50px;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 17px;

display: flex;
align-items: center;
color: #FFFFFF;
justify-content:center;
background: rgba(210, 210, 210, 0.25);
border: 2px solid #D2D2D2;
border-radius: 10px;
img{
    width: 25px;
height: 23.8px;
margin-left:8px;
}
  }
`

const InputCategory = styled.div`
margin-left:86px;
    input{
    z-index: 1;
margin-top: 16px;
color: #6A6A6A;
width: 1157px;
height: 50px;


background: rgba(210, 210, 210, 0.25);
border: 2px solid #D2D2D2;
box-sizing: border-box;
border-radius: 5px;
}
`
const InputPrice = styled.div`
margin-left:86px;
    input{
    z-index: 1;
margin-top: 16px;
color: #6A6A6A;
width: 1157px;
height: 50px;


background: rgba(210, 210, 210, 0.25);
border: 2px solid #D2D2D2;
box-sizing: border-box;
border-radius: 5px;
}
`
const InputLink = styled.div`
margin-left:86px;
    input{
    z-index: 1;
margin-top: 16px;
color: #6A6A6A;
width: 1157px;
height: 50px;


background: rgba(210, 210, 210, 0.25);
border: 2px solid #D2D2D2;
box-sizing: border-box;
border-radius: 5px;
}
`
const InputDesc =styled.div`
margin-left:86px;
textarea{
    color: #ABABAB;
      margin-top:20px;
      position: absolute;
width: 1157px;
height: 177px;


background: rgba(210, 210, 210, 0.25);
border: 2px solid #D2D2D2;
box-sizing: border-box;
border-radius: 5px;
  }

`


const BtnSubmit = styled.div`
margin-left:1014px;
margin-top:240px;
button{
    width: 230px;
height: 40px;
border:none;

background: #CD2E71;
border-radius: 5px;
}

`
