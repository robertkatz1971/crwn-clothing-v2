import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';
import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
    products: [],
    setProducts: () => {},
});

export const ProductsProvider = ({ children } ) => {
    const [products] = useState([]);
    const value = {products};
    
    useEffect(() => {

        //anytime need to call async from in useEffect need to wrap 
        //in function pointer and then call function pointer after definition
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log('done');
            console.log(categoryMap);
        }

        getCategoriesMap();
    })

    //used this code to initially load firestore data with categories and documents.
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // })

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )

};