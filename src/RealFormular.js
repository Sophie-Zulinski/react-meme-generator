/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const divStyles = css`
  color: white;
  font-size: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  background-image: url('https://api.memegen.link/images/doge.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 5px;
`;

const bodyStyles = css`

  border: solid black;
  font-size: 1rem;
  align-items: center;
  justify-content:center
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

`;

export default function MemeGenerator() {
  const [toptext, setToptext] = useState('');
  const [bottomtext, setBottomtext] = useState('');
  const [memetemplate, setMemetemplate] = useState('');

  return (
    <>
      <h1>Meme Generator</h1>
      <body css={bodyStyles}>
        <h2>Top text</h2>
        <input
          value={toptext}
          onChange={(event) => {
            // The current value of the text in the input
            console.log('event.currentTarget.value', event.currentTarget.value);
            setToptext(event.currentTarget.value);
          }}
        />
        <h2>Bottom text</h2>
        <input
          value={bottomtext}
          onChange={(event) => {
            // The current value of the text in the input
            console.log('event.currentTarget.value', event.currentTarget.value);
            setBottomtext(event.currentTarget.value);
          }}
        />
        <h2>Change meme template</h2>
        <input
          value={memetemplate}
          onChange={(event) => {
            // The current value of the text in the input
            console.log('event.currentTarget.value', event.currentTarget.value);
            setMemetemplate(event.currentTarget.value);
          }}
        />

        <div css={divStyles}>
          {toptext} {/* Text oben:*/}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {bottomtext} {/* Text unten: */}
        </div>
      </body>
    </>
  );
}
