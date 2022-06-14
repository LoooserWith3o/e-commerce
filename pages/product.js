import Link from 'next/link';
import React from 'react';

export default function product({ id, name, price, img }) {
  console.log(id, name, price, img);
  return (
    <div key={id} className=" font-sans">
      <container className="w-full">
        <img src={img} alt="Pic" className="w-full lg:w-1/2 " />
      </container>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-slate-900">
            {name}
          </h1>
          <div className="text-lg font-semibold text-slate-500">{price}</div>
          <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
            In stock
          </div>
        </div>
        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
          <div className="space-x-2 flex text-sm labelContainer">
            <label>
              <input className="sr-only peer" name="size" type="radio" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white ">
                5kg
              </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                10kg
              </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                10kg
              </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                15kg
              </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                50kg
              </div>
            </label>
          </div>
        </div>
        <div className="flex space-x-4 mb-6 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">
              <Link href={'/product/' + img}>
                <a>Add to muscle</a>
              </Link>
            </button>
          </div>
        </div>
        <p className="text-sm text-slate-700">
          Free shipping on weights below 20kg
        </p>
      </form>
    </div>
  );
}
