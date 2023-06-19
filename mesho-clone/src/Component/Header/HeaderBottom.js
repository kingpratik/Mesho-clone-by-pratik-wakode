import React from 'react'

const HeaderBottom = () => {
  return (
    <div className='w-full bg-rose-300 	px-4 h-[52px]	flex items-center	'>
      {/* ListItems Start here */}
      <ul className='flex place-content-between tracking-wide font-semibold items-center gap-11 content-evenly cursor-pointer '>
        <li className='hover:text-pink-600'>Women Ethnic</li>
        <li className='hover:text-pink-600'>Women Western</li>
        <li className='hover:text-pink-600'>Men</li>
        <li className='hover:text-pink-600'>Kids</li>
        <li className='hover:text-pink-600'>Home & Kitchen</li>
        <li className='hover:text-pink-600'>Beauty & Health</li>
        <li className='hover:text-pink-600'>Jewellery & Accessories</li>
        <li className='hover:text-pink-600'>Bags & Footwear</li>
        <li className='hover:text-pink-600'>Electronics</li>
      </ul>
      {/* ListItems End here */}
    </div>
  )
}

export default HeaderBottom