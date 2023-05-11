import React from 'react'
import sabkaBazarLogo from './images/SabkaBazar_Logo_Full_4x.png'
import { Box, Button, Container, HStack, IconButton, Image, Spacer, textDecoration } from '@chakra-ui/react'
import NavButton from './NavButton'
import { IoBag } from 'react-icons/io5'
import { NavLink, useNavigate, useNavigation } from 'react-router-dom'

export default function Navbar() {
  // const isLoggedIn = false
  // const text = isLoggedIn ? 'logout' : 'login'
  const navigator = useNavigate();
  const goToHomePage = () => {
    navigator('/')
  }
  const goToRegister = () => {
    navigator('/register')
  }
  return (
    <Container minW='80%' py='4px'>
      <HStack>
        <NavLink to='/'>
          <Image
            h={10}
            objectFit='contain'
            alt='SabkaBazarLogo'
            src={sabkaBazarLogo}
          />
        </NavLink>
        <Spacer />
        <HStack>
          <NavButton content="About Us" />
          <NavButton content="All Products" />
          <NavButton content="Help" />
        </HStack>
        <Spacer />
        <HStack>
          <NavLink to='/register'>
            <NavButton
              content='Register'
              // onClick={ () => goToRegister }
            />
          </NavLink>
          <NavLink to='/login'>
            <Button
              bg='accentColors.accentYellow'
              color='textColor.primaryText'
              borderRadius='36px'
              fontWeight='bold'
              py='16px'
              px='24px'
              _hover={
                {
                  bg: 'accentColors.accentDarkYellow'
                }
              }
            >
              Login
            </Button>
          </NavLink>
          <NavLink to='/cartpage'>
            <IconButton
                align='center'
                icon={<IoBag color='white' size='20px' />}
                bg='accentColors.accentBlue'
                p='8px'
                borderRadius='50%'
                aria-label='Add to Cart'
                _hover={
                    {
                        bg: 'accentColors.accentDarkBlue'
                    }
                }
            />
          </NavLink>
        </HStack>
      </HStack>
    </Container>
  )
}
