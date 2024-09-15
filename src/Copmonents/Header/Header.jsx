import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from './image/Swiggy-Logo.png';
import { RxCaretDown } from "react-icons/rx";
import { CiSearch, CiDiscount1 } from "react-icons/ci";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icons: <CiSearch />,
      name: "Search"
    },
    {
      icons: <CiDiscount1 />,
      name: "Offers",
      sup: "NEW"
    },
    {
      icons: "",
      name: "Help"
    },
    {
      icons: "",
      name: "Sign-in"
    },
    {
      icons: "",
      name: "Cart",
      sup: (0)
    }
  ];

  return (
    <>
      <div className='black-overlay w-full h-full fixed duration-600'
        onClick={hideSideMenu} style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden"
        }}>
        <div onClick={(e) => {
          e.stopPropagation();
        }} className='w-[80%] sm:w-[500px] bg-white h-full absolute duration-[400ms]' style={{
          left: toggle ? '0%' : '-100%'
        }}>
          <nav className='flex flex-col p-4'>
            {links.map((link, index) => (
              <li key={index} className='cursor-pointer flex hover:text-[#fc8019] items-center gap-2 mb-4'>
                {link.icons}
                {link.name}
                <sup>{link.sup}</sup>
              </li>
            ))}
          </nav>
        </div>
      </div>

      <header className='p-4 sm:p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[999]'>
        <div className='max-w-[1200px] mx-auto flex items-center'>
          <div className='w-[60px] sm:w-[80px]'>
            <img src={logo} alt="Logo" className='w-full' />
          </div>

          <div className='ml-4 sm:ml-0'>
            <span className='font-bold'>Ratanada</span> jodhpur, Rajastan, India <RxCaretDown fontSize={30} className='font-bold inline text-[0.9rem] text-[#fc8019] cursor-pointer' onClick={showSideMenu} />
          </div>
          <nav className='hidden md:flex list-none gap-4 sm:gap-10 ml-auto font-semibold'>
            {links.map((link, index) => (
              <li key={index} className='cursor-pointer flex hover:text-[#fc8019] items-center gap-2'>
                {link.icons}
                {link.name}
                <sup>{link.sup}</sup>
              </li>
            ))}
          </nav>
          <div className='md:hidden ml-auto'>
            <button onClick={showSideMenu} className='text-[#fc8019]'>
              <FaBars fontSize={30} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}