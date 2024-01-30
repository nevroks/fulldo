import React from 'react';
import classes from "./style.module.css";
const Button2 = ({children,...props}) => {
    return (
        <button
            className={classes.btn2} {...props}>
            {children}
        </button>
    );
};

export default Button2;