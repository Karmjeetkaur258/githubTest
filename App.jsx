import React, { useState } from "react";
import TodolistDisplay from "./TodolistDisplay";


const App=()=>{

    const[curerntInput,setInput]=useState(" ");
    const[currentArray,setArray]=useState([]);

    const addEvent=(event)=>{ 
        setInput(event.target.value);
     };   

    const listOfItems=()=>{
        setArray((olditems)=>{return[...olditems,curerntInput];}
        );
        setInput("");
    };

    const deleteItems=(id)=>{
        console.log("deleted");

    setArray((olditems) => {
        return olditems.filter((arrEle,index) =>{
            return index !==id;
        });
    });


    };

    return(
        <>
        <div classname="main_div">
            <div classname="centre_div">
            
                <h1>To do list</h1>
                
                <input type="text" placeholder="add item" value={curerntInput} onChange={addEvent}></input>
                <button onClick={listOfItems}>+</button>

                <ol>{
                    currentArray.map((newArray,index)=> {
                        
                    return(

                        
                        <TodolistDisplay text={newArray}
                        key={index}
                        id={index}
                        textarray={newArray}
                        onSelect={deleteItems} />
                    
                       
                       );
                        })
                    }
                    
                </ol>
            </div>
        </div>
        </>
    );

}
export default App;