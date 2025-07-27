"use client";
import { useProductStore } from "@/app/_zustand/store";
import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const BuyNowSingleProductBtn = ({
  product,
  quantityCount,
}: SingleProductBtnProps) => {
  const router = useRouter();
  const { addToCart, calculateTotals } = useProductStore();

  const handleAddToCart = () => {
    addToCart({
      id: product?.id.toString(),
      title: product?.title,
      price: product?.price,
      image: product?.mainImage,
      amount: quantityCount,
    });
    calculateTotals();
    toast.success("Product added to the cart");
    router.push("/checkout");
  };
  return (
    <button
      onClick={handleAddToCart}
      className="btn w-[200px] text-lg border border-[#f5772b] hover:border-[#f5772b] border-1 font-normal bg-[#f5772b] text-white hover:bg-white hover:scale-110 hover:text-[#f5772b] transition-all uppercase ease-in max-[500px]:w-full"
    >
      Buy Now
    </button>
  );
};

export default BuyNowSingleProductBtn;
