"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaHeadphones } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";

const HeaderTop = () => {
  const { data: session }: any = useSession();

  const handleLogout = () => {
    setTimeout(() => signOut(), 1000);
    toast.success("Logout successful!");
  }
  return (
    <div className="h-10 text-white bg-[#5068a4] max-lg:px-5 max-lg:h-16 max-[573px]:px-0 relative overflow-hidden">
      {/* Subtle circuit patterns */}
      <div className="absolute top-1/2 left-1/4 w-12 h-0.5 bg-white opacity-10 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-0.5 bg-white opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="flex justify-between h-full max-lg:flex-col max-lg:justify-center max-lg:items-center max-w-screen-2xl mx-auto px-12 max-[573px]:px-0 relative z-10">
        <ul className="flex items-center h-full gap-x-5 max-[370px]:text-sm max-[370px]:gap-x-2">
          <li className="flex items-center gap-x-2 font-semibold group">
            <FaHeadphones className="text-white transition-transform duration-300 group-hover:scale-110" />
            <span className="transition-all duration-300 group-hover:text-shadow">+91 98765 43210</span>
          </li>
          <li className="flex items-center gap-x-2 font-semibold group">
            <FaRegEnvelope className="text-white text-xl transition-transform duration-300 group-hover:scale-110" />
            <span className="transition-all duration-300 group-hover:text-shadow">sales@prathmeshengineering.com</span>
          </li>
        </ul>
        <ul className="flex items-center gap-x-5 h-full max-[370px]:text-sm max-[370px]:gap-x-2 font-semibold">
          {!session ? ( 
          <>
          <li className="flex items-center">
            <Link href="/login" className="flex items-center gap-x-2 font-semibold group hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded transition-all duration-300">
              <FaRegUser className="text-white transition-transform duration-300 group-hover:scale-110" />
              <span className="transition-all duration-300 group-hover:text-shadow">Login</span>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/register" className="flex items-center gap-x-2 font-semibold group hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded transition-all duration-300">
              <FaRegUser className="text-white transition-transform duration-300 group-hover:scale-110" />
              <span className="transition-all duration-300 group-hover:text-shadow">Register</span>
            </Link>
          </li>
          </>
          ) :  (<>
          <span className="ml-10 text-base text-glow">{session.user?.email}</span>
          <li className="flex items-center">
            <button onClick={() => handleLogout()} className="flex items-center gap-x-2 font-semibold group hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded transition-all duration-300">
              <FaRegUser className="text-white transition-transform duration-300 group-hover:scale-110" />
              <span className="transition-all duration-300 group-hover:text-shadow">Log out</span>
            </button>
          </li>
          </>)}
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
