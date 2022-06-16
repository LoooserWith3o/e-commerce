import { css } from '@emotion/react';
import Link from 'next/link';

const navBar = css`
  display: grid;
  flex-direction: row;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 160px;
  justify-content: center;
  font-size: 30px;
`;

const navigation = css`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  height: 35px;
  background-color: gold;
  width: 100vw;
  padding-top: 2%;
  padding-bottom: 2%;
  background-color: gold;
  font-size: 20px;
`;

export default function Header() {
  return (
    <header>
      <nav css={navBar}>
        <Link href="../pages/index.js">
          <h1>Heavy Heaven</h1>
        </Link>
        <div>
          <ul css={navigation}>
            <li>
              <Link href="/singlepages/bodybuilding">
                <a>Bodybuilding</a>
              </Link>
            </li>
            <li>
              <Link href="/singlepages/powerlifting">
                <a>Powerlifting</a>
              </Link>
            </li>
            <li>
              <Link href="/singlepages/strongman">
                <a>Strongman</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
