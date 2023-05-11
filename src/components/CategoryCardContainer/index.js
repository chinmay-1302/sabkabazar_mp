import { Box, HStack, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Art from './images/art.jpg'
import Attractions from './images/attractions.jpg'
import PersonalCare from './images/personalCare.jpg'
import Fashion from './images/fashion.jpg'
import Food from './images/food.jpg'
import Home from './images/home.jpg'
import proServices from './images/proServices.jpg'
import giftCard from './images/giftCard.jpg'

function CategoryCard( props ) {
  return (
    <Box
      align='center'
      width='100%'
      _hover={
        {
          transform: 'scale(1.1)'
        }
      }
    >
        <Image
            borderRadius='50%'
            src={props.imgSrc}
            h='112px'
            w='112px'
            // boxSize='500px'
            objectFit='cover'
            alt='CatgoryImg'
        />
        <Heading fontSize='16px' fontWeight='semibold' textAlign='center' py='12px'>
            {props.content}
        </Heading>
    </Box>
  )
}

export default function CategoryCardContainer() {
  return (
    <HStack align='top'>
      <CategoryCard content='Arts & Music' imgSrc={Art} />
      <CategoryCard content='Attractions' imgSrc={Attractions} />
      <CategoryCard content='Personal Care' imgSrc={PersonalCare} />
      <CategoryCard content='Fashion & Apparel' imgSrc={Fashion} />
      <CategoryCard content='Food & Drink' imgSrc={Food} />
      <CategoryCard content='Home & Living' imgSrc={Home} />
      <CategoryCard content='Pro Services' imgSrc={proServices} />
      <CategoryCard content='Gift Cards & Stationery' imgSrc={giftCard} />
    </HStack>
  )
}