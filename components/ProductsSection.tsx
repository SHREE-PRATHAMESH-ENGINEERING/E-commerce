import React from "react";
import ProductItem from "./ProductItem";
import Heading from "./Heading";
import Link from "next/link";

const ProductsSection = async () => {
  // sending API request for getting all products
  const data = await fetch("http://localhost:3001/api/products");
  const products = await data.json();
  return (
    <div className="pcb-hero-bg pcb-pattern border-t-4 border-[#5068a4] relative overflow-hidden">
      {/* Background Circuit Elements */}
      <div className="absolute top-10 left-20 w-32 h-1 circuit-flow opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-24 h-1 circuit-flow opacity-30" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-10 w-4 h-4 bg-[#5068a4] rounded-full opacity-20 float-element"></div>
      <div className="absolute bottom-1/3 left-10 w-6 h-6 border border-[#3d5998] rounded-full opacity-15 float-delay-1"></div>
      
      <div className="max-w-screen-2xl mx-auto pt-20 pb-16 relative z-10">
        <div className="text-animate mb-12">
          <Heading title="FEATURED PRODUCTS" />
        </div>
        
        {/* Enhanced Grid with Better Spacing */}
        <div className="grid grid-cols-4 justify-items-center max-w-screen-2xl mx-auto gap-8 px-10 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {products.slice(0, 4).map((product: Product, index: number) => (
            <div
              key={product.id}
              className="w-full max-w-sm animate-scale"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'both'
              }}
            >
              <ProductItem product={product} color="white" />
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16 animate-in">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
            <span className="text-gray-700 font-medium">Need custom PCB solutions?</span>
            <Link href="/shop">
              <button className="btn-pcb-hero px-6 py-2 text-sm">
                VIEW ALL PRODUCTS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
