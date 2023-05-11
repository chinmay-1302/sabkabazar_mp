import { PhoneIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'

export default function SearchBar({props}) {
  return (
    <InputGroup>
        <InputLeftElement
            pointerEvents='none'
            px='16px'
            py='25px'
            children={<Search2Icon color='textColors.primaryText' />} />
        <Input
            // border='2px'
            borderColor='white'
            borderRadius='48px'
            bg='backgroundColors.tertiaryBG'
            py='24px'
            placeholder='Search for products, categories, or businesses'
        />
    </InputGroup>
  )
}