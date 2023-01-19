/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const color = 'white';
const divStyles = css`
  margin-top: 20px;
  margin-left: 20px;
  padding: 10px;
  width: 18em;
  height: 18em;
  border: solid black;
  color: ${color};
  border-radius: 1.3em;
  font-size: 2em;
  text-align: center;
  background-image: url('https://api.memegen.link/images/doge.jpg');
`;

export default function MemeGenerator() {
  const [toptext, setToptext] = useState('');
  const [bottomtext, setBottomtext] = useState('');

  return (
    <>
      <>
        <h1>Meme Generator</h1>

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
        <div css={divStyles}>
          {toptext} {/* Text oben:*/}
          <br />
          <br />
          {bottomtext} {/* Text unten: */}
        </div>
      </>
      <h2>onClick</h2>
    </>
  );
}
