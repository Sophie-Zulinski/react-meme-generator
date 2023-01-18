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

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch('https://api.memegen.link/templates')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1>{' '}
        {items.map((item) => (
          <ol key={item.id}>Pictures: {item.blank}</ol>
        ))}
      </div>
    );
  }
}

export default App;
