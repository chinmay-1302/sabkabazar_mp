import { PhoneIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const navigator = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    setTerm( prevTerm => value );
    // console.log(term);
  }
  const goToResults = () => {
    navigator('/searchresultspage', {state: term});
  }
  return (
    <form onSubmit={goToResults}>
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
            onChange={handleChange}
        />
      </InputGroup>
    </form>
  )
}