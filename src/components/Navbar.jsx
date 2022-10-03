import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const NavBar = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
`
const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const NavButtons = styled.a`
  text-decoration: none;
  color: white;
  margin-right: 35px;
  font-size: large;
`

const Logo = styled.h2`
  color: white;
  font-family: 'Pacifico', cursive;
  font-weight: 400;
  font-size: 40px;
`

const Navbar = () => {
  return (
    <>
      <NavBar>
        <Logo>artchain</Logo>
        <ButtonsDiv>
            <NavButtons>Explore</NavButtons>
            <NavButtons>Stats</NavButtons>
            <NavButtons>Resource</NavButtons>
            <NavButtons>About</NavButtons>
            <NavButtons>Wallets</NavButtons>
            <AccountCircleOutlinedIcon sx={{ color:"white" , width: "30px" , height: "30px" }}/>
        </ButtonsDiv>
      </NavBar>

    </>
  )
}

export default Navbar