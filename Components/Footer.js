import { css } from '@emotion/react';
import React from 'react';

const footer = css`
  margin-top: 200px;
  margin-bottom: 0px;
  background-color: gold;
  padding-top: 2%;
  padding-bottom: 2%;
  height: 90px;
`;

export default function Footer() {
  return <h1 css={footer}>Copyright blablabla</h1>;
}
