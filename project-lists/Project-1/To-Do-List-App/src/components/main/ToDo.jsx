import React, { useState } from "react";
import InputField from "./CreateList";
import List from "./TodoList";

function ToDo(){
    //set data list
    const [datas, setDatas] = useState([]);
    

    //set the data to setDatas where fetch from the CreateList.jsx
    function fetchData(data){
        setDatas(preValue => {
            return[...preValue,data];
        })
    }

    //delete the item from the datas
    function deleteData(id){
        setDatas(preValue => {
            return preValue.filter((returnItems, index) => {
                return index !== id
            })
        })
    }
    return(
        <>
            <div className="box-container">
                <div className="wrap-container">
                    <div className="container">
                        <div className="inputField">
                            <div className="inputSection">
                                <InputField onAdd={fetchData} />
                            </div>
                        </div>
                        <div className="outputField">
                            {datas.map((data,index) =>{
                                return <List key={index} count={index} content={data.content} onRemove={deleteData}  />
                                
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ToDo;