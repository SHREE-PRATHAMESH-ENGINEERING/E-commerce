import React from "react";
import ProductItem from "./ProductItem";
import Heading from "./Heading";
import Link from "next/link";

const ProductsSection = async () => {
  let products: Product[] = [];
  
  try {
    // Fetch the first 4 products from backend (chronological order)
    const data = await fetch("http://localhost:3001/api/products?limit=4", {
      cache: "no-store" // Ensure fresh data
    });
    
    if (data.ok) {
      products = await data.json();
    }
  } catch (error) {
    console.error("Failed to fetch featured products:", error);
    // Fallback: try to fetch all products and take first 4
    try {
      const fallbackData = await fetch("http://localhost:3001/api/products", {
        cache: "no-store"
      });
      if (fallbackData.ok) {
        const allProducts = await fallbackData.json();
        products = allProducts.slice(0, 4);
      }
    } catch (fallbackError) {
      console.error("Fallback fetch also failed:", fallbackError);
    }
  }

  return (
    <div className="bg-white border-t-4 border-[#5068a4] relative overflow-hidden">
      
      <div className="max-w-screen-2xl mx-auto pt-20 pb-16 relative z-10">
        <div className="text-animate mb-12">
          <Heading title="FEATURED PRODUCTS" />
        </div>
        
        {products.length > 0 ? (
          <>
            {/* Enhanced Grid with Better Spacing */}
            <div className="grid grid-cols-4 justify-items-center max-w-screen-2xl mx-auto gap-8 px-10 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
              {products.map((product: Product, index: number) => (
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
              <div className="inline-flex items-center gap-4 bg-[#FAF9EE] backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
                <span className="text-gray-700 font-medium">Need custom PCB solutions?</span>
                <Link href="/shop">
                  <button className="btn-pcb-hero px-6 py-2 text-sm">
                    VIEW ALL PRODUCTS
                  </button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          /* Fallback when no products are available */
          <div className="text-center py-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-12 shadow-lg max-w-md mx-auto">
              <div className="text-6xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-[#5068a4] mb-2">Products Coming Soon</h3>
              <p className="text-gray-600 mb-6">We're preparing our latest PCB solutions for you.</p>
              <Link href="/contact">
                <button className="btn-pcb-hero px-6 py-2 text-sm">
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsSection;
