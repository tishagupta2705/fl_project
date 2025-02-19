"use client";

import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

function Heading({ title, subtitle, center }: Props) {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-3xl font-extrabold text-[#1E3A8A] font-[Poppins]">
        {title}
      </div>
      {subtitle && (
        <div className="font-medium text-[#F59E0B] mt-2 font-[Inter]">
          {subtitle}
        </div>
      )}
    </div>
  );
}

export default Heading;


