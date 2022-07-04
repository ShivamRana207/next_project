import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Navbar = () => {
  return (
    <div className=' flex flex-col md:flex-row md:justify-start  justify-center item-center shadow-md'>
      <div className='nav py-4'>
        <ul className='flex  item-center cursor-pointer space-x-2 font-bold'>
          <Link href={'/tshirts'}><a><li>Tshirts</li></a></Link>
          <Link href={'/hoodies'}><a><li>Hoodies</li></a></Link>
          <Link href={'/kidswear'}><a><li>Kidswear</li></a></Link>
          <Link href={'/shorts'}><a><li>Shorts</li></a></Link>
          <Link href={'/about'}><a><li>About Us</li></a></Link>
          <Link href={'/contact'}><a><li>Contact</li></a></Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-4 mx-5">
     <button> <AiOutlineShoppingCart className=' text-xl md:text-3xl'/></button>
      </div>
    </div> 
  )
}

export default Navbar