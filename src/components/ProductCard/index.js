import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import giftCard from "./images/giftCard.jpg";
import { IoBagAdd } from "react-icons/io5";
import { Link, unstable_HistoryRouter, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { ProductDispatchContext, ProductContext } from "../../context/productProvider";


function ProductCard(props) {
    const posts = useContext(ProductContext)
    const setPosts = useContext(ProductDispatchContext)

  // const navigator = useNavigate();
  // const handleClick = () => {
  //     console.log(props)
  //     navigator('/productpage',
  //     {props}
  //     )
  // }
  const productData = [props.productName,props.desc,props.price,props.seller,props.details]
  
  const productAddHandler =()=>{
    setPosts(productData);
  }

  return (
      <Link to={`/productpage`}>
        <Card
          maxW="272px"
          bg="backgroundColors.tertiaryBG"
          borderRadius="24px"
          boxShadow={0}
          align="center"
          p={0}
          _hover={{
            bg: "backgroundColors.secondaryBG",
          }}
          onClick={productAddHandler}
        >
          <CardBody gap="8px">
            <Box
              w="240px"
              align="center"
              // bg='backgroundColors.tertiaryBG'
              bg="white"
              px="16px"
              py="16px"
              borderRadius="20px"
            >
              <Image
                src={giftCard}
                borderRadius="16px"
                // aspectRatio='1'
                boxSize="200px"
              />
            </Box>
            <VStack align="left" p="8px" pt="16px">
              <Heading
                fontSize="20px"
                fontWeight="bold"
                color="textColors.primaryText"
                p={0}
              >
                {props.productName}
                {/* Apple Watch */}
              </Heading>
              <Text
                fontSize="16px"
                fontWeight="medium"
                color="textColors.secondaryText"
                p={0}
              >
                {props.desc}
                {/* Series 5 SE */}
              </Text>
              <HStack p={0} justifyContent="space-between" align="center">
                <Text
                  fontSize="20px"
                  fontWeight="black"
                  color="textColors.primaryText"
                >
                  {props.price}
                  {/* Rs. 30,000 */}
                </Text>
                <IconButton
                  align="center"
                  icon={<IoBagAdd color="white" size="20px" />}
                  bg="textColors.primaryText"
                  p="8px"
                  borderRadius="12px"
                  aria-label="Add to Cart"
                  _hover={{
                    bg: "textColors.tertiaryText",
                  }}
                />
              </HStack>
            </VStack>
          </CardBody>
        </Card>
      </Link>
  );
}

export default ProductCard;
