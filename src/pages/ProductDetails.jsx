import React,{useEffect,useContext} from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
// Get ProductState & Fetch Function From Context
const arr = [1,1,1,1,1]
const {singleProduct, getSingleProduct}  = useContext(ProductContext);
const {addToCart}  = useContext(CartContext);
let { id } = useParams();
const {title,category,description,image,price,rating} = singleProduct;
useEffect(() => {
  getSingleProduct(id);
}, [id]);


  return <div className=' px-[50px]'> 
    <h1 className='py-[40px] text-[18px] font-semibold capitalize  text-gray-500 tracking-wider'>
      <Link to='/' className='cursor-pointer text-pink-900'>Home</Link>{` / ${category} / ${title}`}</h1>
    <div className="flex flex-col justify-between gap-[50px] md:flex-row">
      <div className="flex justify-center flex-1">
        <img src={image} alt={title} className='w-[100px] md:w-[300px]' />
      </div>
      <div className="flex flex-col flex-1 gap-[30px] md:gap-[50px] justify-center ">
        <div className='flex flex-col gap-3'>
        <h1  className='font-bold md:text-[22px]'>{title}</h1>
        <h1 className='font-normal md:text-[20px]'>$ {price}</h1>
        <p className='font-normal leading-[35px] tracking-wide text-gray-500 md:text-[22px]'>{description}</p>
        <div className="flex items-center">
      {  Array(Math.round(rating? rating?.rate:1 )).fill().map(Math.random).map((e)=>{
        console.log(e)
          return <svg key={e} aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
  
        })}
        {  Array(5-Math.round( rating?rating?.rate: 1 )).fill().map(Math.random).map((e)=>{
          return <svg key={e} aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
  
        })}
        </div>
        </div>
        <button onClick={()=>{addToCart(singleProduct)}} className='bg-pink-200 py-2 w-full'>Add To Cart</button>
      </div>
    </div>
  </div>;
};

export default ProductDetails;
