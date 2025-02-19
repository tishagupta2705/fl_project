"use client";

import React from "react";
import { IconType } from "react-icons";

type Props = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  isColor?: boolean;
  className?: string;  // ✅ Added className prop
};

function Button({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  isColor,
  className,  // Added className parameter
}: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative flex items-center justify-center gap-2 rounded-2xl transition-all duration-300 ease-in-out w-full 
        ${outline ? "bg-transparent border-2 border-[#F59E0B] text-[#1E3A8A]" : "bg-[#1E3A8A] text-white"}  
        ${small ? "text-sm py-2 px-4" : "text-md py-3 px-6"}  
        ${small ? "font-light" : "font-medium"}  
        hover:shadow-md hover:scale-[1.03]  
        disabled:opacity-50 disabled:cursor-not-allowed  
        ${className || ""} //  Applied className dynamically
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className={`${isColor ? "text-[#00A6A6]" : "text-white"}`}
        />
      )}
      {label}
    </button>
  );
}

export default Button;



