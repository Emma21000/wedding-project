"use client";
import React, { useState, useEffect } from "react";
import "./globals.css";
import Navbar from "./navigation/Navbar";
import { navbar } from "../../data/navbar";
import Footer from "./Footer";
import { footer } from "../../data/footer";

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (            
    <html lang="en">
      <body className=" dark:bg-black dark:text-white">
        <Navbar data={navbar} theme={theme} setTheme={setTheme} />
        {children}
        <Footer data={footer} />
      </body>
    </html>
  );
}
