import React from 'react'
import Underline from '../design/underline'

const AdditionalInformation = ({product}) => {
  return (
    <div>
      <div className="w-3/4 lg:w-3/5 mx-auto ">
                <div className="">
                  <div className="flex gap-2 justify-between">
                    <div className="">Size</div>
                    <div className="flex gap-2">
                    {product?.sizes.map((size, i) => (
                      <div key={i}>
                        {size}
                        {i < product.sizes.length - 1 ? ", " : ""}
                      </div>
                    ))}
                    </div>
                  </div>
                  <Underline height="h-[1px]" width="w-full" css="mt-1 mb-1" />
                  <div className=" flex gap-2 justify-between">
                    <div className="">Brand</div>
                    <div className="">Nimble Ware</div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default AdditionalInformation
