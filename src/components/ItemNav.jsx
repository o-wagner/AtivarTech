import React, { useState } from 'react'
import { Link } from "react-scroll";
import { ChevronDown, Plus } from 'lucide-react';

const ItemNav = (props) => {
    const [drop, setDrop] = useState(false);
    return (
        <>{
            props.dropdown ?
                <li><button onClick={()=> setDrop(!drop)} className='font-semibold font-poppins text-[14px] text-lighter-gray flex hover:text-primary-blue text-nowrap 
                items-center justify-center cursor-pointer transition-colors duration-300 ease-in-out'>
                    Soluções <ChevronDown className='translate-y-[2px] translate-x-[4px]' strokeWidth={3} size={14}/>
                </button>
                    <div onClick={() => setDrop(!drop)} className={`animate-fade-down text-center dark:bg-dark-background/85 backdrop-blur-3xl mt-2 bg-light-background/85 rounded-md absolute w-[90px] drop-shadow-md ${drop ? 'block' : 'hidden'}`} >
                        <ul>
                            <li>
                                <a className='flex p-3 font-semibold font-poppins text-[14px] text-blueish-gray visited:text-blueish-gray hover:bg-light-blueish-gray hover:text-white hover:dark:text-white  dark:text-blueish-gray rounded-md dark:visited:text-blueish-gray dark:hover:bg-secondary-dark' href="#f">Food</a>
                            </li>
                            <li>
                                <a className='flex p-3 font-semibold font-poppins text-[14px] text-blueish-gray visited:text-blueish-gray hover:bg-light-blueish-gray hover:text-white hover:dark:text-white dark:text-lighter-gray rounded-md dark:visited:text-blueish-gray dark:hover:bg-secondary-dark' href="#v">Varejo</a>
                            </li>
                        </ul>
                    </div>
                </li> :
                <li>
                    <a onClick={props.onClick} className='font-semibold font-poppins text-[14px] text-lighter-gray flex
        hover:text-primary-blue text-nowrap items-center justify-center cursor-pointer transition-colors duration-300 ease-in-out'>
                        {props.name}
                    </a>
                </li>
        }
        </>
    )
}

export default ItemNav;