"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

type Props = {
  icon: IconType;
  label: string;
  selected?: boolean;
  className?: string; // ✅ Fix: Added this to avoid TypeScript error
};

function CategoryBox({ icon: Icon, label, selected, className }: Props) {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <motion.div
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 cursor-pointer transition rounded-xl shadow-md ${className} ${
        selected
          ? "border-[#F59E0B] text-[#F59E0B] bg-[#1E3A8A]/10"
          : "border-transparent text-gray-500 hover:text-[#00A6A6] hover:bg-[#1E3A8A]/5"
      }`}
    >
      <Icon size={26} className={`${selected ? "text-[#F59E0B]" : "text-[#1E3A8A]"}`} />
      <div className="font-medium text-xs font-[Poppins]">{label}</div>
    </motion.div>
  );
}

export default CategoryBox;



