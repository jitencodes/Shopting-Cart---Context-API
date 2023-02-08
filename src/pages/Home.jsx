import React,{useEffect,useContext} from 'react';
import { Product } from '../components';
import { ProductContext } from '../contexts/ProductContext';
const Home = () => {
  // get products from product context
  const {products, }  =useContext(ProductContext);
  
  // get filtered products
  const filterProducts = products.filter(item=>{
    return item.category === "men's clothing"||item.category==="women's clothing"
  });
  
  return <div>
    <section className="py-16 h-full bg">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 
        gap-[30px] max-w-sm mx-auto 
        md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 
        md:max-w-none md:mx-0">
          {filterProducts.map((product, id)=>{
            return <Product product={product} kye={id}/>;
          })}
        </div>
      </div>
    </section>
  </div>;
};

export default Home;
