import React from 'react'
import { navLinks } from '../constants'

const Footer = () => {
  return (
    <div className='w-full flex items-center justify-between'>
      <ul className='list-none sm:flex justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key = {nav.id} className={`cursor-pointer text-16px ${index === navLinks.length - 1 ?  'mr-0' : 'mr-10'  }`}>
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer
