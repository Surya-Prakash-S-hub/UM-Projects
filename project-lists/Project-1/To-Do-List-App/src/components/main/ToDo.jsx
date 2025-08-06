import React from "react";
import InputField from "./CreateList";
import List from "./TodoList";

function ToDo(){
    const ping = [
        {
            content:'lorem ipsum is the best of all time but we dont know how to use that so try me bitch'
        },
        {
            content:'lorem ipsum is the best of all time but we dont know how to use that so try me bitch'
        },
        {
            content:'lorem ipsum is the best of all time but we dont know how to use that so try me bitch'
        },
        {
            content:'lorem ipsum is the best of all time but we dont know how to use that so try me bitch'
        },
        {
            content:'lorem ipsum is the best of all time but we dont know how to use that so try me bitch'
        },
        {
            content:'lorem ipsum is the best of all time but we dont know how to use that so try me bitch'
        }
    ]
    return(
        <>
            <div className="box-container">
                <div className="wrap-container">
                    <div className="container">
                        <div className="inputField">
                            <div className="inputSection">
                                <InputField />
                            </div>
                        </div>
                        <div style={{overflowY:'scroll'}} className="outputField">
                            {ping.map((data,index) =>{
                                return <List key={index} count={index} content={data.content} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ToDo;