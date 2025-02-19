"use client";

import { motion } from "framer-motion";

type Props = {
    index: number;
    data: Array<string>;
};

function FooterColumn({ index, data }: Props) {
    const columnItems = data.map((item, i) =>
        i === 0 ? <h5 key={i} className="font-bold text-white">{item}</h5> : <p key={i} className="text-gray-300">{item}</p>
    );

    return (
        <motion.div
            initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4 text-xs text-gray-100"
        >
            {columnItems}
        </motion.div>
    );
}

export default FooterColumn;


