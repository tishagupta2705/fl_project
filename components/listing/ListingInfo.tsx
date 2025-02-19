"use client";

import useCountries from "@/hook/useCountries";
import { SafeUser } from "@/types";
import dynamic from "next/dynamic";
import React from "react";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import Sleep from "../Sleep";
import Offers from "../Offers";

// Dynamically imported Map with error handling
const Map = dynamic(() => import("../Map"), {
  ssr: false,
  loading: () => <p className="text-center text-white">Loading map...</p>, // Temporary fallback UI
});

type Props = {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category?:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
};

function ListingInfo({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}: Props) {
  const { getByValue } = useCountries();
  const locationData = getByValue(locationValue);
  const coordinates = locationData?.latlng;

  console.log("Location Data:", locationData); // Debugging

  return (
    <div className="col-span-4 flex flex-col gap-10 bg-gradient-to-br from-[#0F172A] to-[#1E293B] backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-white">
      {/* Host Info */}
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-semibold flex flex-row items-center gap-3 text-[#FACC15]">
          <span>Hosted by {user?.name}</span>
          <Avatar src={user?.image} userName={user?.name} />
        </div>
        <div className="flex flex-row items-center gap-4 text-lg">
          <p className="px-4 py-2 bg-[#334155] rounded-lg shadow-md">{guestCount} guests</p>
          <p className="px-4 py-2 bg-[#334155] rounded-lg shadow-md">{roomCount} rooms</p>
          <p className="px-4 py-2 bg-[#334155] rounded-lg shadow-md">{bathroomCount} bathrooms</p>
        </div>
      </div>

      <hr className="border-[#475569]" />

      {/* Category Section */}
      {category && (
        <div className="bg-[#334155] p-4 rounded-xl shadow-md flex items-center gap-3">
          <ListingCategory icon={category.icon} label={category.label} description={category.description} />
        </div>
      )}

      <hr className="border-[#475569]" />

      {/* BreezCover Protection Section */}
      <div className="flex flex-col bg-gradient-to-r from-[#FACC15] to-[#FF5A5F] text-black p-6 rounded-2xl shadow-lg">
        <p className="text-4xl font-bold">
          Breez<span className="text-black/80">Cover</span>
        </p>
        <p className="pt-3">
          Your stay is safeguarded with <span className="font-semibold">BreezCover</span>,
          ensuring protection against host cancellations, listing discrepancies, and
          check-in issues for a hassle-free experience.
        </p>
        <p className="font-semibold underline pt-3 cursor-pointer hover:text-gray-900 transition">
          Learn more
        </p>
      </div>

      <hr className="border-[#475569]" />

      {/* Listing Description */}
      <p className="text-lg leading-relaxed bg-[#334155] p-4 rounded-lg shadow-md">{description}</p>

      <hr className="border-[#475569]" />

      {/* Sleeping Arrangements */}
      <Sleep />

      <hr className="border-[#475569]" />

      {/* Offers Section */}
      <Offers />

      <hr className="border-[#475569]" />

      {/* Location Section */}
      <p className="text-2xl font-semibold text-[#FACC15]">Where you’ll be</p>

      {/* Map Section with Error Handling */}
      {coordinates ? (
        <div className="overflow-hidden rounded-xl shadow-lg">
          <Map center={coordinates} locationValue={locationValue} />
        </div>
      ) : (
        <p className="text-red-500">Location data unavailable</p>
      )}
    </div>
  );
}

export default ListingInfo;





