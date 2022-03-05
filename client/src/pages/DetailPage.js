import React, { useState,useEffect } from 'react'
import DetailFilm from '../components/DetailFilm'
import Header from '../components/Header';
import HeaderProfile from '../components/HeaderProfile'

import { API } from '../config/api';
function DetailPage() {
  const [sign,setSign] = useState(true)
  const [user,setUser] = useState([]);
  const getUser = async () => {
      try {
        const response = await API.get('/getuser');
        // Store product data to useState variabel
        setUser(response.data.data);
        console.log(response.data.data.data)
        setSign(true)
       
      } catch (error) {
        console.log(error);
      setSign(false)
      }
    };
    useEffect(() => {
      getUser()
      
      
     }, []);
  return (
    <div>
         {sign?( <HeaderProfile />):( <Header />)}
        
        
        <DetailFilm/>
    </div>
  )
}

export default DetailPage