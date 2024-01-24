import React, {useState} from 'react';
import classes from "./style.module.css";
import {useSelector} from "react-redux";

const TodosList = () => {
    const posts = useSelector(state => state.todo)

    console.log(posts)
    return (
        <div className={classes.content}>
            {posts.map((post)=>{
                return <div key={Math.random()}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </div>
            })}
        </div>
    );
};

export default TodosList;