import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Container = styled.div`
  padding: 0px 30px;
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




export default MainLayout