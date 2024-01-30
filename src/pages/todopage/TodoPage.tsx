import React from 'react';
import classes from "./style.module.css";
import {useParams} from "react-router-dom";
const TodoPage = () => {
    const {id}=useParams()
    console.log(id)
    return (
        <div className={classes.page}>
            {id}

        </div>
    );
};

export default TodoPage;