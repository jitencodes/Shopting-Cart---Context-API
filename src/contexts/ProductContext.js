import React,{useEffect, useState, createContext} from 'react';
// create context
export const ProductContext  = createContext();
const ProductProvider = ({children}) => {
  const[products, setProducts] = useState([]);
  const[singleProduct, setSingleProducts] = useState({});
  
  // When Component Loaded
  useEffect(()=>{
    // Fetch Products
    const getProducts= async ()=>{
      const data  = await fetch('https://fakestoreapi.com/products/');
      var response  =  await data.json();
      setProducts(response);
    };
    getProducts();
  },[]);

  // Fetch Single Product
  const getSingleProduct= async (id)=>{
    const data  = await fetch(`https://fakestoreapi.com/products/${id}`);
    var response  =  await data.json();
    setSingleProducts(response);
  };
  
  
  return <ProductContext.Provider value={{products, singleProduct, getSingleProduct}} >
    {children}
  </ProductContext.Provider>
};

export default ProductProvider;
