import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import barbell from '../../public/barbell.jpeg';
import bench from '../../public/bench.jpeg';
import dumbell from '../../public/dumbel.avif';
import rack from '../../public/rack.jpeg';

const headerStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function bodybuilding() {
  return (
    <div>
      <Head>
        <title>GYMSHOP</title>
        <meta name="Description" content="Page by me" />
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <header>
        <div>
          <ul css={headerStyles}>
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
