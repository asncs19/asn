import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import TopNFT from './components/TopNFT'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
const Section = styled.section`
  height: 90vh;
`

const Container = styled.div`
  display: flex;
  padding: 20px 5px;
`

const LeftDiv = styled.div`
margin-right: 30px;
`
const HeroText = styled.h1`
color: white;
font-size: 90px;
margin-right: 30px;
`

const Para = styled.p` 
color: white;
display: flex;
margin: 30px 0px;
font-size: 20px;
`

const StartButton = styled(Button)` 
`

const RightDiv = styled.div`

`


const Home = () => {
  return (
    <>
      <Section>
        <Container>
          <LeftDiv>
            <HeroText>
              Buying and Selling in the world of NFTs
            </HeroText>
            <Para>
              Welcome to the wolrd of NFTs Art,you can buy and sell art to your heart's content and enjoy all the cool feature from us
            </Para>

            <StartButton variant="contained" endIcon={<ArrowForwardOutlinedIcon />}>
              Let's get Started
            </StartButton>

          </LeftDiv>


          <RightDiv>
            <TopNFT />
          </RightDiv>
        </Container>


      </Section>
    </>
  )
}

export default Home