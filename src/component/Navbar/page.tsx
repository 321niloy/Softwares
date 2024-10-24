"use client"; // Ensures the code runs on the client side (if using Next.js 13 or later)

import { useState } from "react";
import "./navbar.css";
import Link from "next/link";
import Image from "next/image";
import logos from "@/assets/picture/Logo1.png";
import search from "@/assets/picture/searchicon.svg";
import animationbutton from "@/assets/picture/navAnimationButton.png";
import Signin from "../shared/page";

export default function Navbar() {
  const [language, setLanguage] = useState("EN");
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "BN" : "EN");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="p-4 shadow-lg">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <Link href="/" passHref>
            <Image src={logos} alt="Logo" height={30} width={100} />
          </Link>
        </div>

        {/* Search Field */}
        <div className="relative flex items-center mx-4">
          <input
            type="text"
            placeholder="কোর্স সার্চ করুন"
            className="w-40 px-4 py-2 rounded-2xl text-gray-700 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
            style={{ textAlign: "center" }}
          />
          <Image
            className="absolute left-2"
            src={search}
            alt="Search Icon"
            height={20}
            width={20}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-black focus:outline-none"
        >
          {mobileMenuOpen ? "✖️" : "☰"} {/* Toggle icon for menu */}
        </button>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-4 text-black items-center">
          <div
            className="relative flex gap-2 p-1 rounded-lg"
            style={{
              background:
                "linear-gradient(90deg, #ff7e5f, #feb47b, #86a8e7, #91eae4)",
              backgroundSize: "200% 200%",
              animation: "gradient-border 3s ease infinite",
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-white rounded-md p-2">
              <Image
                height={3}
                width={4}
                alt="special-icon"
                className="w-6 h-6 rotate-0 transition-all duration-300"
                src={animationbutton}
              />
              <p className="text-black text-button uppercase whitespace-nowrap">
                স্পেশাল অফার
              </p>
            </div>
          </div>

          <Link
            href="/link2"
            className="hover:text-black p-2 hover:bg-gray-200 hover:rounded-xl"
          >
            কোড মামা
          </Link>
          <Link
            href="/link2"
            className="hover:text-black p-2 hover:bg-gray-200 hover:rounded-xl"
          >
            ফ্রী কোর্সেস
          </Link>

          {/* Dropdowns for Desktop */}
          <div className="relative">
            <button
              className="hover:text-black"
              onClick={() => setDropdownOpen1(!dropdownOpen1)}
            >
              আরও
            </button>
            {dropdownOpen1 && (
              <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                <Link
                  href="/dropdown1"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  ব্লগ
                </Link>
                <Link
                  href="/dropdown2"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  ডাউনলোড
                </Link>
              </div>
            )}
          </div>

          {/* Language Toggle */}
          <div className="text-black mx-4">
            <button onClick={toggleLanguage}>
              {language === "EN" ? "English" : "বাংলা"}
            </button>
          </div>

          <div className="relative">
            <button
              className="hover:text-gray-400"
              onClick={() => setDropdownOpen2(!dropdownOpen2)}
            >
              সব কোর্স
            </button>
            {dropdownOpen2 && (
              <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                <Link
                  href="/option1"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  কোর্স ১
                </Link>
                <Link
                  href="/option2"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  কোর্স ২
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Signup Button */}
        <Signin />
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-md shadow-md p-4">
          <Link
            href="/link2"
            className="block text-black py-2 hover:bg-gray-200 rounded-md"
          >
            কোড মামা
          </Link>
          <Link
            href="/link2"
            className="block text-black py-2 hover:bg-gray-200 rounded-md"
          >
            ফ্রী কোর্সেস
          </Link>

          {/* Mobile Dropdowns */}
          <div className="relative">
            <button
              className="block text-black py-2 hover:bg-gray-200 rounded-md w-full text-left"
              onClick={() => setDropdownOpen1(!dropdownOpen1)}
            >
              আরও
            </button>
            {dropdownOpen1 && (
              <div className="absolute mt-2 py-2 w-full bg-white rounded-md shadow-xl z-20">
                <Link
                  href="/dropdown1"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  ব্লগ
                </Link>
                <Link
                  href="/dropdown2"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  ডাউনলোড
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="block text-black py-2 hover:bg-gray-200 rounded-md w-full text-left"
              onClick={() => setDropdownOpen2(!dropdownOpen2)}
            >
              সব কোর্স
            </button>
            {dropdownOpen2 && (
              <div className="absolute mt-2 py-2 w-full bg-white rounded-md shadow-xl z-20">
                <Link
                  href="/option1"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  কোর্স ১
                </Link>
                <Link
                  href="/option2"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  কোর্স ২
                </Link>
              </div>
            )}
          </div>

          {/* Language Toggle */}
          <div className="text-black mt-2">
            <button
              onClick={toggleLanguage}
              className="w-full text-left py-2 hover:bg-gray-200 rounded-md"
            >
              {language === "EN" ? "English" : "বাংলা"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
