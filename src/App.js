import './index.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect } from 'react';
import RealAPI from './RealAPI';
import RealFormular from './RealFormular';

const divStyles = css`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightsalmon;

  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`;

function Header(props) {
  return (
    <header css={divStyles}>
      Meme Generator
      <br />
    </header>
  );
}

export default function App() {
  return (
    <div css={divStyles}>
      <Header mode="dark" />

      <br />
      <br />

      <br />

      <RealAPI />
      <br />
      <br />
      <br />
      <RealFormular />
      <br />
      <br />
      <br />

      <br />
    </div>
  );
}
