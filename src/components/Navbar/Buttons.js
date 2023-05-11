import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Buttons({content}) {
  return (
    <Box
        as='button'
        fontSize='16px'
        fontWeight='bold'
        padding={4}
        bg='accentColors.accentBlue'
        color='white'
        borderRadius='40px'
        _hover={{
          bg: 'accentColors.accentDarkBlue',
          color: 'white'
        }}
        _active={{
          bg: 'accentColors.accentBlue',
          borderColor: 'backgroundColors.secondaryBG',
          border:'1.5px',
        }}
    >
        {content}
    </Box>
  )
}