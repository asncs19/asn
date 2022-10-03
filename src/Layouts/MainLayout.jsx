import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Container = styled.div`
  padding: 0px 80px;
  background-color: black;
`

const MainLayout = () => {
  return (
    <>
        <Container>
          <Navbar />
          <Outlet />
        </Container>
        
    </>
  )
}

// UX Ui Desing 
// https://xd.adobe.com/view/c7af8e6f-4b78-4b33-b2f2-44dc7a6959e9-92fc/?fullscreen

export default MainLayout