import { useState } from 'react';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const color = "black";
const divStyles = css`
  margin-top: 20px;
  background-image: "https://via.placeholder.com/500"
  margin-left: 20px;
  padding: 10px;
  width: 20em;
  border: solid black;
  color: ${color};
  border-radius: 1.3em;
  font-size: 2rem;

  
`;

export default function MemeGenerator() {
  const [toptext, addtoptext] = useState('');
  const [bottomtext, addtoptextbottom] = useState('');




  return (
    <><>
      <h1>Meme Generator</h1>

      <h2>Top text</h2>
      <input
        value={toptext}
        onChange={(event) => {
          // The current value of the text in the input
          console.log('event.currentTarget.value', event.currentTarget.value);
          addtoptext(event.currentTarget.value);
         } }/>
      <br />
      
      <br />
      <br />
      <br />
      <h2>Bottom text</h2>
      <input
        value={bottomtext}
        onChange={(event) => {
          // The current value of the text in the input
          console.log('event.currentTarget.value', event.currentTarget.value);
          addtoptextbottom(event.currentTarget.value);
         } }/>
      <br />
      <br />
      <br />
      <div  css = {divStyles}>
      Text oben: {toptext}
      <br />
      <br />
      <br />
      Text unten: {bottomtext}
      </div>


      <br />
      <br />
      <br />
    </><h2>onClick</h2><button
      onClick={() => {
        console.log('log');
        // setAirline('Niki Air');
      } }
    >
        console.log
      </button></>
  );
}

