"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import HeaderTop from "./HeaderTop";
import Image from "next/image";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { FaBell } from "react-icons/fa6";

import CartElement from "./CartElement";
import HeartElement from "./HeartElement";
import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useWishlistStore } from "@/app/_zustand/wishlistStore";

const Header = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const { wishlist, setWishlist, wishQuantity } = useWishlistStore();

  const handleLogout = () => {
    setTimeout(() => signOut(), 1000);
    toast.success("Logout successful!");
  };

  // getting all wishlist items by user id
  const getWishlistByUserId = async (id: string) => {
    const response = await fetch(`http://localhost:3001/api/wishlist/${id}`, {
      cache: "no-store",
    });
    const wishlist = await response.json();
    const productArray: {
      id: string;
      title: string;
      price: number;
      image: string;
      slug:string
      stockAvailabillity: number;
    }[] = [];
    
    wishlist.map((item: any) => productArray.push({id: item?.product?.id, title: item?.product?.title, price: item?.product?.price, image: item?.product?.mainImage, slug: item?.product?.slug, stockAvailabillity: item?.product?.inStock}));
    
    setWishlist(productArray);
  };

  // getting user by email so I can get his user id
  const getUserByEmail = async () => {
    if (session?.user?.email) {
      
      fetch(`http://localhost:3001/api/users/email/${session?.user?.email}`, {
        cache: "no-store",
      })
        .then((response) => response.json())
        .then((data) => {
          getWishlistByUserId(data?.id);
        });
    }
  };

  useEffect(() => {
    getUserByEmail();
  }, [session?.user?.email, wishlist.length]);

  return (
    <header className="pcb-hero-bg pcb-pattern border-b-2 border-[#5068a4] relative">
      {/* Background Circuit Elements */}
      <div className="absolute top-1/2 left-10 w-20 h-1 circuit-flow opacity-20"></div>
      <div className="absolute top-1/2 right-10 w-16 h-1 circuit-flow opacity-25" style={{animationDelay: '1s'}}></div>
      
      <HeaderTop />
      {pathname.startsWith("/admin") === false && (
        <div className="h-32 bg-transparent flex items-center justify-between px-16 max-[1320px]:px-16 max-md:px-6 max-lg:flex-col max-lg:gap-y-7 max-lg:justify-center max-lg:h-60 max-w-screen-2xl mx-auto relative z-10">
          <Link href="/" className="group relative">
            <img 
              src="/logo v1 svg.svg" 
              width={200} 
              height={200} 
              alt="Shree Prathmesh Engineering - PCB Manufacturing" 
              className="relative right-5 max-[1023px]:w-56 transition-all duration-300 group-hover:scale-105 filter drop-shadow-lg group-hover:drop-shadow-xl" 
            />
            {/* Glowing effect around logo */}
            <div className="absolute inset-0 -m-2 border border-[#5068a4] rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </Link>
          
          <div className="relative">
            <SearchInput />
          </div>
          
          <div className="flex gap-x-10 items-center">
            <div className="relative group">
              <HeartElement wishQuantity={wishQuantity} />
              {/* Circuit indicator */}
              <div className="absolute -bottom-1 left-1/2 w-6 h-0.5 bg-[#5068a4] transform -translate-x-1/2 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
            <div className="relative group">
              <CartElement />
              {/* Circuit indicator */}
              <div className="absolute -bottom-1 left-1/2 w-6 h-0.5 bg-[#5068a4] transform -translate-x-1/2 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      )}
      {pathname.startsWith("/admin") === true && (
        <div className="flex justify-between h-32 bg-transparent items-center px-16 max-[1320px]:px-10  max-w-screen-2xl mx-auto max-[400px]:px-5 relative z-10">
          <Link href="/" className="group relative">
            <Image
              src="/logo v1 svg.svg"
              width={130}
              height={130}
              alt="Shree Prathmesh Engineering - PCB Manufacturing"
              className="w-56 h-auto transition-all duration-300 group-hover:scale-105 filter drop-shadow-lg"
            />
            {/* Glowing effect around logo */}
            <div className="absolute inset-0 -m-2 border border-[#5068a4] rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </Link>
          <div className="flex gap-x-5 items-center">
            <FaBell className="text-xl" />
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="w-10">
                <Image
                  src="/randomuser.jpg"
                  alt="random profile photo"
                  width={30}
                  height={30}
                  className="w-full h-full rounded-full"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/admin">Dashboard</Link>
                </li>
                <li>
                  <a>Profile</a>
                </li>
                <li onClick={handleLogout}>
                  <a href="#">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
