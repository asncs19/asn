import React from 'react'
import styled from 'styled-components'

const Frame = styled.div` 
    width: 400px;
    background-color: white;
    
`

const InnerDiv = styled.div` 
display: flex;
flex-direction: column;
padding: 5px;
`
const ImageDiv = styled.div`
border: 2px solid black;
background-color: black;
`
const Image = styled.img` 
    width: 100%;
    height: 100%;
`
const Footer = styled.div` 
 padding: 10px;
 margin: 0px;
 background-color: black;
`

const HeadingsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PriceDiv = styled.div` 
display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
`

const Heading = styled.p`
    color: grey;
`
const Price = styled.h4`
    color: white;
`

const TopNFT = () => {
    return (
        <>
            <Frame>
                <InnerDiv>
                    <ImageDiv>
                        <Image src="/Top.png" />
                    </ImageDiv>
                    
                    <Footer>
                        <HeadingsDiv>
                            <Heading>Current Bid</Heading>
                            <Heading>Ending In</Heading>
                        </HeadingsDiv>
                        <PriceDiv>
                            <Price>1.90 ETH</Price>
                            <Price>6h 59m</Price>
                        </PriceDiv>
                    </Footer>
                </InnerDiv>

            </Frame>
        </>
    )
}

export default TopNFT