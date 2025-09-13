import React, { useEffect,useState } from 'react'
import { IoIosHeart } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { TbMenu2 } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [showMenu , setshowMenu] = useState(false);
    const [isScrolled , setIsScrolled] = useState(false);

    const toggleMenu = () =>{
        setshowMenu(!showMenu);
        }

        useEffect(()=>{

            const handleScroll = ()=>{
                setIsScrolled(window.scrollY >10)

            }

            window.addEventListener('scroll',handleScroll)
        })

  return (
   <header className={`fixed top-0 right-0 left-0 bg-white z-50 ${isScrolled ? 'shadow-lg' : ''}`}>
    <nav className='max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] items-center flex justify-between'>
        <Link to='/' className='text-3xl font-bold'>
          Gr<span className='text-orange-500 uppercase'>o</span>cify
        </Link> 

         <ul className='md:flex items-center gap-x-15 hidden'>
            <li>
                <a href='#'className='font-semibold tracking-wider text-orange-500'>Home</a>
            </li>
            <li>
                <a href='#'className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
            </li>
            <li>
                <a href='#'className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
            </li>
            <li>
                <a href='#'className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
            </li>

            
        </ul>   
         
         <div className='flex item-center gap-x-5'>
            <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'>
               <input type='text' name="text" id="text" placeholder='Search...' autoComplete='off'
               className='flex-1 h-[5.5vh] px-2 focus:outline-none'></input>
               <button className='bg-gradient-to-b from-red-600 to-orange-500 bg-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                  <CiSearch />
               </button>
            </div>
             <a href='#' className='text-zinc-800 text-2xl mt-3'>
                <IoIosHeart />
             </a>
             <a href='#' className='text-zinc-800 text-2xl mt-3'>
                <HiShoppingBag />
             </a>
              <a href='#' className='text-zinc-800 text-2xl mt-3 md:hidden' onClick={toggleMenu}>
                 <TbMenu2 />
              </a>
         </div>
       
       {/* Mobile Menu */}
       
         <ul className={`'flex flex-col gap-y-12 bg-orange-500/15 shadow-xl backdrop-blur-xl rounded-xl p-10 items-center gap-x-15 md:hidden absolute top-80 -left-full transform -translate-x-1/2 transition-all duration-500' ${showMenu ? 'left-1/2' : ""}`}>
            <li>
                <a href='#'className='font-semibold tracking-wider text-orange-500'>Home</a>
            </li>
            <li>
                <a href='#'className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
            </li>
            <li>
                <a href='#'className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
            </li>
            <li>
                <a href='#'className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
            </li>

            <li className='flex p-1 border-2 border-orange-500 rounded-full md:hidden'>
               <input type='text' name="text" id="text" placeholder='Search...' autoComplete='off'
               className='flex-1 h-[5.5vh] px-2 focus:outline-none'></input>
               <button className='bg-gradient-to-b from-red-600 to-orange-500 bg-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                  <CiSearch />
               </button>
            </li>
            
        </ul> 
    </nav>
   </header>
  )
}

export default Navbar
