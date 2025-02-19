"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

function Logo({}: Props) {
  const router = useRouter();

  return (
    <div 
      onClick={() => router.push("/")}
      className="cursor-pointer transition-transform duration-300 hover:scale-110"
    >
      <Image
        alt="logo"
        className="hidden md:block drop-shadow-lg"
        height="100"
        width="100"
        src="/assets/breezstaypng.png"
      />
    </div>
  );
}

export default Logo;
