import './index.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { saveAs } from 'file-saver';
import { useEffect, useState } from 'react';
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
      Meme Generator by Sophie ©
      <br />
    </header>
  );
}

function Download() {
  const handleClick = () => {
    let url = 'https://api.memegen.link/images/doge.jpg';
    saveAs(url, 'doge.jpeg');
  };

  return (
    <div className="Download">
      <button onClick={handleClick}>Dowload image</button>
    </div>
  );
}

export default function App() {
  const [hexcolor, setHexcolor] = useState('background color hex code');
  const randomHex = Math.floor(Math.random() * 16777215).toString(16);

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
      <Download />
      <br />
      <div>Generated Color: {hexcolor}</div>
      <button
        onClick={() =>
          // 3. Set the state variable to a new value
          setHexcolor('#' + randomHex)
        }
      >
        Generate
      </button>
      <br />
    </div>
  );
}
