import { ChevronLeftIcon, Icon } from '@chakra-ui/icons'
import { Button, Divider, HStack, Heading, Image, Select, Text, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import lapImg from './images/proServices.jpg'
import {IoBagAdd} from 'react-icons/io5'
import { useNavigate, useNavigation } from 'react-router-dom'
import { ProductContext, ProductDispatchContext } from '../../Context/productProvider'


export default function ProductSection(props) {

    const posts = useContext(ProductContext);
    const setPosts = useContext(ProductDispatchContext);

    const navigator = useNavigate();

    const handleBack = () => {
        navigator(-1)
    }

    return (
        <VStack
            align='left'
            py='16px'
            gap='16px'
            bg='backgroundColors.secondaryBG'
            minW='100%'
        >
            <Button
                variant='ghost'
                pl='4px'
                pr='12px'
                py='0px'
                gap='0px'
                bg='transparent'
                color='textColors.primaryText'
                fontSize='20px'
                fontWeight='bold'
                leftIcon={ <ChevronLeftIcon boxSize='24px' p={0} />}
                maxW='8%'
                border={0}
                borderRadius='12px'
                _hover={
                    {
                        bg:'backgroundColors.primaryBG'
                    }
                }
                onClick={handleBack}
            >
                Back
            </Button>
            <HStack
                gap='16px'
                align='left'
                minW='100%'
            >
                <Image
                    border={0}
                    borderRadius='16px'
                    boxSize='400px'
                    src={lapImg}
                />
                <VStack
                    p='32px'
                    gap='16px'
                    align='left'
                    minW='67%'
                >
                    <VStack
                        p='0px'
                        gap='0px'
                        align='left'
                        minW='100%'
                    >
                        <VStack
                            p={0}
                            gap='0px'
                            align='left'
                        >
                            <Heading
                                fontSize='48px'
                                fontWeight='bold'
                                color='textColors.primaryText'
                            >
                                {posts[0]}
                            </Heading>
                            <Text
                                fontSize='24px'
                                fontWeight='medium'
                                color='textColors.secondaryText'
                            >
                                {posts[1]}
                            </Text>
                        </VStack>
                        <Text
                            fontSize='36px'
                            fontWeight='black'
                            color='textColors.primaryText'
                        >
                            {posts[2]}
                        </Text>
                        <HStack
                            gap='4px'
                            p={0}
                        >
                            <Text
                                fontSize='20px'
                                fontWeight='medium'
                                color='textColors.tertiaryText'
                            >
                                By: 
                            </Text>
                            <Text
                                fontSize='20px'
                                fontWeight='medium'
                                color='textColors.tertiaryText'
                            >
                                {posts[3]}
                            </Text>
                        </HStack>
                    </VStack>
                    <HStack
                        minW='100%'
                        gap='16px'
                    >
                        <Select
                            bg='backgroundColors.tertiaryBG'
                            color='textColors.primaryText'
                            fontWeight='medium'
                            placeholder='1'
                            maxW='30%'
                            size='lg'
                            border={0}
                            borderRadius='16px'
                            flex={1}
                        >
                            <option value='100'>100</option>
                            <option value='1000'>1000</option>
                        </Select>
                        <Button
                            px='32px'
                            py='24px'
                            gap='4px'
                            bg='accentColors.accentBlue'
                            color='white'
                            fontWeight='bold'
                            fontSize='16px'
                            border={0}
                            borderRadius='16px'
                            leftIcon={ <Icon as={IoBagAdd} boxSize='20px' /> }
                            _hover={
                                {
                                    bg: 'accentColors.accentDarkBlue'
                                }
                            }
                            flex={6}
                        >
                            Add to Bag
                        </Button>
                    </HStack>
                </VStack>
            </HStack>
            <VStack
                gap='16px'
                align='left'
            >
                <Divider minW='100%' variant='solid' color='textColors.primaryText' />
                <VStack
                    gap='16px'
                    align='left'
                >
                    <Heading
                        fontSize='32px'
                        fontWeight='semibold'
                        color='textColors.primaryText'
                    >
                        Description
                    </Heading>
                    <Text
                        fontSize='16px'
                        fontWeight='medium'
                        color='textColors.secondaryText'
                    >
                        {posts[4]}
                    </Text>
                </VStack>
            </VStack>
        </VStack>
    )
}
