import React from "react";



const TodolistDisplay=(props)=>{
return(

    <>
    <button onClick={()=>{props.onSelect(props.id);}}>that fruit added</button>
    <li> {props.text}</li>
    </>


);
};

export default TodolistDisplay;