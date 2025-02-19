"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is just a short walk from the beach, perfect for beach lovers!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "Experience the charm of this property with its scenic windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "A contemporary and stylish property with sleek modern amenities!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "Located in the peaceful countryside, surrounded by nature's beauty!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "Relax and unwind in the property’s stunning pool area!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "Escape to your own private island with this exclusive property!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "Enjoy the tranquil surroundings of a lake just moments away from this property!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property offers thrilling skiing experiences for adventure enthusiasts!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "Step into history with this magnificent ancient castle property!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "Explore the mysterious ambiance of a property located in a natural cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "Enjoy the great outdoors with camping activities available at this property!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "Experience the chill of the Arctic with this property in a snowy environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "Embrace the vast, beautiful desert landscape surrounding this property!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "A rustic barn setting for those who enjoy farm-style living and country vibes!",
  },
  {
    label: "Luxury",
    icon: IoDiamond,
    description: "Indulge in top-tier luxury with this newly built, high-end property!",
  },
];

type Props = {};

function Categories({}: Props) {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto space-x-4 px-4">
        {categories.map((item, index) => (
          <CategoryBox
            key={index}
            icon={item.icon}
            label={item.label}
            selected={category === item.label}
            className={`transition transform hover:scale-105 ${
              category === item.label ? "text-[#F59E0B] border-b-2 border-[#F59E0B]" : "text-gray-500"
            }`}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;





