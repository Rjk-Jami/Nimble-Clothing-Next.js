import Image from "next/image";
import React, { useState } from "react";

const ProductImageZoom = ({ product }) => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setHoverPosition({ x, y });
  };

  return (
    <div className="w-full relative group  overflow-hidden border-4 border-black dark:border-white">
      {/* Main Image */}
      <Image
        className="w-full h-full  "
        alt={product?.name || "Product Image"}
        src={product?.image}
        width={500}
        height={500}
        priority
      />

      {/* Zoomed Section */}
      <div
        className="hidden lg:block bg-white dark:bg-black   absolute w-[1000px] h-[1000px] z-10 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onMouseMove={handleMouseMove}
      >
        <Image
          role="presentation"
          alt=""
          src={product?.image}
          className="absolute  object-cover pointer-events-none"
          width={1000}
          height={1000}
          style={{
            top: `${-hoverPosition.y * 10}px`,
            left: `${-hoverPosition.x * 10}px`,
          }}
        />
      </div>
    </div>
  );
};

export default ProductImageZoom;
