import { Container, HStack, Heading } from '@chakra-ui/react'
import React from 'react'
import SearchBar from '../components/SearchBar'
import ProductContainer from '../components/ProductsContainer'

export default function SearchResultsPage() {
  return (
    <Container
        minW='100%'
        bg='backgroundColors.secondaryBG'
        px={0}
        m={0}
    >
        <Container
            minW='80%'
            py='16px'
            align='left'
        >
            <SearchBar />
        </Container>
        <Container
            minW='80%'
            p='4px'
            align='left'
        >
            <HStack
                minW='80%'
                align='left'
                py='32px'
            >
                <Heading
                    fontSize='32px'
                    fontWeight='bold'
                    color='textColors.primaryText'
                >
                    Search Result for 
                </Heading>
                <Heading as='i'
                    fontSize='32px'
                    fontWeight='bold'
                    color='textColors.primaryText'
                >
                    {/* {props.productName} */}
                    Lipstick
                </Heading>
            </HStack>
        </Container>
        <Container
            bg='backgroundColors.tertiaryBG'
            minW='100%'
            py='64px'
        >
            <Container minW='80%' bg='backgroundColors.tertiaryBG'>
                <ProductContainer />
            </Container>
        </Container>
    </Container>
  )
}