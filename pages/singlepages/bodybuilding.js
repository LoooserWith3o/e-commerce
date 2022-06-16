import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import Layout from '../../Components/Layout';
import products from '../../products.json';
import barbell from '../../public/barbell.jpeg';
import bench from '../../public/bench.jpeg';
import dumbell from '../../public/dumbel.avif';
import rack from '../../public/rack.jpeg';

const list = css`
  display: flex;
  gap: 30px;
  padding-top: 50px;
  justify-content: center;
  list-style: none;
  text-align: center;
  font-size: 20px;
`;
const button = css`
  align-items: center;
`;

export default function Bodybuilding({ id, name, price, img }) {
  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  function cartAdd(product) {
    if (cartProducts[0]) {
      const cartProductsExist = cartProducts.find(
        (value) => value.id === product.id,
      );
      const existingQty = cartProductsExist.qty;
      cartProductsExist.qty = existingQty + 1;
      cartProducts.map(existingQty, existingQty + 1);
    } else {
      product.qty = 1;
      cartProducts.push(product);
      console.log(cartProducts);
    }
  }

  function removeFromCart() {
    if (count === 0) {
      return;
    } else {
      setCount(count - 1);
    }
  }
  function addToCart() {
    setCount(count + 1);
  }

  return (
    <Layout>
      <div>
        <Head>
          <title>GYMSHOP</title>
          <meta name="Description" content="Page by me" />
          <link rel="icon" href="/favicon.icon" />
        </Head>
        <header>
          <div width="100%" height="200px" />

          <ul css={list}>
            <li>
              <Image src={barbell} alt="barbell" width={400} height={300} />
              Barbell
            </li>
            <li>
              <Image src={bench} alt="bench" width={400} height={300} />
              Bench
            </li>
            <li>
              <Image src={dumbell} alt="dumbell" width={400} height={300} />
              Dumbell
            </li>
            <li>
              <Image src={rack} alt="rack" width={400} height={300} />
              Rack
            </li>
          </ul>
        </header>
      </div>
      {id}
      {products.map((product) => {
        return (
          <div key={product.id} className=" font-sans">
            <div className="w-full">
              <img
                src="https://i.imgur.com/8mVBQIO.jpg"
                alt="Pic"
                className="Images"
                loading="lazy"
                width="200px"
                height="200px"
              />
              <form className="flex-auto p-6">
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-semibold text-slate-900">
                    {product.name}
                  </h1>
                  <div className="text-lg font-semibold text-slate-500">
                    {product.price}
                  </div>
                  <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                    In stock
                  </div>
                </div>
                <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="h-3 flex text-sm color:white labeldiv">
                    <label>
                      <input className="radioText" name="size" type="radio" />
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white ">
                        5kg
                      </div>
                    </label>
                    <label>
                      <input className="radioText" name="size" type="radio" />
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                        10kg
                      </div>
                    </label>
                    <label>
                      <input className="radioText" name="size" type="radio" />
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                        20kg
                      </div>
                    </label>
                    <label>
                      <input className="radioText" name="size" type="radio" />
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                        40kg
                      </div>
                    </label>
                    <label>
                      <input className="radioText" name="size" type="radio" />
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                        100kg
                      </div>
                    </label>
                  </div>
                </div>
              </form>
              <h3>{count}</h3>
              <button css={button} onClick={() => cartAdd(product)}>
                Add to muscle
              </button>
              <button css={button} onClick={removeFromCart}>
                Remove from muscle
              </button>
              <div className="flex space-x-4 mb-6 text-sm font-medium">
                hhhh
              </div>
              <p className="text-sm text-slate-700">
                Free shipping on weights below 20kg
              </p>
            </div>
          </div>
        );
      })}
    </Layout>
  );
}
