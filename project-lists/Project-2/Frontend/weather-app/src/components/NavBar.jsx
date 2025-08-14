import React from "react";
import { useState } from "react";

export const NavBar = (props) => {
  const [value, setValue] = useState("");
  const [btn, setBtn] = useState(false);

  const visibleButton = (e) => {
    const { value } = e.target;
    setBtn(true);
    setValue(value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    props.onAdd(value);
    setBtn(false);

    setValue("");
  };
  const changeBtnStyle = ()=>{
    if(!value.length < 0){
      setBtn(true);
    }else {
      setBtn(false)
    }
  }
  return (
    <>
      <header className="w-full h-13 flex align-middle">
        <nav className="w-full h-13 bg-cyan-950 flex items-center text-sm text-white/60 justify-between px-10">
          <a
            className="h-fit text-xl hover:text-white/100 transition duration-100"
            href="/"
          >
            FindWeather.
          </a>
          <div className="sideLink flex align-middle justify-center gap-6">
            <div className="inputField relative">
              <form title="search places" onSubmit={submitForm}>
                <input
                  className=" w-100 px-3 py-1.5 pr-10 text-black focus:.labelLine-left-0 focus:bg-white/80 bg-white/50 outline-0 text-xl rounded-xl"
                  type="text"
                  required
                  name="search"
                  id="find"
                  value={value}
                  onChange={visibleButton}
                  onBlur={changeBtnStyle}
                />
                <button
                  type="submit"
                  className="labelLine absolute duration-500 top-1.5 text-xl left-4 space-x-3 outline-0 border-0"
                  style={{
                    pointerEvents: btn ? "auto" : "none",
                    userSelect: btn ? "auto" : "none",
                  }}
                  title="click to enter"
                >
                  {btn ? (<ion-icon name="enter-outline"></ion-icon>) : (<ion-icon name="search-outline"></ion-icon>)}
                </button>
                <div className="icon"></div>
              </form>
            </div>
            <div className="find-location flex">
              <button title="current location" className="px-5 rounded-full font-mono text-xm bg-green-900/50 hover:bg-green-900/90 duration-100 cursor-pointer flex items-center gap-2" onClick={()=>{ alert('Updating! Coming Soon....') }}>
                <span className="logoNear translate-y-0.5"><ion-icon name="locate-outline" aria-hidden="true" ></ion-icon></span>
                <span className="textNear">Near Locations</span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
