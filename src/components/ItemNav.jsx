import React, { useEffect, useState } from 'react'
import { ChevronDown, Plus } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ItemNav = (props) => {
    const [drop, setDrop] = useState(false);

    return (
        <>{props.dropdown ?
            <li className='animate-fade-left group'>
                <button onClick={()=>setDrop(!drop)}
                    className='translate-x-1 font-medium items-center justify-center cursor-pointer text-nowrap font-inter visited:text-blueish-gray text-[14px] text-blueish-gray dark:visited:text-blueish-gray dark:text-blueish-gray flex hover:text-dark-blue hover:font-semibold dark:hover:text-vanilla ease-in-out transition-colors duration-300'>
                    Soluções <ChevronDown className='translate-y-[2px] translate-x-[1px]' strokeWidth={3} size={14} />
                </button>
                <div onClick={props.onClick} className={`animate-fade-down dark:bg-dark-background/85 backdrop-blur-3xl bg-light-background/85 absolute w-[120px] drop-shadow-lg ${drop ? 'block':'hidden' }`} >
                    <ul>
                        <li>
                            <NavLink onClick={()=>setDrop(!drop)} className='flex p-3 font-medium font-inter text-[14px] text-blueish-gray visited:text-blueish-gray hover:bg-neutral-300 dark:hover:bg-secondary-dark hover:text-dark-blue hover:dark:text-vanilla  dark:text-blueish-gray dark:visited:text-blueish-gray
                                 dark:hover:text-primary-blue'
                                to="/solucoes/food">Food Service</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={()=>setDrop(!drop)} className='flex p-3 font-medium font-inter text-[14px] text-blueish-gray visited:text-blueish-gray hover:bg-neutral-300 dark:hover:bg-secondary-dark hover:text-dark-blue hover:dark:text-vanilla dark:text-lighter-gray dark:visited:text-blueish-gray
                                 dark:hover:text-primary-blue' to="/solucoes/varejo">Varejo</NavLink>
                        </li>
                    </ul>
                </div>
            </li > :
            <li className='animate-fade-left'>
                <NavLink onClick={props.onClick} to={props.path}
                    className={({ isActive }) => {
                        return (
                            'font-medium whitespace-nowrap items-center justify-center cursor-pointer text-nowrap font-inter text-[14px] text-blueish-gray flex dark:hover:text-vanilla hover:text-dark-blue ease-in-out transition-colors duration-100' +
                            (isActive ? 'text-dark-blue visited:text-dark-blue font-semibold dark:text-vanilla dark:visited:text-vanilla' : 'text-blueish-gray visited:text-blueish-gray dark:visited:text-blueish-gray dark:text-blueish-gray')
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