
"use client";

import useCountries from "@/hook/useCountries";
import useSearchModal from "@/hook/useSearchModal";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";

type Props = {};

function Search({}: Props) {
  const searchModel = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  // Get location label
  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }
    return "Anywhere";
  }, [getByValue, locationValue]);

  // Get duration label
  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);
      return `${diff > 0 ? diff : 1} Days`;
    }
    return "Any Week";
  }, [startDate, endDate]);

  // Get guest label
  const guestLabel = useMemo(() => (guestCount ? `${guestCount} Guests` : "Add Guests"), [guestCount]);

  return (
    <motion.div
      onClick={(e) => {
        e.stopPropagation(); // Prevent accidental clicks from bubbling
        searchModel.onOpen();
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full md:w-auto py-2 rounded-full bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all cursor-pointer border border-white/20"
    >
      <div className="flex flex-row items-center justify-between px-4">
        {/* Location Label */}
        <div className="text-sm font-semibold px-4 text-[#FDE68A]">{locationLabel}</div>

        {/* Duration Label */}
        <div className="hidden sm:block text-sm font-semibold px-6 border-x border-white/20 flex-1 text-center text-[#FDE68A]">
          {durationLabel}
        </div>

        {/* Guests + Search Icon */}
        <div className="text-sm pl-6 pr-2 text-[#FDE68A] flex flex-row items-center gap-3">
          <div className="hidden sm:block text-center">{guestLabel}</div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-gradient-to-r from-[#1E3A8A] to-[#00A6A6] rounded-full text-white shadow-md hover:scale-105 transition-all"
          >
            <BiSearch size={18} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Search;





