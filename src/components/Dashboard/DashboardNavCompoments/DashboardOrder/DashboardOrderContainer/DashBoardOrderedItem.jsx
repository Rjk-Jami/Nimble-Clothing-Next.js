import Image from 'next/image';
import React from 'react';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';

const DashBoardOrderedItem = ({ OrderProduct, order }) => {
  return (
    <div className="flex flex-col gap-3">
      {OrderProduct?.map((OrderProduct, OrderProductIndex) => {
        const prod = order?.product?.find((prod) => prod._id === OrderProduct._id);

        return (
          <div
            key={OrderProductIndex}
            className="grid grid-cols-3 items-center border border-gray-300 p-2 rounded-md"
          >
            {/* Product Image and Details */}
            <div className="col-span-2 flex items-center gap-4">
              <Image
                className="border-2 rounded-md"
                height={50}
                width={50}
                alt={OrderProduct.name}
                src={OrderProduct.image}
              />
              <div className="flex flex-col">
                <div className="font-medium">{OrderProduct.name}</div>
                <div className="text-sm text-gray-500">
                  Size: <span className="font-semibold">{prod?.size || 'N/A'}</span>
                </div>
              </div>
            </div>

            {/* Price and Quantity */}
            <div className="text-right">
              <div className="inline-flex items-center gap-1 text-gray-800">
                <FaBangladeshiTakaSign />
                <span className="font-semibold">{prod?.price || 'N/A'}</span>
              </div>
              <div className="text-sm text-gray-500">
                Qty: <span className="font-semibold">{prod?.quantity || '0'}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashBoardOrderedItem;
