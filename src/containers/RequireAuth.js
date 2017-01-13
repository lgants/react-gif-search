import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


// instead of exporting a class like a normal component, we exporting a function that takes a component as an argument
// In this instance, since we're trying to protect our Favorites component, that is what we are going to pass in as our WrappedComponent in a few paragraphs

export default function(WrappedComponent) {
  class Auth extends React.Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push('/login');
      }
    }

    // If the user is authenticated, the WrappedComponent is returned (which, once again, will be Favorites), including any props that may have been passed to it from a parent component
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Auth);
}
