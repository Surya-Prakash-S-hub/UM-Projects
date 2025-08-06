import React from "react";


function List(props){
    return(
        <>
            <p>{props.count + 1}. {props.content}</p>
        </>
    )
}

export default List;