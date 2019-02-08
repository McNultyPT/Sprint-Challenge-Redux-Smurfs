import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurf } from '../actions';
import './App.css';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  componentDidMount() {
    this.props.getSmurf();
  }

  render() {
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => {
          return (
            <div>
              <p>{smurf.name}</p>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  error: state.error
});

export default connect( mapStateToProps, { getSmurf })(App);
