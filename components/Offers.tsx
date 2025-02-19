"use client";

import { motion } from "framer-motion";
import { AiOutlineCar, AiOutlineWifi } from "react-icons/ai";
import { BiCctv } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { FaFireExtinguisher } from "react-icons/fa";
import { GiButterflyFlower } from "react-icons/gi";
import { GrWorkshop } from "react-icons/gr";
import { MdOutlineBathtub, MdOutlineCoffeeMaker } from "react-icons/md";
import { RiSafeLine } from "react-icons/ri";

const offers = [
  { label: "Garden view", icon: GiButterflyFlower },
  { label: "Hot water", icon: BsFire },
  { label: "Wifi", icon: AiOutlineWifi },
  { label: "Coffee", icon: MdOutlineCoffeeMaker },
  { label: "Security cameras on property", icon: BiCctv },
  { label: "Bathtub", icon: MdOutlineBathtub },
  { label: "Dedicated workspace", icon: GrWorkshop },
  { label: "Safe", icon: RiSafeLine },
  { label: "Free parking on premises", icon: AiOutlineCar },
  { label: "Fire extinguisher", icon: FaFireExtinguisher },
];

type Props = {};

function Offers({}: Props) {
  return (
    <div>
      <p className="text-2xl font-semibold text-[#FACC15]">{`What this place offers`}</p>
      <div className="grid grid-cols-2 gap-6 pt-6">
        {offers.map((item, index) => (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.05 }}
            viewport={{ once: true }}
            key={index}
            className="flex items-center gap-4 px-4 py-3 border border-[#FACC15] rounded-lg bg-[#1E293B] text-white hover:text-[#FACC15] transition-all cursor-pointer"
          >
            <item.icon size={30} className="text-[#FACC15]" />
            <p className="text-lg">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
