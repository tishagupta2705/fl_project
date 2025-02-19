"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ClientOnly from "./ClientOnly";
import FooterColumn from "@/components/FooterColumn";

type Props = {};

function Footer({}: Props) {
  const [country, setCountry] = useState("United States");

  const itemData = [
    ["ABOUT BREEZSTAY", "Our Story", "Luxury Stays", "Sustainability Efforts", "Careers", "Investor Relations"],
    ["Support", "Help Center", "BreezStay Protection", "Flexible Cancellation", "Safety & Security", "Report an Issue"],
    ["Community", "Travel Guides", "Exclusive Membership", "Guest Stories", "Events & Meetups", "Partnerships"],
    ["Hosting", "Become a Host", "Hosting Benefits", "Resources & Tips", "Responsible Hosting", "Host Guarantee"],
  ];

  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_LOOKUP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);

  const footerColumns = itemData.map((item, index) => (
    <FooterColumn index={index} data={item} />
  ))

  return (
    <ClientOnly>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-900 text-gray-300">
        {footerColumns}
        <p className="text-sm text-white">{country}</p>
      </div>
    </ClientOnly>
  );
}

export default Footer;
