import React from 'react';
import MainHOC from './Hoc';

const example = (props: any): any => <p>{props.name}, {props.text}</p>;

const Part2 = MainHOC(example);

export default Part2;