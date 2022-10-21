import React from 'react'
import ekologo from '../../assets/icons/eko-logo.png'

const Footer = () => {
  return (
    <div className='w-[100%] h-[45px] sticky bg-white bottom-0 flex justify-center items-center'>
        <div className='flex w-[10%] mx-auto justify-between items-center'>
            <p className='italic text-gray-400 text-xs'>Powered by</p>
            <img src={ekologo} className='w-[75px]' />
        </div>
    </div>
  )
}

export default Footer