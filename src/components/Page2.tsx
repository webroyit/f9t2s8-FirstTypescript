import React, { Component } from 'react';

import Part1 from './Part1';

class Page2 extends Component{
  render(){

    return(
      <div>
        <Part1 name={this.state.name} text={this.state.text} />
      </div>
    )
  }
}

export default Page2;