import React from 'react';
import GifsTemp from '../components/GifsTemp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import GifList from '../components/GifList';
import SearchBar from '../components/SearchBar';
import '../styles/app.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar onTermChange={this.props.actions.requestGifs} />
        <GifList gifs={ this.props.gifs } />
    </div>
    );
  }
}

// this mapStateToProps function links the gifs from our GifsReducer to this.props.gifs the App component
// mapStateToProps passes data to our container from our store. It makes the result of reducers available to our container as props.
function mapStateToProps(state) {
  return {
    gifs: state.gifs.data
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
