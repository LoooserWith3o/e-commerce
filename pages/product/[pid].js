import { useRouter } from 'next/router';
import React from 'react';
import allProducts from '../../products.json';
import Product from '../product';

export default function SingleProduct() {
  const router = useRouter();
  const { pid } = router.query;

  function ShowProduct() {
    return allProducts.map((product) => {
      console.log(product.id);
      console.log(pid);
      if (product.id === pid) {
        return (
          <Product
            id={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
          />
        );
      }
    });
  }
  return <ShowProduct />;
}
