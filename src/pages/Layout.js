import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { Container } from '@chakra-ui/react'

export default function Layout() {
  return (
    <Container minW='100%' m={0} p={0}>
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  )
}
