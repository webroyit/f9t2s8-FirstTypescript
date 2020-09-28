import React, { Component } from 'react';

class Page1 extends Component{
  render(){
    // Examples of basic types in typescript
    //let firstValue: string = 'Bob';
    //let firstValue: number = 34;
    //let firstValue: boolean = true;
    //let firstValue: number[] = [1, 2, 3];
    let firstValue: Array<string> = ['dog', '7', 'house'];

    return(
      <div>
        <p>
          The value {firstValue} is of {typeof firstValue} type
        </p>
      </div>
    )
  }
}

export default Page1;