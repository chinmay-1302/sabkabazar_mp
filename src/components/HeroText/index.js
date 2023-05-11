import { Container, Heading } from '@chakra-ui/react'
import React from 'react'

export default function HeroText() {
  return (
    <Container align='center' w='100%' justifyContent='center'>
        <Heading as='h1' fontWeight='extrabold' size='3xl' color='textColors.primaryText' w='100%' >YOUR ONE-STOP SHOP</Heading>
        <Heading fontWeight='semibold' size='xl' color='textColors.secondaryText' >FOR ALL YOUR NEEDS</Heading>
    </Container>
  )
}