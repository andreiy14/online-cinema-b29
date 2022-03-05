import React, {useState, useContext,useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link,useNavigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import DetailPage from './pages/DetailPage';
import ListFilmUser from './pages/ListFilmUser';
import ProfilePage from './pages/ProfilePage'
import { UserContext } from './context/userContext';
import { API, setAuthToken } from './config/api';
import AfterLogin from './components/AfterLogin';
import MainPage from './pages/MainPage';
import AdminPage from './pages/AdminPage';
import Tes from './pages/Tes';
import AddFilm from './pages/AddFilm';
import ListFilmCategory from './pages/ListFilmCategory';



function App() {
  const [state, dispatch] = useContext(UserContext);
 
  const navigate = useNavigate()
 // Redirect Auth here ...
 useEffect(() => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  console.log(state.user)
 // Redirect Auth
  if (state.isLogin == false) {
    navigate("/");
   
  } else {
    if(state.user.status=="admin"){
      navigate("/adminpage")}
      else if(state.user.status=="client") {
        navigate('/mainpage')
        
      }
  }
  
}, [state]);
// Create function for check user token here ...
const checkUser = async () => {
  try {
    const response = await API.get('/check-auth');

    // If the token incorrect
    if (response.status === 404) {
      return dispatch({
        type: 'AUTH_ERROR',
      });
    }

    // Get user data
    let payload = response.data.data.user;
    console.log(payload)
    // Get token from local storage
    payload.token = localStorage.token;

    // Send data to useContext
    dispatch({
      type: 'USER_SUCCESS',
      payload,
    });
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  checkUser();
}, []);
  return (
  
      <Routes>
        <Route exact path="/" element= {<LandingPage/>} />
        <Route exact path="/detailpage/:id" element= {<DetailPage/>} />
        <Route exact path="/listfilm" element= {<ListFilmUser/>} />
        <Route exact path="/user" element= {<ProfilePage/>} />
        <Route exact path="/mainpage" element= {<MainPage/>} />
        <Route exact path="/adminpage" element= {<AdminPage/>} />
        <Route exact path="/addfilm" element= {<AddFilm/>} />
        <Route exact path="/getfilmbasedcategory/:id" element= {<ListFilmCategory/>} />
      </Routes>
   
  );
}

export default App;
