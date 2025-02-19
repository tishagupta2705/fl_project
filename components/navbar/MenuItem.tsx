"use client";

import React from "react";

type Props = {
  onClick: () => void;
  label: string;
};

function MenuItem({ onClick, label }: Props) {
  return (
    <div
      className="px-4 py-3 font-semibold text-[#1E3A8A] transition-all duration-200 cursor-pointer rounded-md hover:bg-[#00A6A6] hover:text-white hover:scale-105"
      onClick={onClick}
    >
      {label}
    </div>
  );
}

export default MenuItem;


