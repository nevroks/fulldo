import React, {FC} from 'react';
import classes from "./style.module.css";
    interface ButtonProps {
        children:React.ReactChild | React.ReactNode
        onClick?:()=>void,
        variant?:"red"
    }
const Button2:FC<ButtonProps> = ({children,...props}) => {
    const styledComp={
        backgroundColor:"none"
    }
        if (props.variant ==="red"){
            styledComp.backgroundColor="red"
        }
    return (
        <button
            style={styledComp}
            className={classes.btn2} {...props}>
            {children}
        </button>
    );
};

export default Button2;