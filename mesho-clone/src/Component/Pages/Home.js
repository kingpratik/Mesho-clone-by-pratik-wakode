import React from 'react'
import Banner from '../come/Banner'
import Products from '../come/Products'

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='w-full xl:-mt-36 -mt-28 py-36'> 
            <Products/>
            </div>
        </div>
    )
}

export default Home