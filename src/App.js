import './index.css';
import RealAPI from './RealAPI';
import RealFormular from './RealFormular';

function Header(props) {
  return (
    <header>
      Meme Generator
      <br />
    </header>
  );
}

export default function App() {
  return (
    <>
      <Header mode="dark" />
      <RealAPI />
      <br />
      <br />
      <br />
      <RealFormular />
      <br />
      <br />
      <br />

      <br />
    </>
  );
}
