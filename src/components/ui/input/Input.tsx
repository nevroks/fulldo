import React from 'react';
import classes from "./style.module.css";
const Input = ({placeholder,...props}) => {
    return (
        <input className={classes.input} {...props} placeholder={placeholder} />
    );
};

export default Input;