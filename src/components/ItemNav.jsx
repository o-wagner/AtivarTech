import React, { useState } from 'react'
import { Link } from "react-scroll";
import { ChevronDown } from 'lucide-react';

const ItemNav = (props) => {
    const [drop, setDrop] = useState(false);
    return (
        <>{
            props.dropdown ?
                <li><button onClick={() => setDrop(!drop)} className='font-semibold text-[16px] text-lighter-gray flex hover:text-primary-blue text-nowrap 
                items-center justify-center cursor-pointer transition-colors duration-300 ease-in-out'>
                    Soluções<ChevronDown className='translate-y-[2px]' size={18} />
                </button>
                    <div onClick={() => setDrop(!drop)} className={`dark:bg-terciary-dark mt-1 bg-light-blueish-gray rounded-md absolute p-2 ${drop ? 'hidden' : 'block '}`} >
                        <ul>
                            <li>
                                <a className='flex p-2 font-semibold text-vanilla hover:bg-blueish-gray dark:text-blueish-gray dark:visited:text-blueish-gray rounded-md dark:hover:bg-secondary-dark' href="#f">Food</a>
                            </li>
                            <li>
                                <a className='flex p-2 font-semibold text-vanilla hover:bg-blueish-gray dark:text-lighter-gray dark:visited:text-blueish-gray rounded-md dark:hover:bg-secondary-dark' href="#v">Varejo</a>
                            </li>
                        </ul>
                    </div>
                </li> :
                <li>
                    <a onClick={props.onClick} className='font-semibold text-[16px] text-lighter-gray flex
        hover:text-primary-blue text-nowrap items-center justify-center cursor-pointer transition-colors duration-300 ease-in-out'>
                        {props.name}
                    </a>
                </li>
        }
        </>
    )
}

export default ItemNav;