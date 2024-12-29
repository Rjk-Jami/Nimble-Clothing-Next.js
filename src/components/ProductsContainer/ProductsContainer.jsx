"use client";
import Loading from '@/app/loading';
import UseGetProductsWithFilter from '@/hooks/UseGetProductsWithFilter';
import React from 'react'
import { useSelector } from 'react-redux';
import ProductsCard from '../ProductsCard/ProductsCard';

const ProductsContainer = () => {
    const { products, isLoading, isError, error } = UseGetProductsWithFilter();
    const { 2: colTwo, 3: colThree, 4: colFour } = useSelector(
      (state) => state.filter.displayTag.filterDisplaysControl
    );
  return (
    <div>
      <div>
        {/*products loading  */}
        {isLoading && <Loading />}
      </div>
      <div className={`grid grid-cols-1 ${colTwo ? ' md:grid-cols-2' :''} ${colThree ? ' md:grid-cols-3' :''} ${colFour  ? ' md:grid-cols-4' :''} gap-5`}>
        {products?.map((product, i) => (
          <ProductsCard key={i} product={product}></ProductsCard>
        ))}
      </div>
      <div className="">
        {(products?.length === 0 && !isLoading) && <h1 className=' text-center m-4 text-2xl md:text-3xl'>No products found !</h1>}
      </div>
    </div>
  )
}

export default ProductsContainer
