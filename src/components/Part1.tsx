import React from 'react';

// interface check for types and valiadate
// it does not work in javascript
interface SomeData{
    name: string;
    text: string;
}

// By default, the return type is any
const Part1 = (props: SomeData): any => {
    return(
        <p>{props.name}, {props.text}</p>
    );
}

export default Part1;