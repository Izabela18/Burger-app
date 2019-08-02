import React from 'react';
import classes from './Button.css';

const button = (props) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}//to make a string of classes from array of strings
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;