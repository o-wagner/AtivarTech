import React from 'react'

function Button(props) {
    return (
        <button className='px-6 w-48 py-[5px] bg-button-gradient text-nowrap
                hover:bg-button-gradient-hover transition-all duration-300 rounded-[12px]
                font-semibold text-[16px] text-slate-100 flex justify-center items-center text-center'>
                    {props.name}
        </button>
    )
}

export default Button