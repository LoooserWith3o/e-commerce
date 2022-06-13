import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const headerStyles = css`
  padding: 30px 30px;
  background-color: aqua;
  border: 200px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  font-style: none;
`;
const barbell = '/public/barbell.jpeg';
const bench = '/public/bench.jpeg';
const rack = '/public/rack.jpeg';
const dumbell = '/public/dumbel.avif';

export default function bodybuilding() {
  return (
    <div>
      <Head>
        <title>Dreambody for U</title>
        <meta name="Description" content="Page by me" />
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <header css={headerStyles}>
        <div>
          <ul>
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
        </div>
      </header>
    </div>
  );
}
