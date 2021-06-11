import React from "react";

function Todo(props){

    return (
        <div onClick={() => {
            props.onChecked(props.id)
        }}>
            <li>{props.text}</li>
        </div>
    );
}

export default Todo;