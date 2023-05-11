import { Button, ButtonGroup, Container, HStack, Heading, IconButton, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const CartCard = (props) => {
    return (
        <HStack
            px='24px'
            py='16px'
            gap='16px'
            bg='backgroundColors.tertiaryBG'
            minW='100%'
        >
            <Image
                boxSize='256px'
                border={0}
                borderRadius='24px'
            />
            <VStack
                p='8px'
                gap='8px'
            >
                <VStack
                    p={0}
                    m={0}
                    gap='8px'
                >
                    <Heading
                        fontSize='32px'
                        fontWeight='bold'
                        color='textColors.primaryText'
                    >
                        {props.productName}
                    </Heading>
                    <Text
                        fontSize='20px'
                        fontWeight='medium'
                        color='textColors.tertiaryText'
                    >
                        {props.desc}
                    </Text>
                </VStack>
                <Text
                    fontSize='20px'
                    fontWeight='medium'
                    color='textColors.secondaryText'
                >
                    {props.details}
                </Text>
                <HStack>
                    <Text
                        fontSize='20px'
                        fontWeight='medium'
                        color='textColors.primaryText'
                    >
                        {`${props.price} x ${props.quantity}`}
                    </Text>
                    <ButtonGroup
                        isAttached
                    >
                        <Button>-</Button>
                        <Button isDisabled>{props.quantity}</Button>
                        <Button>+</Button>
                    </ButtonGroup>
                </HStack>
            </VStack>
        </HStack>
    )
}

export default CartCard
