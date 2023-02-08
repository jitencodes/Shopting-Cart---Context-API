import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from '../contexts/CartContext';
import { Link } from "react-router-dom";
import icon from '../assets/images/logo.svg'
const Header = () => {
  const {total} = useContext(CartContext);

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <header className="bg-pink-200 flex justify-between p-5">
      <Link to='/' className="flex gap-3 items-center"><img src={icon} alt="Shopping Cart" width='30px'/> Shopping Market</Link>
      <button className="cursor-pointer relative " onClick={() => setIsOpen(!isOpen)}>
        <BsBag className="text-2xl" />
        <span className="absolute right-0 translate-x-1/2 -translate-y-1/2 bg-red-600 text-white w-4 h-4  text-[6px] grid place-items-center  rounded-full">{total}</span>
      </button>
    </header>
  );
};

export default Header;
