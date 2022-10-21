import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import logo from '../../assets/icons/Logo.png'
import apiDecileDataAtom from '../../atoms/apiDecileDataAtom';

const Header = () => {

  const staticDataJson = [
    {"name": "Choice 1A"},
    {"name": "Choice 1C"}
]

  const [dropdownToggle, setDropdownToggle] = useState(true);
  const [ decileToggle, setDecileToggle ] = useState(true);

  const [ dataIndex, setDataIndex ] = useState(0);

  const [ apiDecileData, setApiDecileData ] = useRecoilState(apiDecileDataAtom);

  window.addEventListener('click', (event) => {
    const dropdown = document.getElementById('dropdown');
    const decile = document.getElementById('decile');

    if (!dropdown.contains(event.target)) {
      setDropdownToggle(true)
    }
    if (!decile.contains(event.target)) {
      setDecileToggle(true)
    }
  })

useEffect(() => {
  console.log(apiDecileData)
}, [apiDecileData]);


  return (
    <div className="w-full h-[10vh] flex justify-between mb-4">

      {/* Logo */}
      <div className="w-[20%] flex justify-start items-center">
        <img src={logo} className='w-[45%]' />
      </div>

      {/* Filters */}
      <div className="w-[20%] flex justify-center items-end">
        <div className=" flex justify-around items-center w-[60%] h-[55%] rounded-lg ml-20">
          
          {/* Filter */}
          <div className="relative inline-block text-left" id='dropdown'>
            <div>
              <button type="button" className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm " id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => setDropdownToggle(!dropdownToggle)}>
                Date
                {/* Heroicon name: mini/chevron-down */}
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>


            {/* Dropdown menu, show/hide based on menu state. */}

            {/* <div className={`${!dropdownToggle ? 'inline-block' : 'hidden'} absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
              <div className="py-4 rounded-lg" role="none">
                <a href="#" className="text-gray-700 w-[70%] my-2 mx-auto rounded-lg hover:bg-blue-200 block px-4 py-2 text-sm text-center" role="menuitem" tabIndex="-1" id="menu-item-0">Filter 1</a>
                <a href="#" className="text-gray-700 w-[70%] my-2 mx-auto rounded-lg hover:bg-blue-200 block px-4 py-2 text-sm text-center" role="menuitem" tabIndex="-1" id="menu-item-1">Filter 2</a>
                <a href="#" className="text-gray-700 w-[70%] my-2 mx-auto rounded-lg hover:bg-blue-200 block px-4 py-2 text-sm text-center" role="menuitem" tabIndex="-1" id="menu-item-2">Filter 3</a>
                <a href="#" className="text-gray-700 w-[70%] my-2 mx-auto rounded-lg hover:bg-blue-200 block px-4 py-2 text-sm text-center" role="menuitem" tabIndex="-1" id="menu-item-4">Filter 4</a>
              </div>
            </div> */}
          </div>

          {/* Decile */}
          <div className="relative inline-block text-left" id='decile'>
            <div>
              <button type="button" className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => setDecileToggle(!decileToggle)}>
                Decile
                {/* Heroicon name: mini/chevron-down */}
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>


            {/* Dropdown menu, show/hide based on menu state. */}

            {/* <div className={`${!decileToggle ? 'inline-block' : 'hidden'} absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
              <div className="py-4 rounded-lg" role="none">
                <a href="#" onClick={apiDecileCall} className="text-gray-700 w-[80%] my-2 bg-white mx-auto rounded-lg hover:bg-blue-200 block px-4 py-2 text-sm text-center" role="menuitem" tabIndex="-1" id="menu-item-0">Decile 1</a>
                <a href="#" onClick={apiDecileCall} className="text-gray-700 w-[80%] my-2 bg-white mx-auto rounded-lg hover:bg-blue-200 block px-4 py-2 text-sm text-center" role="menuitem" tabIndex="-1" id="menu-item-1">Decile 2</a>
                <a href="#" onClick={apiDecileCall} className="text-gray-700 w-[80%] my-2 bg-white mx-auto rounded-lg hover:bg-blue-200 block px-4 py-2 text-sm text-center" role="menuitem" tabIndex="-1" id="menu-item-2">Decile 3</a>
                <a href="#" onClick={apiDecileCall} className="text-gray-700 w-[80%] my-2 bg-white mx-auto rounded-lg hover:bg-blue-200 block px-4 py-2 text-sm text-center" role="menuitem" tabIndex="-1" id="menu-item-4">Decile 4</a>
              </div>
            </div> */}

            <div className={`${!decileToggle ? 'inline-block' : 'hidden'} absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
              <div className="py-4 rounded-lg" role="none">
                { staticDataJson.map((data, i) => (
                  <a href="#" key={i} onClick={() => setApiDecileData(i)} className="text-gray-700 w-[80%] my-2 bg-white mx-auto rounded-lg hover:bg-blue-200 block px-4 py-2 text-sm text-center" role="menuitem" tabIndex="-1" id="menu-item-0">{data.name}</a>
                ))}
                </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Header