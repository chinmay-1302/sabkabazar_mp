import { Container, Divider, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SabkaBazar from './images/SabkaBazar_Logo_Full_Footer.png'

export default function Footer() {
  return (
    <Container minW='100%' bg='accentColors.accentDark' p='32px'>
        <HStack minW='100%' bg='accentColors.accentDark' justifyContent='space-between' p='16px' align='top'>
            <Image
                h='40px'
                aspectRatio='5'
                src={SabkaBazar}
            />
            <HStack gap='86px' p={0} align='top'>
                <VStack gap='8px' align='left'>
                    <Heading
                        fontSize='20px'
                        fontWeight='bold'
                        color='white'
                    >
                        Information
                    </Heading>
                    <VStack
                        gap='8px'
                        fontSize='16px'
                        fontWeight='medium'
                        color='backgroundColors.tertiaryBG'
                        align='left'
                    >
                        <Text>
                            Help
                        </Text>
                        <Text>
                            Track your Order
                        </Text>
                        <Text>
                            Delivery
                        </Text>
                        <Text>
                            Raise an Issue
                        </Text>
                    </VStack>
                </VStack>
                <VStack gap='8px' align='left'>
                    <Heading
                        fontSize='20px'
                        fontWeight='bold'
                        color='white'
                    >
                        About
                    </Heading>
                    <VStack
                        gap='8px'
                        fontSize='16px'
                        fontWeight='medium'
                        color='backgroundColors.tertiaryBG'
                        align='left'
                    >
                        <Text>
                            About Us
                        </Text>
                        <Text>
                            View Team
                        </Text>
                    </VStack>
                </VStack>
            </HStack>
        </HStack>
        <Divider
            color='backgroundColors.tertiaryBG'
            height='16px'
        />
        <HStack
            color='backgroundColors.tertiaryBG'
            justifyContent='center'
            pt='32px'
            gap='32px'
        >
            <HStack gap='32px'>
                <Heading
                    fontSize='16px'
                    fontWeight='medium'    
                >
                    All Rights Reserved
                </Heading>
                <Heading
                    fontSize='16px'
                    fontWeight='medium' 
                >
                    SabkaBazar LLC
                </Heading>
            </HStack>
            <HStack gap='32px'>
                <Heading
                    fontSize='16px'
                    fontWeight='medium'
                >
                    Terms of Service
                </Heading>
                <Heading
                    fontSize='16px'
                    fontWeight='medium' 
                >
                    Privacy Policy
                </Heading>
            </HStack>
        </HStack>
    </Container>
  )
}
