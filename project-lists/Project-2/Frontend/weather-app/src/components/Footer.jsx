import React from "react";

export const Footer = ()=>{
    const time = new Date().getFullYear();
    return(
        <>
            <footer className=" fixed bottom-0 left-0 w-full h-fit flex items-center justify-center" >
                <p className="p-1 text-xs text-gray-700" > @ {time} all copyrights reserved. </p>
            </footer>
        </>
    )
}