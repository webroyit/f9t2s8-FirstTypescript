import React, { Component } from 'react';

import Part1 from './Part1';

const initialState = {
  name: 'Bob',
  text: 'how your day?'
}

// Define the state type
type State = Readonly<typeof initialState>;

class Page2 extends Component{
  readonly state: State = initialState;
  render(){

    return(
      <div>
        <Part1 name={this.state.name} text={this.state.text} />
      </div>
    )
  }
}

export default Page2;