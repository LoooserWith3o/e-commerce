import { css } from '@emotion/react';
import React from 'react';

const heroPage = css`
  width: 110%;
  height: 80vh;
  background-image: url('../workout3.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function Heropage() {
  return (
    <div css={heroPage}>
      {/* <img src="../workout3.jpeg" alt="pic" widht="500px" height="500px" /> */}
    </div>
  );
}
