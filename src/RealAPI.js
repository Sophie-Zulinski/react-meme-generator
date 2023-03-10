import './App.css';
import React from 'react';

class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch('https://api.memegen.link/templates')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: false,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;

    return (
      <div className="App">
        <h1> Gallery of all memes </h1>{' '}
        {items.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <img
            style={{
              width: '50px',
              cursor: 'pointer',
              height: '50px',
            }}
            src={item.blank}
            alt="bild"
          />
        ))}
      </div>
    );
  }
}

export default App;
