import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, Container, HStack, Heading, Input, Radio, RadioGroup, Text, VStack, border } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useNavigation } from 'react-router-dom';

export default function SignUpSection() {

    const [data, setData] = useState({});
    const [formPage, setFormPage] = useState(0);
    const [value, setValue] = useState('1');
    const navigator = useNavigate();

    const nextPage = () => {
        setFormPage(prevFormPage => (prevFormPage + 1));
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData( (prevData) => ({...prevData, [name]:value}) )
        console.log(data);
    }

    useEffect( () => {
        setData( (prevData) => ({...prevData, purpose:value}) );
        console.log(data);
    }, [value] )

    const handleSubmit = () => {
        navigator('/')
    }

    const handleLogIn = () => {
        navigator('/login')
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
                { formPage ===0 &&
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
                                Sign Up for SabkaBazar
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
                                    Create an account or
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

                                    onClick={handleLogIn}
                                >
                                    Log In
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
                                        Confirm your password
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
                                        placeholder='re-enter password'
                                        type='password'

                                        name='confPassword'
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
                                rightIcon = { <ArrowForwardIcon p={0} boxSize='20px' /> }
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
                                onClick={ nextPage }
                            >
                                Next
                            </Button>
                        </VStack>
                    </VStack>
                }
                { formPage ===1 &&
                    <VStack
                        gap='32px'
                        p={0}
                        m={0}
                        minW='100%'
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
                                Lets set up your Account
                            </Heading>
                        </VStack>
                        <VStack
                            p={0}
                            gap='24px'
                            align='left'
                            minW='100%'
                        >
                            <HStack
                                p={0}
                                gap='16px'
                                align='left'
                                minW='100%'
                            >
                                <VStack
                                    p={0}
                                    gap='8px'
                                    align='left'
                                    flex={1}
                                >
                                    <Heading
                                        fontSize='20px'
                                        fontWeight='semibold'
                                        color='textColors.primaryText'
                                    >
                                        First Name
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
                                        placeholder='John'

                                        name='fname'
                                        onChange={ handleChange }
                                    />
                                </VStack>
                                <VStack
                                    p={0}
                                    gap='8px'
                                    align='left'
                                    flex={1}
                                >
                                    <Heading
                                        fontSize='20px'
                                        fontWeight='semibold'
                                        color='textColors.primaryText'
                                    >
                                        Last Name
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
                                        placeholder='Doe'

                                        name='lname'
                                        onChange={ handleChange }
                                    />
                                </VStack>
                            </HStack>
                            <VStack
                                p={0}
                                gap='8px'
                                align='left'
                                flex={1}
                            >
                                <Heading
                                    fontSize='20px'
                                    fontWeight='semibold'
                                    color='textColors.primaryText'
                                >
                                    Phone Number
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
                                    placeholder='7083885916'

                                    name='phoneNo'
                                    onChange={ handleChange }
                                />
                            </VStack>
                            <VStack
                                p={0}
                                gap='8px'
                                align='left'
                                minW='100%'
                            >
                                <Heading
                                    fontSize='20px'
                                    fontWeight='semibold'
                                    color='textColors.primaryText'
                                >
                                    Address
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
                                    placeholder='House Number, Floor, Building, Area'

                                    name='addHouse'
                                    onChange={ handleChange }
                                />
                                <HStack
                                    p={0}
                                    gap='8px'
                                    align='left'
                                    minW='100%'
                                >
                                    <Input
                                        flex={1}
                                        px='32px'
                                        py='24px'
                                        border='0px'
                                        borderRadius='50px'
                                        fontSize='16px'
                                        fontWeight='medium'
                                        bg='backgroundColors.tertiaryBG'
                                        placeholder='City'

                                        name='addCity'
                                        onChange={ handleChange }
                                    />
                                    <Input
                                        flex={1}
                                        px='32px'
                                        py='24px'
                                        border='0px'
                                        borderRadius='50px'
                                        fontSize='16px'
                                        fontWeight='medium'
                                        bg='backgroundColors.tertiaryBG'
                                        placeholder='Pin Code'

                                        name='addPin'
                                        onChange={ handleChange }
                                    />
                                </HStack>
                                <HStack
                                    p={0}
                                    gap='8px'
                                    align='left'
                                    minW='100%'
                                >
                                    <Input
                                        flex={1}
                                        px='32px'
                                        py='24px'
                                        border='0px'
                                        borderRadius='50px'
                                        fontSize='16px'
                                        fontWeight='medium'
                                        bg='backgroundColors.tertiaryBG'
                                        placeholder='District'

                                        name='addDistrict'
                                        onChange={ handleChange }
                                    />
                                    <Input
                                        flex={1}
                                        px='32px'
                                        py='24px'
                                        border='0px'
                                        borderRadius='50px'
                                        fontSize='16px'
                                        fontWeight='medium'
                                        bg='backgroundColors.tertiaryBG'
                                        placeholder='State'

                                        name='addState'
                                        onChange={ handleChange }
                                    />
                                </HStack>
                            </VStack>
                            <Button
                                border='0px'
                                borderRadius='50px'
                                bg='accentColors.accentBlue'
                                px='32px'
                                py='24px'
                                color='white'
                                rightIcon = { <ArrowForwardIcon p={0} boxSize='20px' /> }
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
                                onClick={ nextPage }
                            >
                                Next
                            </Button>
                        </VStack>
                    </VStack>
                }
                { formPage ===2 &&
                    <VStack
                        gap='32px'
                        p={0}
                        m={0}
                        minW='100%'
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
                                Lets set up your Purpose
                            </Heading>
                        </VStack>
                        <VStack
                            p={0}
                            gap='24px'
                            align='left'
                            minW='100%'
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
                                    Phone Number
                                </Heading>
                                <RadioGroup
                                    onChange={setValue}
                                    value={value}
                                    name='purpose'
                                >
                                    <VStack
                                        p={0}
                                        gap='12px'
                                        align='left'
                                    >
                                        <Radio size='lg' value='1'>
                                            <Text fontSize='20px' fontWeight='medium' color='textColors.primaryText'>
                                                Buyer
                                            </Text>
                                        </Radio>
                                        <Radio size='lg' value='2'>
                                            <Text fontSize='20px' fontWeight='medium' color='textColors.primaryText'>
                                                Seller
                                            </Text>
                                        </Radio>
                                    </VStack>
                                </RadioGroup>
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
                                Sign Up
                            </Button>
                        </VStack>
                    </VStack>
                }
            </form>

        </VStack>
    )
}
