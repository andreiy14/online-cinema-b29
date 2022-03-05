import React from 'react'
import styled from 'styled-components'
import MainAdmin from '../components/MainAdmin'


function AdminPage() {
  return (
    <Container>
      
       <MainAdmin/>
    </Container>
  )
}

export default AdminPage


const Container = styled.div`
    background-color: #000000;
    width:100%;
    height:100%;
    
    `