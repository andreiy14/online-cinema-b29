import React from 'react'
import styled from 'styled-components'
import FormAdd from '../components/FormAdd'
import HeaderAdmin from '../components/HeaderAdmin'
function AddFilm() {
  return (
    <Container>
        <HeaderAdmin />
        <FormAdd />
    </Container>
    
  )
}

export default AddFilm
const Container = styled.div`
    height:200vh;
    display:flex;
    flex-direction:column;


`