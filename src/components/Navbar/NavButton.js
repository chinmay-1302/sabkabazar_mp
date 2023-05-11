import { Box } from '@chakra-ui/react'
import React from 'react'

export default function NavButton({content}) {
  return (
    <Box
        as='button'
        fontSize='16px'
        fontWeight='medium'
        padding={4}
        bg='white'
        color='textColors.primaryText'
        borderRadius='40px'
        _hover={{
          bg: 'accentColors.accentBlue',
          color: 'white'
        }}
        _active={{
          bg: 'accentColors.accentBlue',
          borderColor: 'backgroundColors.primaryBG',
          border:'1.5px',
        }}
        // _focus={{
        //   border:'1.5px',
        //   borderColor: 'accentColors.accentBlue',
        //   bg: 'white',
        //   borderStyle: 'dashed'
        // }}
    >
        {content}
    </Box>
  )
}
