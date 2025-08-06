import React from "react";

function InputField() {
  return (
    <>
      <form>
        <div className="inpText">
          <input
            type="text"
            name="todolist"
            id="inps"
            required
          />
          <div className="labelLine">input text...</div>
          <div className="line"></div>
        </div>
        <input type="submit" name="insert" id="submit" value={"add"} />
      </form>
    </>
  );
}

export default InputField;
