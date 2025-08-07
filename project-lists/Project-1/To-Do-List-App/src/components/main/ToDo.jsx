// import React, { useState } from "react";
import InputField from "./CreateList";
import List from "./TodoList";

function ToDo(){
    // const [datas, setDatas] = useState([]);

    // function fetchData(data){
    //     setDatas(preValue => {
    //         return[...preValue,data];
    //     })
    // }
    const datas = [
        {content:'ssp ssp lorem this is not my victory this is our victory with the backend team, there is no db fetch you can see without visual team there is no calm web, with out the idea there is no structue and it will collapsed so we did a great job here.'},
        {content:'ssp ssp'},
        {content:'ssp ssp'},
        {content:'ssp ssp'},
        {content:'ssp ssp'},
        {content:'ssp ssp'},
        {content:'ssp ssp'},
        {content:'ssp ssp'},
        {content:'ssp ssp'},
        {content:'ssp ssp'},
        {content:'ssp ssp'},
        {content:'ssp ssp'},
        {content:'ssp ssp'},
        {content:'ssp ssp'},
        {content:'ssp ssp'},
        {content:'ssp ssp'},
        {content:'ssp ssp'},
    ]
    return(
        <>
            <div className="box-container">
                <div className="wrap-container">
                    <div className="container">
                        <div className="inputField">
                            <div className="inputSection">
                                {/* <InputField onAdd={fetchData} /> */}
                            </div>
                        </div>
                        <div className="outputField">
                            {datas.map((data,index) =>{
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