import React from 'react'
import { Link } from "react-scroll";

const ItemNav = (props) => {
    return (       
            <Link
                to={props.path} spy={true} smooth={true} offset={props.offset} duration={500}
                className='font-semibold text-lg text-lighter-gray 
                hover:text-primary-blue text-nowrap'>
                {props.name}
            </Link>
    )
}

export default ItemNav;