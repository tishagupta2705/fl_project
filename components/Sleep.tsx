"use client";

import { motion } from "framer-motion";
import { BiBed } from "react-icons/bi";
import { IoBedOutline } from "react-icons/io5";

type Props = {};

function Sleep({}: Props) {
  return (
    <div>
      <p className="text-2xl font-semibold text-[#FACC15]">{`Where you'll sleep`}</p>
      <div className="flex flex-wrap justify-between gap-4 pt-6">
        {/* Bedroom 1 */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border border-[#FACC15] rounded-xl cursor-pointer hover:shadow-lg transition-all bg-[#1E293B] text-white w-[30%] min-w-[180px]"
        >
          <div className="flex flex-col items-start px-6 py-6 gap-2">
            <IoBedOutline size={28} />
            <p className="text-lg font-medium">Bedroom 1</p>
            <p className="text-sm text-gray-400">1 king bed</p>
          </div>
        </motion.div>

        {/* Bedroom 2 */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border border-[#FACC15] rounded-xl cursor-pointer hover:shadow-lg transition-all bg-[#1E293B] text-white w-[30%] min-w-[180px]"
        >
          <div className="flex flex-col items-start px-6 py-6 gap-2">
            <IoBedOutline size={28} />
            <p className="text-lg font-medium">Bedroom 2</p>
            <p className="text-sm text-gray-400">1 queen bed</p>
          </div>
        </motion.div>

        {/* Bedroom 3 */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border border-[#FACC15] rounded-xl cursor-pointer hover:shadow-lg transition-all bg-[#1E293B] text-white w-[30%] min-w-[180px]"
        >
          <div className="flex flex-col items-start px-6 py-6 gap-2">
            <div className="flex gap-2">
              <IoBedOutline size={28} />
              <BiBed size={28} />
            </div>
            <p className="text-lg font-medium">Bedroom 3</p>
            <p className="text-sm text-gray-400">1 queen bed, 1 single bed</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Sleep;
