import { Container, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import LogInSection from '../components/LogInSection'
import SBLogo from './images/SabkaBazar_Logo_Full.png'

export default function Login() {
  return (
    <VStack
      minW='100%'
      minH='95vh'
      justifyContent='center'
      alignItems='center'
      p='32px'
      gap='36px'
      bg='linear-gradient(243.18deg, #FFFFFF 0%, #CBE3FB 98.4%);'
    >
      <Image
        maxW='15%'
        src={SBLogo}
      />
      <Container
        minW='80%'
        // minH='95vh'
        justifyContent='center'
        alignItems='center'
        centerContent
      >
       <LogInSection />
      </Container>
    </VStack>
  )
}
