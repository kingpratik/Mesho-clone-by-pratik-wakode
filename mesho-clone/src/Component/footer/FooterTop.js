import React from 'react'
import { playstore } from '../../Assests'
import { Appstore } from '../../Assests'

const FooterTop = () => {
  return (
    <div className='m-0 p-0 box-border mt-12 bg-slate-400  '>

      <div className='flex-wrap flex gap-1 box-border  mx-2.5   '>
        <div className='' id='1'>
          <div>
            <h4 className='text-4xl font-bold'>Shop Non-Stop on Meesho</h4>
            <p className='mt-6 font-normal text-lg text-grey-500 '>Trusted by more than 1 Crore Indians <br></br>
              Cash on Delivery | Free Delivery</p>
            <div className='flex width-full  gap-[15px] mx-1- '>
              <div className='w-52 '>
                <a href='https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=187059aab5e272-0030f1155da3738-d545429-100200-187059aab5f4b4'>
                  <img src=
                    {playstore} alt='playstore' />
                </a>

              </div>
              <div className='w-44  mt-4'>
                <a href='https://apps.apple.com/us/app/meesho/id1457958492'>
                  <img src={Appstore} alt='Appstore' />

                </a>
              </div>

            </div>
          </div>
        </div>
        <div className='mt-12 ml-8 space-y-1 text-2xl text-grey-500 font-normal align-center' id='2'>
          <div className=''>
            <a href='https://www.meesho.io/jobs?utm_medium=footer&utm_source=meesho_website&utm_campaign=careerspagepromotion'>
              <p className='text-2xl text-grey-500 font-normal '>Career</p>
            </a>
          </div>
            <div>
              <a href='https://supplier.meesho.com/?utm_source=meesho&utm_medium=mweb&utm_campaign=footer'>
                <p className='text-2xl text-grey-500 font-normal '>
                    Become a supplier
                </p>
              </a>
            </div>
            <div>
              <a href='https://www.meesho.com/legal/hall-of-fame?embed=true'>
                <p className='text-2xl text-grey-500 font-normal '>
                  Hall of Fame
                </p>
              </a>
            </div>
        </div>
        <div className='mt-11 ml-7 space-y-1 text-xl text-grey-500 font-normal' id='3'>
             <div>
              <a href='https://www.meesho.com/legal?embed=true'>
                <p className=' text-grey-500 font-normal' >
                    Legal and Policies
                </p>
              </a>
             </div>
             <div>
              <a href='https://www.meesho.io/blog?utm_medium=footer&utm_source=meesho_website&utm_campaign=blogpagepromotion'>
                <p className=' text-grey-500 font-normal'>
                  Meesho tech Blog
                </p>
              </a>
             </div>
             <div>
              <a href='https://www.meesho.com/notices_and_returns?embed=true'>
                <p className=' text-grey-500 font-normal'>
                  Notice and Return
                </p>
              </a>
             </div>
        </div>
        <div className='mt-11 ml-7 space-y-1 text-xl text-grey-500 font-normal' id=''>
           <p className='text-2xl font bold'>Reach out to us</p>
        </div>
        <div>5</div>
      </div>



    </div>
  )
}

export default FooterTop