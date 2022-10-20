import React, { useEffect, useState } from 'react'
import menu from '../../assets/icons/menu.svg'
import close from '../../assets/icons/close.svg'
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {

  const [navToggle, setNavToggle] = useState(false);

  const pathName = useLocation()

  window.addEventListener('click', (event) => {
    const nav = document.getElementById('nav');

    if (!nav.contains(event.target)) {
      setNavToggle(false)
    }
  })

  useEffect(() => {
    setNavToggle(false); // Close the navigation panel
  }, [ pathName ]);

  return (
    <div id='nav' className={`bg-[#2a63ffb4] h-screen fixed transition-all ${navToggle ? ' w-[25vh]' : 'w-[4%]'} z-[9999] h-[100vh]`}>
      <div className={`pt-[2rem] mb-[3rem] flex w-[80%] mx-auto ${navToggle ? 'justify-end' : 'justify-center'}`}>
        <img src={navToggle ? close : menu} className='w-[25px] cursor-pointer' onClick={() => setNavToggle(!navToggle)} />
      </div>
      <div className=' h-[30%] mt-[12rem]'>
        <ul className={`h-full flex-col justify-center items-center transition-all ${navToggle ? ' flex ' : 'hidden'}`}>
          <li className='text-2xl my-3 p-2 w-[70%] mx-auto bg-blue-200 text-gray-900 rounded-md text-center'><Link to='/' >Report-1</Link></li>
          <li className='text-2xl my-3 p-2 w-[70%] mx-auto bg-blue-200 text-gray-900 rounded-md text-center'><Link to='/report-2' >Report-2</Link></li>
          {/* <li className='text-2xl my-3 p-2 w-[70%] mx-auto bg-blue-200 text-gray-900 rounded-md text-center'>Page-3</li>
          <li className='text-2xl my-3 p-2 w-[70%] mx-auto bg-blue-200 text-gray-900 rounded-md text-center'>Page-4</li> */}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar