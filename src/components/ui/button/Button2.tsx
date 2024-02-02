import React, {FC} from 'react';
import classes from "./style.module.css";
    interface ButtonProps {
        children:React.ReactChild | React.ReactNode
        onClick?:()=>void
    }
const Button2:FC<ButtonProps> = ({children,...props}) => {
    return (
        <button
            className={classes.btn2} {...props}>
            {children}
        </button>
    );
};

export default Button2;