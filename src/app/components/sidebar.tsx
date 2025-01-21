"use client";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-black ">
      <Link
        href="/#gallery"
        className={`relative flex items-center hover:text-orange-500 text-sm md:text-lg ${
          active ? "text-orange-500" : ""
        }`}
        onClick={() => setActive(true)}
      >
        <span
          className={`w-2 h-4 bg-orange-500 transition-opacity duration-300 ${
            active ? "inline-block" : "hidden"
          }`}
        />
        <span className="ml-3">PICTURES</span>
      </Link>
    </div>
  );
};

export default Sidebar;
