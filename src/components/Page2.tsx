import React, { Component } from 'react';

import Part1 from './Part1';

class Page2 extends Component<any>{
  render(){

    return(
      <div>
        <Part1 name="Bob" text="how are you?" />
      </div>
    )
  }
}

export default Page2;