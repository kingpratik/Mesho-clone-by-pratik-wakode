import React, { useState } from 'react'
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SecurityUpdateIcon from '@mui/icons-material/SecurityUpdate';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import { allItems } from '../../constant';
import HeaderBottom from './HeaderBottom';
import { useSelector } from 'react-redux';


// import { Meesho } from '../../Assests'

const Header = () => {
    const [showAll,setShowAll] = useState(false)
    const products = useSelector((state)=>state)
    console.log(products);
    

    
    return (
       <div className='w-full sticky top-0 m-0 p-0  z-50'>
         <div className=' space-x-1 h-[89px] md:text-sm md:h-[px] m-0 p-0 box-border bg-pink-100 px-0 py-0 flex  item-center md:h-20 md:text-xs md:leading-5 gap-3 '>
            <div className='text-left leading-6 tracking-wider font-bold py-1 px-3 m-1 '>
                <header className=" m-2 flex h-[60%] items-center text-pink-500  cursor-pointer duration-100 text-5xl">meesho</header>
            </div>
            {/* <div className='
                 m-2   px-2 py-4 h-[60%] flex items-center border border-transparent hover:border-black rounded-[20%]   cursor-pointer leading-6 duration-100'>
                <LocationOnIcon />
                <p className=' text-lightText flex flex-col'>Deliver to
                    <span className='font-semibold'> New Mumbai</span>
                    </p>
            </div> */}
            {/* search bar start */}
            <div id='Boxbar' className=' px-2  py-2 m-1 p-3 flex-grow flex items-center  cursor-pointer duration-100 relative hidden lgl:flex 	 '>
                <span onClick={()=>setShowAll(!showAll)} className='w-12 bg-gray-200 flex p-2 hover:bg-gray-300 h-[65%] cursor-pointer justify-center rounded-tl-md rounded-bl-md duration-300 '>All<span></span><ArrowDropDownIcon />
                </span>
                {showAll && (
                        <div className=''>
                            <ul className=' absolute  w-52 h-80 top-[67px] left-2   bg-white border-[1px] border-black text-black p-2  flex-col gap-1  z-50 overflow-scroll overflow-x-hidden overflow-top-hidden scroll-smooth ' >
                               {allItems.map((item)=>(
                                        <li className=' tracking-wide border-black-[1px] border-b-transparent hover:border-b-black cursor-pointer duration-200' key={item._id}>
                                        
                                        
                                            
                                            {item.title}</li>
                                   
                                ))}
                            </ul>
                        </div>
                    )}
                <input
                    className='h-[65%] text-base flex-grow outline-none border-none px-2'
                    type="text" placeholder='Try Saree,kurti Or Search by Product Code '/>
                <span className='w-12 h-[60%] flex items-center justify-center bg-fuchsia-300 hover:bg-fuchsia-400 rounded-tr-md'>
                    <SearchIcon />
                </span>
                            
            </div>
            {/* Downlode app section start */}
             <div className='hidden  lgl:flex  items-center hover:text-pink-600	text-lg font-semibold cursor-pointer   '>
                <span> <SecurityUpdateIcon/> Downlode App</span>
                {/* <div className="text-bold">Downlode App<div/> */}
             </div>
             
             <div className=' flex flex-col px-4 items-start justify-center 	hidden mdl:inline-flex hover:text-pink-600 text-lg font-semibold cursor-pointer ' >
                <p>| Become a Supplier |</p>
            </div>
            
           
           <div className=' flex flex-col items-start justify-center  hover:text-pink-600  text-lg font-semibold cursor-pointer '>
                <span><PersonAddIcon/> Profile</span>
            </div>
          
            

            <div className=' flex flex-col px-4 items-start justify-center 	 hover:text-pink-600 text-lg font-semibold cursor-pointer '> 
            
             <p>Cart
             <span><AddShoppingCartIcon/> 0</span>
             </p>
                
                
            </div>
            
        </div>
        <HeaderBottom/>
       </div>

        
    );
}

export default Header;