"use client";

import useFavorite from "@/hook/useFavorite";
import { SafeUser } from "@/types";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

type Props = {
  listingId: string;
  currentUser?: SafeUser | null;
};

function HeartButton({ listingId, currentUser }: Props) {
  const { hasFavorite, toggleFavorite } = useFavorite({ listingId, currentUser });

  return (
    <div
      onClick={toggleFavorite}
      className="relative cursor-pointer transition-all duration-300 hover:scale-110 active:scale-100 
                 flex items-center justify-center bg-white/10 backdrop-blur-md shadow-xl rounded-full p-3"
    >
      
      <AiOutlineHeart
        size={32}
        className="absolute text-white/80 transition-all"
      />
      
      <AiFillHeart
        size={28}
        className={`${hasFavorite ? "fill-[#F59E0B] drop-shadow-md" : "fill-[#374151]/70"} transition-all`}
      />
    </div>
  );
}

export default HeartButton;


