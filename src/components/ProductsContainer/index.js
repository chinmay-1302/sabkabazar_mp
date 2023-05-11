import React from "react";
import ProductCard from "../ProductCard";
import { SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    index: 0,
    productName: "Apple Watch Pro",
    details: "The Apple AirPods Pro are premium wireless earbuds that provide an immersive audio experience and advanced features. These cutting-edge earphones offer a sleek and comfortable design, combined with powerful technology to enhance your listening enjoyment.With Active Noise Cancellation, the AirPods Pro block out external sounds, allowing you to focus on your music, podcasts, or calls without distractions. The Transparency mode lets you hear and interact with the world around you when needed, making it ideal for on-the-go use.Equipped with custom-built high-excursion drivers, the AirPods Pro deliver exceptional sound quality with rich bass, precise midrange, and crisp high frequencies. Adaptive EQ technology automatically tunes the music to the shape of your ears, ensuring a personalized and balanced audio experience.",
    price: "Rs. 30,000",
    seller: "Jeremy Mathew",
    desc: "Series 5 SE"
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
    index: 11,
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
const ProductContainer = () => {
  const productList = products.map((item) => (
    <ProductCard
      key={item.index}
      productName={item.productName}
      desc={item.desc}
      price={item.price}
      seller={item.sellerName}
      details={item.details}

      // onClick={() => handleClick}
    />
  ));
  return (
    <SimpleGrid columns={4} spacing={16}>
      {productList}
    </SimpleGrid>
  );
};

export default ProductContainer;
