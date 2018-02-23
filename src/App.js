import React, { Component } from 'react';
import './App.css';
import Hello from './components/Hello';
import { fetchLuke } from './actions';
import { connect } from 'react-redux';

class App extends Component {

	componentDidMount() {
	  this.props.fetchLuke();
	}

	render() {
   	return (
    	<div className="App">
      	<Hello />
   		</div>
		);
  }
}

export default connect(null, { fetchLuke })(App);
