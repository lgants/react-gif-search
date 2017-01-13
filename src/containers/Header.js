import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as Actions from '../actions';


//Our Header doesn't have any child components, so we can just pass in Actions directly in order to make signOutUser() available on this.props.
// Similiar to Login and Signup, it isn't necessary to explicitly call mapDispatchToProps and bindActionCreators to hook action creators into the container since Header doesn't have any child components Actions can be passed in directly in order to make signOutUser() available on this.props

class Header extends React.Component {
  handleSignout() {
    this.props.signOutUser();
  }

  renderAuthLinks() {
    if (this.props.authenticated) {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/favorites">My Favorites</Link>
        </li>,
        <li className="nav-item" key={2}>
          <a className="nav-link" href="#" onClick={() => this.handleSignout()}>Sign Out</a>
        </li>
      ]
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/login">Login</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ]
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">React2Gifs</Link>
          </div>
           <ul className="nav navbar-nav navbar-right">
             { this.renderAuthLinks() }
           </ul>
        </div>
      </nav>
    );
  }
}

// mapStateToProps is used to link the component with a certain part of the Store
// .auth.authenticated is used because our state is an object of objects - see rootReducer
// state input is the entire store object
// returned value is the relevant piece of that store object
function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, Actions)(Header);
