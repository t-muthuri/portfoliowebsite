import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; //used to navigate
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('')

  return (
    <nav //semantic nav tag
      className= // a dynamic template string
      {`${styles.paddingX} 
      w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          // a special react-router dom link
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0); //will scroll to the top since active is going to keep track of where we are on the page
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-p0inter'> Tressie <span className='sm:block hidden'>| Javascript Practice</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                ? "text-white"
                : "text-secondary"
              }`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>

    </nav >
  )
}

export default Navbar