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

export default function Powerlifting({ id, name, price, img }) {
  console.log(id, name, price, img);
  const [count, setCount] = useState(0);
  return (
    <Layout>
      <div>
        <Head>
          <title>GYMSHOP</title>
          <meta name="Description" content="Page by me" />
          <link rel="icon" href="/favicon.icon" />
        </Head>

        <div width="100%">
          <header>
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
          {id}
          {products.map((product) => {
            return (
              <div key={id} className=" font-sans">
                <container className="w-full">
                  <img
                    src="https://i.imgur.com/8mVBQIO.jpg"
                    alt="Pic"
                    className="Images"
                    loading="lazy"
                    width="200px"
                    height="200px"
                  />
                </container>
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
                  <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                    <div className="space-x-2 flex text-sm labelContainer">
                      <label>
                        <input
                          className="sr-only peer"
                          name="size"
                          type="radio"
                        />
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white ">
                          5kg
                        </div>
                      </label>
                      <label>
                        <input
                          className="sr-only peer"
                          name="size"
                          type="radio"
                        />
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                          10kg
                        </div>
                      </label>
                      <label>
                        <input
                          className="sr-only peer"
                          name="size"
                          type="radio"
                        />
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                          10kg
                        </div>
                      </label>
                      <label>
                        <input
                          className="sr-only peer"
                          name="size"
                          type="radio"
                        />
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                          15kg
                        </div>
                      </label>
                      <label>
                        <input
                          className="sr-only peer"
                          name="size"
                          type="radio"
                        />
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                          50kg
                        </div>
                      </label>
                    </div>
                  </div>
                </form>
                <div className="flex space-x-4 mb-6 text-sm font-medium">
                  <div className="flex-auto flex space-x-4">
                    <button
                      css={button}
                      onClick={() => setCount(count + 1)}
                      className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                    >
                      Add to muscle
                    </button>
                    <button
                      css={button}
                      onClick={() => setCount(count - 1)}
                      className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                    >
                      Remove from muscle
                    </button>
                    <h3>{count}</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-700">
                  Free shipping on weights below 20kg
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
