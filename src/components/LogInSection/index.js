import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, Container, HStack, Heading, Input, Radio, RadioGroup, Text, VStack, border } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useNavigation } from 'react-router-dom';

export default function LogInSection() {

    const [data, setData] = useState({});
    const navigator = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData( (prevData) => ({...prevData, [name]:value}) )
        console.log(data);
    }

    const handleSubmit = () => {
        navigator('/')
    }

    const handleSignUp = () => {
        navigator('/register')
    }


    return (
        <VStack
            p='64px'
            // gap='32px'
            border='0px'
            borderRadius='32px'
            bg='backgroundColors.primaryBG'
            align='left'
            minW='60%'
        >
            <form onSubmit={handleSubmit}>
                <VStack
                    gap='32px'
                    p={0}
                    m={0}
                    minW='60%'
                    align='left'
                >
                    <VStack
                    p={0}
                    gap='0px'
                    align='left'
                    >
                        <Heading
                            fontSize='32px'
                            fontWeight='bold'
                            color='textColors.primaryText'
                        >
                            Log In to SabkaBazar
                        </Heading>
                        <HStack
                            p={0}
                            gap={0}
                        >
                            <Text
                                fontSize='20px'
                                fontWeight='medium'
                                color='textColors.primaryText'
                            >
                                Don't have an account?
                            </Text>
                            <Button
                                variant='link'
                                // px='16px'
                                fontSize='20px'
                                fontWeight='medium'
                                color='textColors.primaryText'
                                style={
                                    {
                                        textDecoration: 'underline'
                                    }
                                }
                                onClick={handleSignUp}
                            >
                                Sign Up
                            </Button>
                        </HStack>
                    </VStack>
                    <VStack
                        p={0}
                        gap='24px'
                        align='left'
                        minW='100%'
                    >
                        <VStack
                            p={0}
                            gap='16px'
                            align='left'
                        >
                            <VStack
                                p={0}
                                gap='8px'
                                align='left'
                            >
                                <Heading
                                    fontSize='20px'
                                    fontWeight='semibold'
                                    color='textColors.primaryText'
                                >
                                    Enter your email
                                </Heading>
                                <Input
                                    px='32px'
                                    py='24px'
                                    minW='100%'
                                    border='0px'
                                    borderRadius='50px'
                                    fontSize='16px'
                                    fontWeight='medium'
                                    bg='backgroundColors.tertiaryBG'
                                    placeholder='youremail@site.com'

                                    name='email'
                                    onChange={ handleChange }
                                />
                            </VStack>
                            <VStack
                                p={0}
                                gap='8px'
                                align='left'
                            >
                                <Heading
                                    fontSize='20px'
                                    fontWeight='semibold'
                                    color='textColors.primaryText'
                                >
                                    Enter your password
                                </Heading>
                                <Input
                                    px='32px'
                                    py='24px'
                                    minW='100%'
                                    border='0px'
                                    borderRadius='50px'
                                    fontSize='16px'
                                    fontWeight='medium'
                                    bg='backgroundColors.tertiaryBG'
                                    placeholder='password here'
                                    type='password'

                                    name='password'
                                    onChange={ handleChange }
                                />
                            </VStack>
                        </VStack>
                        <Button
                            border='0px'
                            borderRadius='50px'
                            bg='accentColors.accentBlue'
                            px='32px'
                            py='24px'
                            color='white'
                            _hover={
                                {
                                    bg: 'accentColors.accentDarkBlue'
                                }
                            }
                            _active={
                                {
                                    bg: 'accentColors.accentDarkBlue',
                                    border: '1.5px',
                                    borderColor: 'backgroundColors.tertiaryBG'
                                }
                            }

                            type='submit'
                        >
                            Log In
                        </Button>
                    </VStack>
                </VStack>
            </form>
        </VStack>
    )
}
