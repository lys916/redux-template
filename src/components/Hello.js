import React from 'react';
import { connect } from 'react-redux';
import { sayHello } from '../actions';

class Hello extends React.Component {

  render() {
    return (
      <div>
        <button onClick={()=>{this.props.sayHello()}}>Say hello</button>
        <h3>{this.props.text}</h3>
        {this.props.fetchingLuke ? <div>Loading...</div> : <div>{this.props.luke.name}</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.test.text,
    fetchingLuke: state.test.fetchingLuke,
    luke: state.test.luke
  } 
}

export default connect(mapStateToProps, { sayHello })(Hello);