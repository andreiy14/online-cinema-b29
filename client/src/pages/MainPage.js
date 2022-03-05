import React from 'react'
import styled from 'styled-components'
import AfterLogin from '../components/AfterLogin'

function MainPage() {
  return (
    <Container>
      
        <AfterLogin />
    </Container>
  )
}

export default MainPage


const Container = styled.div`
    background-color: #000000;
    width:100%;
    height:100%;
    
    `