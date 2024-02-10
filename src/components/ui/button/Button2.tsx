import React, {FC} from 'react';
import classes from "./style.module.css";
    interface ButtonProps {
        children:React.ReactChild | React.ReactNode
        onClick?:()=>void,
        variant?:"red" | "blue"
    }
const Button2:FC<ButtonProps> = ({children,...props}) => {
    const styledComp={
        backgroundColor:"none",
        color:"black"
    }
    switch (props.variant) {
        case "red":
            styledComp.backgroundColor="red"
            break
        case "blue":
            styledComp.backgroundColor="blue"
            break
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