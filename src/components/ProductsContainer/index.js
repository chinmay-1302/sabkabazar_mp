import React from "react";
import ProductCard from "../ProductCard";
import { SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function ProductContainer() {
  const products = [
    {
      index: 0,
      productName: "Apple Watch Pro",
      desc: "Series 5 SE",
      price: "Rs. 30,000",
    },
    {
      index: 2,
      productName: "Jerry",
      desc: "Context",
      price: "Rs. 50",
    },
    {
      index: 3,
      productName: "Apple Watch Pro",
      desc: "Series 5 SE",
      price: "Rs. 30,000",
    },
    {
      index: 4,
      productName: "Apple Watch Pro",
      desc: "Series 5 SE",
      price: "Rs. 30,000",
    },
    {
      index: 5,
      productName: "Apple Watch Pro",
      desc: "Series 5 SE",
      price: "Rs. 30,000",
    },
    {
      index: 6,
      productName: "Apple Watch Pro",
      desc: "Series 5 SE",
      price: "Rs. 30,000",
    },
    {
      index: 7,
      productName: "Apple Watch Pro",
      desc: "Series 5 SE",
      price: "Rs. 30,000",
    },
    {
      index: 8,
      productName: "Apple Watch Pro",
      desc: "Series 5 SE",
      price: "Rs. 30,000",
    },
    {
      index: 9,
      productName: "Apple Watch Pro",
      desc: "Series 5 SE",
      price: "Rs. 30,000",
    },
    {
      index: 10,
      productName: "Apple Watch Pro",
      desc: "Series 5 SE",
      price: "Rs. 30,000",
    },
    {
      index:11,
      productName: "Apple Watch Pro",
      desc: "Series 5 SE",
      price: "Rs. 30,000",
    },
    {
      index: 12,
      productName: "Apple Watch Pro",
      desc: "Series 5 SE",
      price: "Rs. 30,000",
    },
    {
      index: 13,
      productName: "Apple Watch Pro",
      desc: "Series 5 SE",
      price: "Rs. 30,000",
    },
    {
      index: 14,
      productName: "Apple Watch Pro",
      desc: "Series 5 SE",
      price: "Rs. 30,000",
    },
    {
      index: 15,
      productName: "Apple Watch Pro",
      desc: "Series 5 SE",
      price: "Rs. 30,000",
    },
    {
      index: 16,
      productName: "Apple Watch Pro",
      desc: "Series 5 SE",
      price: "Rs. 30,000",
    },
  ];
  const productList = products.map((item) => {
    return (
      <ProductCard
        key={item.index}
        productName={item.productName}
        desc={item.desc}
        price={item.price}
        sellerName={item.sellerName}
        details={item.details}

        // onClick={() => handleClick}
      />
    );
  });
  return (
    <SimpleGrid columns={4} spacing={16}>
      {productList}
    </SimpleGrid>
  );
}
