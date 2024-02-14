import React, { useEffect, useState } from 'react'
import { ChevronDown, Plus } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ItemNav = (props) => {
    const [drop, setDrop] = useState(false);
   
    return (
        <>{props.dropdown ?
                <li className='animate-fade-left group'>
                    <button 
                    className='font-semibold items-center justify-center cursor-pointer text-nowrap font-poppins visited:text-lighter-gray text-[14px] text-lighter-gray flex hover:text-primary-blue ease-in-out transition-colors duration-300'>
                    Soluções <ChevronDown className='translate-y-[2px] translate-x-[4px]' strokeWidth={3} size={14} />
                </button>
                    <div className='animate-fade-down text-center dark:bg-dark-background/85 backdrop-blur-3xl mt-1 bg-light-background/85 rounded-md absolute w-[90px] drop-shadow-md group-hover:block hidden' >
                        <ul>
                            <li>
                                <NavLink className='flex p-3 font-semibold font-poppins text-[14px] text-blueish-gray visited:text-blueish-gray hover:bg-light-blueish-gray hover:text-white hover:dark:text-white  dark:text-blueish-gray rounded-md dark:visited:text-blueish-gray
                                 dark:hover:bg-secondary-dark'
                                 to="/solucoes/food">Food</NavLink>
                            </li>
                            <li>
                                <NavLink className='flex p-3 font-semibold font-poppins text-[14px] text-blueish-gray visited:text-blueish-gray hover:bg-light-blueish-gray hover:text-white hover:dark:text-white dark:text-lighter-gray rounded-md dark:visited:text-blueish-gray
                                 dark:hover:bg-secondary-dark' to="/solucoes/varejo">Varejo</NavLink>
                            </li>
                        </ul>
                    </div>
                </li > :
                <li className='animate-fade-left'>
                    <NavLink onClick={props.onClick} to={props.path}
                        // className='
                        //  text-nowrap items-center justify-center cursor-pointer transition-colors duration-300 ease-in-out'
                        className={({ isActive }) => {
                            return (
                                'font-semibold  items-center justify-center cursor-pointer text-nowrap font-poppins visited:text-lighter-gray text-[14px] text-lighter-gray flex hover:text-primary-blue ease-in-out transition-colors duration-300' +
                                (isActive ? 'text-primary-blue visited:text-primary-blue' : 'text-blueish-gray visited:text-blueish-gray')
                            )
                        }}>
                        {props.name}
                    </NavLink>
                </li>
        }
        </>
    )
}

export default ItemNav;