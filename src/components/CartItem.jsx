import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import {MdCancel} from 'react-icons/md'

const CartItem = ({item}) => {
  const {addToCart, removeFromCart, deleteFromcart} = useContext(CartContext);

  // destrucutre item
  const {title, image, id, quantity, price} = item;
  
  return <div className='flex  justify-between items-center' >
    <div className='w-full min-h-[150px] flex items-center gap-x-4' >
      {/* image */}
      <Link to={`/product/${id}`} >
        <img 
        className='max-w-[80px] p-2'
        src={image} alt={title} />
      </Link>
      <div className="grid gap-2">
        <h2>{title}</h2>
        <h4>{`$${price*quantity}`}</h4>
        <div className="flex gap-3">
          <button onClick={()=> removeFromCart(item)} className='px-3 py-1 border border-gray-300'>-</button>
          <span className='px-3 py-1 border border-gray-300'>{quantity}</span>
          <button onClick={()=> addToCart(item)} className='px-3 py-1 border border-gray-300'>+</button></div>
      </div>
    </div>
      <button onClick={()=> deleteFromcart(item)} className='grid place-items-center' ><MdCancel size='25px' color='gray' /></button>
    </div>;
};

export default CartItem;
