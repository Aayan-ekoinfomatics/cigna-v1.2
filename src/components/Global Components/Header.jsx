import React, { useState } from 'react'
import logo from '../../assets/icons/Logo.png'

const Header = () => {

  const [dropdownToggle, setDropdownToggle] = useState(true);

  window.addEventListener('click', (event) => {
    const dropdown = document.getElementById('dropdown');

    if (!dropdown.contains(event.target)) {
      setDropdownToggle(true)
    }
  })


  return (
    <div className="w-full h-[10vh] flex justify-between mb-4">
      <div className="w-[20%] flex justify-start items-center">
        <img src={logo} className='w-[45%]' />
      </div>
      <div className="w-[20%] flex justify-center items-end">
        <div className=" flex justify-end items-start w-[60%] h-[55%] rounded-lg ml-20">
          {/* <h1 className="flex justify-around items-center w-full text-2xl ">Filter {" "} <span className="text-green-800">▼</span></h1> */}
          <div class="relative inline-block text-left" id='dropdown'>
            <div>
              <button type="button" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => setDropdownToggle(!dropdownToggle)}>
                Filter
                {/* Heroicon name: mini/chevron-down */}
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>


            {/* Dropdown menu, show/hide based on menu state. */}

            {/* <div class={`${!dropdownToggle ? 'inline-block' : 'hidden'} absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-4 bg-[#4995ffc7] rounded-lg" role="none">
                <a href="#" class="text-gray-700 w-[80%] my-2 bg-white mx-auto rounded-lg block px-4 py-2 text-sm text-center" role="menuitem" tabindex="-1" id="menu-item-0">filter 1</a>
                <a href="#" class="text-gray-700 w-[80%] my-2 bg-white mx-auto rounded-lg block px-4 py-2 text-sm text-center" role="menuitem" tabindex="-1" id="menu-item-1">filter 2</a>
                <a href="#" class="text-gray-700 w-[80%] my-2 bg-white mx-auto rounded-lg block px-4 py-2 text-sm text-center" role="menuitem" tabindex="-1" id="menu-item-2">filter 3</a>
                <a href="#" class="text-gray-700 w-[80%] my-2 bg-white mx-auto rounded-lg block px-4 py-2 text-sm text-center" role="menuitem" tabindex="-1" id="menu-item-4">filter 4</a>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header