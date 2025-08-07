import React from "react";


function List(props){
    return(
        <>
            <div className="wrap-list">
                <p ><strong>{props.count + 1}</strong>. {props.content} </p>
                <div className="makechanges">
                    <div className="edit"></div>
                    <div className="delete"></div>
                </div>
            </div>
        </>
    )
}

export default List;