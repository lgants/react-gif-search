import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import './index.css';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';

// App is parent of SearchBar because it's rendered inside App

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    }
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    });
  }

  // the this in this.handleTermChange is onTermChange!
  // resolved be either:
  // binding this in the constructor
  //   (i.e. this.handleTermChange.bind(this))
  // OR, fat-arrow functions
  //    Two options:
  //      As a class method: src/index.js
  //      As part of the handler:

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange}/>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
