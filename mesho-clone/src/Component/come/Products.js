import React from 'react'
import { useLoaderData } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import ApiIcon from '@mui/icons-material/Api';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addToCart } from '../../redux/meeshoSlice';
import {useDispatch} from "react-redux"

const Products = () => {
  const dispatch = useDispatch()

  const data = useLoaderData()
  const productsData = data.data;

  return (
     <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4  xl:grid-cols-4 xl:gap-10 gap-6 px-4 '>
      {productsData.map((item) => (
        <div key={item.id} className='bg-white h-auto border-[2px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-300 flex flex-col gap-4 relative'>
          <span className='text-xs capitalize italic absolute top-2 right-2 text-grey-500'>{item.category}</span>
          <div className='w-full h-auto flex items-center justify-center relative group'>
            <img className='w-52 h-64 object-contain' src={item.image} alt="ProductImage" />

            <ul className='w-full h-36 bg-gray-100 absolute bottom-[-170px] flex flex-col items-end justify-center gap-2 px-2 border-l border-r group-hover:bottom-0 duration-700'>
              <li className='productLi'>
                compare{" "} <span><ApiIcon/></span>
              </li>
              <li className='productLi'>Add to Cart<span><AddShoppingCartIcon/></span></li>
              <li className='productLi'>View Details {" "}<span><ArrowCircleRightIcon/></span></li>
              <li className='productLi'>Add to Wish list{" "}<span><FavoriteIcon/></span></li>
              <li></li>
            </ul>
          </div>
          <div className='px-4 z-10 bg-white'>
            <div className='flex items-center justify-between'>
              <h2 className='tracking-wide text-lg font-medium '>{item.title.substring(0, 20)}</h2>
              <p className='text-sm text-gray-600 font-semibold'>₹{item.price}</p>
            </div>
            <div>
             <p className='text-sm'>{item.description.substring(0,100)}...</p>
             <div className='text-yellow-500'>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
             </div>
            </div>
            <button onClick={()=>dispatch(addToCart({
              id:item.id,
              title:item.title,
              description:item.price,
              price:item.category,
              image:item.image,
              quantity:1,
            }))} className='w-full font-medium text-base bg-gradient-to-tr from-cyan-400 to-cyan-200 border hover:from-cyan-300 hover:to-cyan-500 hover:border-cyan-700    active:bg-gradient-to-bl active:from-cyan-400 active-to-cyan-500 duration-200 py-1.5 rounded-md mt-3'>Add to Cart</button>
          </div>

        </div>
      ))
      }
    </div>
  )
}

export default Products;
