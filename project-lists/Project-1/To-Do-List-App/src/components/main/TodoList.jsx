import React, { useState, useEffect, useRef } from "react";

function List(props) {
  const [check, setChecked] = useState(false); //set the color for check button
  const [chgColor, setchgColor] = useState(false); //set the color for edit button

  function showFunction() {
    setChecked(!check); //change to opposite data when clicked
  } 
  const [editableIndex, setEditableIndex] = useState(null);
  const pRefs = useRef([]);

  // To detect clicks outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        editableIndex !== null &&
        pRefs.current[editableIndex] &&
        !pRefs.current[editableIndex].contains(e.target)
      ) {
        setEditableIndex(null); // stop editing
        setchgColor(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [editableIndex]);
  // return 
  return (
    <>
      <div className="wrap-list">
        <p
          style={{
            textDecoration: check ? "line-through" : "none",
            border: editableIndex === props.count ? "1px dashed gray" : "none",
            padding: "8px",
          }}
          contentEditable={editableIndex === props.count}
          ref={(el) => (pRefs.current[props.count] = el)}
          suppressContentEditableWarning={true}
        >
          <strong>{props.count + 1}</strong>. {props.content}{" "}
        </p>
        <div className="makechanges">
          <div className="checked">
            <button title="Mark Complete"
              style={{ color: check ? "green" : "black" }}
              onClick={showFunction}
            >
              <i className="fa fa-check-square" aria-hidden="true"></i>
            </button>
          </div>
          <div className="edit">
            <button title="Edit Item"
              onClick={() => {
                setEditableIndex(props.count);
                setchgColor(true);
              }}
              style={{ color: chgColor ? "red" : "black" }}
            >
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>
          </div>
          <div className="delete">
            <button title="Delete Item"
              onClick={() => {
                props.onRemove(props.count);
              }}
            >
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
