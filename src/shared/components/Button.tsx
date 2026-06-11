import React from 'react'
import { ButtonProps } from '../types/ButtonTypes'

const Button = ({ label, onClick, disabled, variant, size }: ButtonProps) => {
  return (
    < >
        <button
        className={`text-white font-bold text-sm rounded-2xl shadow-sm py-3 px-6 ${variant === 'primary' ? 'bg-[#C1785A]' : 'bg-gray-500'} ${size === 'small' ? 'text-sm' : size === 'medium' ? 'text-base' : 'text-lg'}`}
        onClick={onClick}
        disabled={disabled}
        >
            {label}
        </button>
     </>
   )
}

export default Button