import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import GifList from '../components/GifList';
import GifModal from '../components/GifModal';
import SearchBar from '../components/SearchBar';
import '../styles/app.css';


class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar onTermChange={this.props.actions.requestGifs} />
        <GifList
          gifs={ this.props.gifs }
          onGifSelect={ selectedGif => this.props.actions.openModal({selectedGif}) } />
        <GifModal
          modalIsOpen={ this.props.modalIsOpen }
          selectedGif={ this.props.selectedGif }
          onRequestClose={ () => this.props.actions.closeModal() } />
    </div>
    );
  }
}

// this mapStateToProps function links the gifs from our GifsReducer to this.props.gifs the App component
// mapStateToProps passes data to our container from our store. It makes the result of reducers available to our container as props.
function mapStateToProps(state) {
  return {
    gifs: state.gifs.data,
    modalIsOpen: state.modal.modalIsOpen,
    selectedGif: state.modal.selectedGif
  };
}

// mapDispatchToProps method sets this.props.actions on our App by calling Redux's bindActionCreators method
// mapDispatchToProps passes data from our container to the store. It provides the ability for the container to tell the store that it needs to change and enables this by adding action creators to our container as props.
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

// When writing vanilla React, components would be exported by writing something like export default App. In Redux, we are not exporting our App but instead are exporting the results of the connect function from react-redux.
export default connect(mapStateToProps, mapDispatchToProps)(Home);
