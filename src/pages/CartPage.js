import React from 'react'
import CartCard from '../components/CartCard';

const CartPage = () => {

    const cartItems = [
        {
            index: 0,
            productName: "Apple Watch Pro",
            details: "The Apple AirPods Pro are premium wireless earbuds that provide an immersive audio experience and advanced features. These cutting-edge earphones offer a sleek and comfortable design, combined with powerful technology to enhance your listening enjoyment.With Active Noise Cancellation, the AirPods Pro block out external sounds, allowing you to focus on your music, podcasts, or calls without distractions. The Transparency mode lets you hear and interact with the world around you when needed, making it ideal for on-the-go use.Equipped with custom-built high-excursion drivers, the AirPods Pro deliver exceptional sound quality with rich bass, precise midrange, and crisp high frequencies. Adaptive EQ technology automatically tunes the music to the shape of your ears, ensuring a personalized and balanced audio experience.",
            price: "Rs. 30,000",
            seller: "Jeremy Mathew",
            desc: "Series 5 SE",
            quantity: 2,
          },
        {
            index: 1,
            productName: "Dell XPS 13",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
            price: "Rs. 75,000",
            seller: "Jeremy Mathew",
            desc: "White",
            quantity: 3,
          },
        {
            index: 2,
            productName: "Apple Watch Pro",
            details: "The Apple AirPods Pro are premium wireless earbuds that provide an immersive audio experience and advanced features. These cutting-edge earphones offer a sleek and comfortable design, combined with powerful technology to enhance your listening enjoyment.With Active Noise Cancellation, the AirPods Pro block out external sounds, allowing you to focus on your music, podcasts, or calls without distractions. The Transparency mode lets you hear and interact with the world around you when needed, making it ideal for on-the-go use.Equipped with custom-built high-excursion drivers, the AirPods Pro deliver exceptional sound quality with rich bass, precise midrange, and crisp high frequencies. Adaptive EQ technology automatically tunes the music to the shape of your ears, ensuring a personalized and balanced audio experience.",
            price: "Rs. 30,000",
            seller: "Jeremy Mathew",
            desc: "Series 5 SE",
            quantity: 1,
          },
        {
            index: 3,
            productName: "Apple Watch Pro",
            details: "The Apple AirPods Pro are premium wireless earbuds that provide an immersive audio experience and advanced features. These cutting-edge earphones offer a sleek and comfortable design, combined with powerful technology to enhance your listening enjoyment.With Active Noise Cancellation, the AirPods Pro block out external sounds, allowing you to focus on your music, podcasts, or calls without distractions. The Transparency mode lets you hear and interact with the world around you when needed, making it ideal for on-the-go use.Equipped with custom-built high-excursion drivers, the AirPods Pro deliver exceptional sound quality with rich bass, precise midrange, and crisp high frequencies. Adaptive EQ technology automatically tunes the music to the shape of your ears, ensuring a personalized and balanced audio experience.",
            price: "Rs. 30,000",
            seller: "Jeremy Mathew",
            desc: "Series 5 SE",
            quantity: 2,
          },
        {
            index: 4,
            productName: "Apple Watch Pro",
            details: "The Apple AirPods Pro are premium wireless earbuds that provide an immersive audio experience and advanced features. These cutting-edge earphones offer a sleek and comfortable design, combined with powerful technology to enhance your listening enjoyment.With Active Noise Cancellation, the AirPods Pro block out external sounds, allowing you to focus on your music, podcasts, or calls without distractions. The Transparency mode lets you hear and interact with the world around you when needed, making it ideal for on-the-go use.Equipped with custom-built high-excursion drivers, the AirPods Pro deliver exceptional sound quality with rich bass, precise midrange, and crisp high frequencies. Adaptive EQ technology automatically tunes the music to the shape of your ears, ensuring a personalized and balanced audio experience.",
            price: "Rs. 30,000",
            seller: "Jeremy Mathew",
            desc: "Series 5 SE",
            quantity: 1,
          },
    ];
    const cartList = cartItems.map((item) => (
        <CartCard
          key={item.index}
          productName={item.productName}
          desc={item.desc}
          details={item.details}
          price={item.price}
          seller={item.sellerName}
          quantity={item.quantity}
        />
    ));

    return (
        <>
        {cartList}
        </>
    )
}

export default CartPage
