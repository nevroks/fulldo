import React, {FC} from 'react';
import classes from "./style.module.css";
    interface ButtonProps {
        children:React.ReactChild| React.ReactNode
        onClick?: any

    }
const Button:FC<ButtonProps> = ({children,...props}:ButtonProps) => {
    return (
        <button className={classes.btn} {...props}>
            {children}
        </button>
    );
};

export default Button;