import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import './index.css';
import GifList from './components/GifList';
import GifModal from './components/GifModal';
import SearchBar from './components/SearchBar';

// App is parent of SearchBar because it's rendered inside App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGif: null,
      modalIsOpen: false
    }
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    });
  }

  openModal(gif) {
    this.setState({
      modalIsOpen: true,
      selectedGif: gif
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      selectedGif: null
    });
  }

  // the this in this.handleTermChange is onTermChange!
  // resolved be either:
  // binding this in the constructor
  //   (i.e. this.handleTermChange.bind(this))
  // OR, fat-arrow functions
  //    Two options:
  //      As a class method: src/index.js
  //        handleTermChange = (term) => {
  //      As part of the handler:
  //        <SearchBar onTermChange={term => this.handleTermChange(term)} />

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange}/>
        <GifList
          gifs={this.state.gifs}
          onGifSelect={selectedGif => this.openModal(selectedGif) } />
        <GifModal
          modalIsOpen={this.state.modalIsOpen}
          selectedGif={this.state.selectedGif}
          onRequestClose={ () => this.closeModal() } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
