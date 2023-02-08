import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
// importing components
import CartItem from './CartItem';
import { CartContext } from '../contexts/CartContext';
import { SidebarContext } from '../contexts/SidebarContext';
import {IoMdArrowForward} from 'react-icons/io';
import EmptyCartSVG from '../assets/images/Empty Cart.svg'

const Sidebar = () => {
  const {isOpen, handleClose}  = useContext(SidebarContext);
  const {cart, total, clearCart} = useContext(CartContext);
  console.log("cart",cart); 
  return (
    <div  className={` ${ isOpen? 'right-0': '-right-full'} w-full flex
    fixed top-0 h-full
    transition-all duration-300 z-20  `}
    >
      <div onClick={handleClose} className="w-full "></div>
      <div className="h-full bg-white absolute right-0 md:shadow-2xl md:w-[35vw] xl:max-w-[30vw] px-4 lg:px-[35px]">
        <div className='flex justify-center items-center py-6 border-b' >
          <div className="uppercase">Shoping Bag ({total})</div>
          {/* Icons */}
          <div 
          onClick={handleClose}
          className="cursor-pointer w-8  h-8 flex justify-center items-center">
            <IoMdArrowForward className='text-2xl' />
          </div>
        </div>
        {cart.length==0?
        <div className="h-full my-1">
          <div className="flex flex-col w-full h-[80%]  my-auto   justify-center items-center gap-3">
          <img src={EmptyCartSVG}alt="Empty cart illustration" width='300px'/>
          <h1 className='text-lg font-bold '>Your Cart is Empty</h1>
          <p className='text-lg font-light text-gray-400 text-center '>Looks like you haven’t added anything to your cart yet</p>
          </div>
          <button onClick={handleClose  }  className='bg-pink-200 py-2 w-full '>Add Items</button>
        </div>:
        <div className='overflow-y-auto my-1 h-[80%]'>{cart.map((item)=>{
          return <CartItem item={item} key={item.id} />
        })}</div>
        }
        
        <button onClick={clearCart} className='bg-pink-200 py-2 w-full '>Clear Cart</button>
      </div>
    </div>
  );
};

export default Sidebar;
