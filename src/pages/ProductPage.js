import React, {useEffect } from 'react'
import ProductSection from '../components/ProductSection'
import SearchBar from '../components/SearchBar'
import { Box, Container } from '@chakra-ui/react'
import queryString from 'query-string';

export default function ProductPage() {



  useEffect( () => {
    window.scrollTo(0, 0)
  }, [] )
  return (
    <Container minW='100%' bg='backgroundColors.secondaryBG' pb='64px'>
        <Container minW='80%' py='16px'>
            <SearchBar />
        </Container>
        <Container minW='80%' align='left'>
            <ProductSection />
        </Container>
    </Container>
  )
}
