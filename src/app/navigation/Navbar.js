"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar({ data, theme, setTheme }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="w-full relative flex items-center justify-between  px-8 lg:px-16 lg:py-2 py-6 shadow-2xl shadow-gray-300 bg-[#3f9a9c]">
      <div className="flex items-center gap-3">
        <p className="text-5xl">{data.icon}</p>
        <h1 className="text-4xl font-header">{data.name}</h1>
      </div>

      <div
        className={`${  
          toggleMenu ? "flex" : "hidden"
        } lg:w-auto bg-[#3f9a9c] px-30 justify-center lg:flex lg:static font-header absolute top-full left-0 w-[50%] flex-col gap-10 text-2xl font-thin  lg:flex-row lg:gap-6 lg:bg-transparent py-8 `}
      >
            {data.list.map((elem, index) => (
              <Link
                key={index}
                href={elem.path}
                className="text-xl font-header tracking-widest"
              >
                {elem.title}
              </Link>
            ))}
      </div>
      <div className="lg:flex items-center justify-end flex-col lg:flex-row gap-10 hidden">
        <button className=" font-header px-8 py-3 bg-[#378a8b] rounded-4xl text-3xl font-thin tracking-widest border-2 border-transparent hover:text-[#2e5859] hover:border-[#2e5859] hover:bg-white cursor-pointer transition-all duration-200">
          Contact Now
        </button>
        <button className="cursor-pointer text-5xl"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
        {theme === "light" ? data.light : data.dark}
        </button>
      </div>
      <p
        className="lg:hidden text-2xl cursor-pointer"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        {toggleMenu ? data.close : data.menuIcon}
      </p>
    </div>
  );
}
