import React, { useState } from "react";

function InputField(props) {
  // set list items when user enter in the field
  const [list, setList] = useState({
    content: "",
  });
  const [viewBtn, setViewBtn] = useState(false);

  function handleChanges(e) {
    const { value } = e.target;
    if (value.length > 0) {
      setList({ content: value });
      setViewBtn(true);
    } else {
      setList({ content: value });
      setViewBtn(false);
    }
  }
  // when user submit the form
  function UploadData(e) {
    e.preventDefault();
    setList({ content: "" });
    setViewBtn(false)
    
    props.onAdd(list) // return the list data to the Todo.jsx
  }
  return (
    <>
      <form onSubmit={UploadData}>
        <div className="inpText">
          <input
            type="text"
            name="todolist"
            id="inps"
            value={list.content}
            required
            onChange={handleChanges}
          />
          <div className="labelLine">input text...</div>
          <div className="line"></div>
        </div>
        {viewBtn && (
          <input type="submit" name="insert" id="submit" value={"add"} />
        )}
      </form>
    </>
  );
}

export default InputField;
