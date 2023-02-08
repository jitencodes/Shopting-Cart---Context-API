import React from 'react';

const Footer = () => {
  return <div className='py-1 md:py-2 border-t-[1px] border-gray-300 w-full text-center md:text-right md:pr-[30px] bottom-0 fixed bg-white'>
    <p className='text-[12px]'>
    &copy; 2022 Shopping Cart | Made WIth <span className='text-red-500'>❤</span> By 
    <a href="https://github.com/jitencodes" className='underline ml-1'>Jitencodes</a>
  </p>
  </div>;
};

export default Footer;
