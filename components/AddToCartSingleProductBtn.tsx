"use client";

import React from "react";
import { useProductStore } from "@/app/_zustand/store";
import toast from "react-hot-toast";

const AddToCartSingleProductBtn = ({ product, quantityCount } : SingleProductBtnProps) => {
  const { addToCart, calculateTotals } = useProductStore();

  const handleAddToCart = () => {
    addToCart({
      id: product?.id.toString(),
      title: product?.title,
      price: product?.price,
      image: product?.mainImage,
      amount: quantityCount
    });
    calculateTotals();
    toast.success("Product added to the cart");
  };
  return (
    <button
      onClick={handleAddToCart}
      className="btn w-[200px] text-lg border border-gray-300 border-1 font-normal bg-white text-[#f5772b] hover:bg-[#f5772b] hover:text-white hover:border-[#f5772b] hover:scale-110 transition-all uppercase ease-in max-[500px]:w-full"
    >
      Add to cart
    </button>
  );
};

export default AddToCartSingleProductBtn;
