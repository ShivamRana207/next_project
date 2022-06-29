import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className=' flex flex-col md:flex-row md:justify-start  justify-center item-center'>
      <div className='nav'>
        <ul className='flex  item-center cursor-pointer space-x-2 font-bold'>
          <Link href={'/tshirt'}><a><li>Tshirts</li></a></Link>
          <Link href={'/hoodies'}><a><li>Hoodies</li></a></Link>
          <Link href={'/underwears'}><a><li>Underwears</li></a></Link>
          <Link href={'/shorts'}><a><li>Shorts</li></a></Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-0 mx-5">
        <button>Cart</button>
      </div>
    </div> 
  )
}

export default Navbar