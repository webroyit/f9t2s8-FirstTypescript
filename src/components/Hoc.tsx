import React, { Component } from 'react';

const initialState = {
  name: 'Bob',
  text: 'how your day?'
}

// Define the state type
type State = Readonly<typeof initialState>;

const MainHOC = (WrappedComponent: any) => {
  class HOC extends Component<{}, State>{
    readonly state: State = initialState;
  
    render(){
      return(
        <WrappedComponent name={this.state.name} text={this.state.text} />
      )
    }
  }

  return HOC;
}



export default MainHOC;