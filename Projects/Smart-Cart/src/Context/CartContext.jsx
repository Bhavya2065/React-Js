import { createContext, useReducer, useState } from "react";

export const ProductContext = createContext({
    productList: [],
    addNewProduct: () => { }
});

export default function productListProvider({ children }) {

    const [allProduct, setallProduct] = useReducer(productOperation, [])



    const [productList, setProductList] = useState([])
    return (
        <>
            <ProductContext.Provider value={{ productList }}>
                {children}
            </ProductContext.Provider>
        </>
    )
}