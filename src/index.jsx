import React, { Component } from 'react';
import '../static/custom.css';
import Header from './Header'
import Body from './Body'

class TreeGrid extends Component {
  constructor(props) {
    super()
    this.getHeaderElems = this.getHeaderElems.bind(this)
  }
  
  getHeaderElems() {
    return Object.keys(this.props.data[0])
  }

  render() {
   return (
      <div>
        <table className="table table-striped table-hover">
          <Header options={this.props.options}/>
          <Body data={this.props.data} options={this.props.options} /> 
        </table>
      </div>
    );
  }
}

export default TreeGrid;
