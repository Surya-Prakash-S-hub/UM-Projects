import React from "react";

function Footer(){
    const preYear = new Date().getFullYear();

    return(
        <>  
            <footer>
                <div className="foot"><p>@ {preYear} copyrights</p></div>
            </footer>
        </>
    )
}

export default Footer;