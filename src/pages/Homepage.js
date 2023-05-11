import React from 'react'
import SearchBar from '../components/SearchBar'
import HeroText from '../components/HeroText'
import CategoryCardContainer from '../components/CategoryCardContainer'
import NewCollection from '../components/NewCollection'
import ProductsContainer from '../components/ProductsContainer'
import { Button, Container, Text } from '@chakra-ui/react';

export default function Homepage() {
  return (
    <div>
      {/* <Text fontSize='50px' color='textColors.primaryText' fontWeight='medium'>Hello</Text> */}
      {/* <NavButton content='About Us'/>
      <Buttons content='Login'/> */}
      <Container minW='100%' h='70vh' bg='backgroundColors.secondaryBG'>
        <Container minW='80%' py='16px'>
          <SearchBar />
        </Container>
        <Container minW='100%' py='176px' m='0px' >
          <HeroText />
        </Container>
      </Container>
      <Container bg='linear-gradient(180deg, #CBE3FB 0%, #F6F8FC 100%);' minW='100%'>
        <Container minW='80%'>
          <CategoryCardContainer />
        </Container>
      </Container>
      <Container bg='backgroundColors.tertiaryBG' minW='100%'>
        <Container minW='80%' py='32px'>
          <NewCollection />
        </Container>
        <Container minW='80%' py='16px'>
          <ProductsContainer />
        </Container>
        <Container minW='100%' align='center' py='16px'>
          <Button
            variant='link'
            color='textColors.primaryText'
            fontSize='16px'
            p='16px'
            style={
              {
                textDecoration: 'underline'
              }
            }
          >
            View More
          </Button>
        </Container>
      </Container>
    </div>
  )
}
