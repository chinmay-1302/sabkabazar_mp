import React, { createContext, useState } from 'react'

const ProductContext = createContext(null);
const ProductDispatchContext = createContext(null);

const ProductProvider = (props) => {
    const [posts, setPosts] = useState([]);
    return (
        <ProductContext.Provider value={posts}>
            <ProductDispatchContext.Provider value={setPosts}>
                {props.children}
            </ProductDispatchContext.Provider>
        </ProductContext.Provider>
    )
}

export {ProductContext, ProductDispatchContext, ProductProvider}