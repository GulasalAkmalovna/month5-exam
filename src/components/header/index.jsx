import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import person from '../../images/person.svg';
import poisk from '../../images/poisk.svg';
import menuIcon from '../../images/menu.svg';

const Index = () => {


    return (
        <header className='w-full bg-[rgba(0,0,0,0.13)] text-white  flex items-center fixed z-10 top-0 left-0 backdrop-blur-[30px]'>
            <div className="w-full max-w-[1400px] m-auto py-[10px] px-[10px] box-content">
                <nav className='flex items-center justify-between'>
                    <div>
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className="hidden lg:flex items-center gap-[34px]">
                        <ul className='flex items-center gap-[10px]'>
                            <li>
                                <NavLink className="border border-transparent border-[3px] py-1 px-[16px] rounded-[20px] px-3 focus:border-blue-600 " to='/'>Model S</NavLink>
                            </li>
                            <li>
                                <NavLink className="border border-transparent border-[3px] py-1 px-[16px] rounded-[20px] px-3 focus:border-red-600" to='/model-3/model-3'>Model 3</NavLink>
                            </li>
                            <li>
                                <NavLink className="border border-transparent border-[3px] py-1 px-[16px] rounded-[20px] px-3 focus:border-[#d6d6d6]" to='/model-x/model-x'>Model X</NavLink>
                            </li>
                            <li>
                                <NavLink className="border border-transparent border-[3px] py-1 px-[16px] rounded-[20px] px-3 focus:border-[#5b5b5b]" to='/model-y/model-y'>Model Y</NavLink>
                            </li>
                            <li>
                                <NavLink className="border border-transparent border-[3px] py-1 px-[16px] rounded-[20px] px-3 focus:border-blue-800" to='/solar-roof/solar-roof'>Solar Roof</NavLink>
                            </li>
                            <li>
                                <NavLink className="border border-transparent border-[3px] py-1 px-[16px] rounded-[20px] px-3 focus:border-blue-900" to='/solar-panels/solar-panels'>Solar Panels</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className='hidden lg:flex items-center gap-[40px]'>
                        <div className='flex items-center justify-center relative'>
                            <input className='bg-[#F4FBFF1A] p-[8px] px-[14px] pr-10 rounded-[20px] outline-none placeholder:text-[#e8e6e6]' type="text" placeholder='Search' />
                            <img className='absolute right-[16px]' src={poisk} alt="Search Icon" />
                        </div>
                        <div>
                            <img src={person} alt="Profile" />
                        </div>
                    </div>

                    <div className="lg:hidden">
                        <img src={menuIcon} alt="Menu Icon" onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    </div>
                </nav>



            </div>
        </header>
    );
}

export default Index;
