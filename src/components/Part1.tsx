import React from 'react';

// By default, the return type is any
const Part1 = (prop: {text: string}): any => {
    return(
        <p>{prop.text}</p>
    );
}

export default Part1;