import { Button, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function NewCollection() {
  return (
    <HStack justifyContent='space-between' minW='100%'>
        <VStack gap='8px' align='left'>
            <Heading
                fontWeight='bold'
                fontSize='24px'
                color='textColors.primaryText'
            >
                Discover New Favorites
            </Heading>
            <Text
                fontWeight='medium'
                fontSize='16px'
                color='textColors.primaryText'
            >
                New products from local vendors all crafted in Kothrud Pune
            </Text>
        </VStack>
        <Button
            variant='link'
            color='textColors.primaryText'
            fontSize='16px'
            p='16px'
        >
            Shop the Collection
        </Button>
    </HStack>
  )
}
