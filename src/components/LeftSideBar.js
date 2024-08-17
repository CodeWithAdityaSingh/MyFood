import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const LeftSideBar = () => {

  let selector = useSelector((store)=>  store.cart.cartItems)
  console.log(selector);
  


  
  return (
    <div className=' p-2 shadow-md h-screen flex flex-col  items-center justify-between border w-1/12    left-0 '>
      <div className='h-2/6'>
        <img className='w-24' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTEAIJNvXmcw7NccaA1-w0cs7vw4nN8-IHoQ&s'></img>
      </div>
      <div className='h-2/6'>
        <ul className='text-2xl'>
            <Link to={'/'}> <li className='my-2'>🏠</li></Link>
            <li className='my-2'>Ⓜ️</li>
            <li className='my-2'>🕧</li>
           <Link  to={'/cart'}> <li className='my-2 text-sm font-bold'>🛒{selector.length}-Items</li></Link>
        </ul>
      </div>
      <div className=''>
        <ul className=''>
            <li><img className='w-12' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL758EBheXNfwWRBeCYkGHX5T6ycH8AszVeA&s'></img></li>
            <li><img className='w-16' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWoEhT0YrdZKdk2HMGUfpJ8EcbWcbbRK6vA&s'></img></li>
        </ul>
      </div>
    </div>
  )
}

export default LeftSideBar
