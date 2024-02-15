import React from 'react'

function Button(props) {
    return (
        <a href={props.path} className='px-6 min-w-36 py-[5px] bg-button-gradient text-nowrap
                hover:bg-button-gradient-hover transition-all duration-300 rounded-[12px]
                font-semibold text-[14px] cursor-pointer text-slate-100 flex justify-center items-center text-center'>
                    {props.name}
        </a>
    )
}

export default Button