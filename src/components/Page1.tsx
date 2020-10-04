import React, { Component } from 'react';

class Page1 extends Component{
  render(){
    // Examples of basic types in typescript
    //let firstValue: string = 'Bob';
    //let firstValue: number = 34;
    //let firstValue: boolean = true;
    //let firstValue: number[] = [1, 2, 3];
    //let firstValue: Array<string> = ['dog', '7', 'house'];

    // enum is similar to an object
    enum Foods {watermelon = 1, berry = 2};

    // any if you are not sure which type to use
    let firstName: any = 'Bob';

    // void if you are returning anything
    const test = (): void => {
      console.log("test");
    }

    return(
      <div>
        <p>
          The value {firstName} is of {typeof firstName} type
        </p>
      </div>
    )
  }
}

export default Page1;