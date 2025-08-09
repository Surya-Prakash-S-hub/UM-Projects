import React, { useState, useEffect, useRef } from "react";

function List(props) {
  const [chgColor, setchgColor] = useState(false);
  const [editableIndex, setEditableIndex] = useState(null);
  const pRefs = useRef([]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        editableIndex !== null && pRefs.current[editableIndex] && !pRefs.current[editableIndex].contains(e.target)
      ) {
        setEditableIndex(null);
        setchgColor(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [editableIndex]);

  return (
    <div className="wrap-list">
      <p
        style={{
          textDecoration: props.completed ? "line-through" : "none",
          border: editableIndex === props.count ? "2px dashed gray" : "none",
          padding: "8px",
          fontWeight: props.starred ? "bold" : "normal",
          background: props.starred ? '#717118' : 'white',
          color: props.starred ? 'white' : 'black',
          textShadow: props.starred ? '0px 0px 2px black' : 'none'
        }}
        ref={(el) => (pRefs.current[props.count] = el)}
        suppressContentEditableWarning={true}
      >
        <strong>{props.count + 1}</strong>. {props.content}{" "}
      </p>

      <div className="makechanges">
        {/* checked button */}
        <div className="checked">
          <button
            title="Mark Complete"
            style={{ color: props.completed ? "green" : "black" }}
            onClick={() => props.onToggleComplete(props.count)}
          >
            <i className="fa fa-check-square" aria-hidden="true"></i>
          </button>
        </div>

        {/* edit button */}
        <div className="edit">
          <button
            title="Edit Item"
            onClick={() => {
              setEditableIndex(props.count);
              setchgColor(true);
              props.onEdit(props.count, prompt("Edit:", props.content));
            }}
            style={{
              color: chgColor ? "red" : "black",
              pointerEvents: props.completed ? "none" : "auto",
              opacity: props.completed ? ".5" : "1",
            }}
          >
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          </button>
        </div>

        {/* delete button */}
        <div className="delete">
          <button
            title="Delete Item"
            onClick={() => props.onRemove(props.count)}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>

        {/*priorities this list data */}
        <div className="priority">
          <button
            title={props.starred ? "Starred list" : "Set Star"}
            onClick={() => {
              props.toggleStar(props.count);
            }}
            style={{
              pointerEvents: props.completed ? "none" : "auto",
              opacity: props.completed ? ".5" : "1",
            }}
          >
            <i
              style={{
                color: props.starred ? "yellow" : "black",
                textShadow: props.starred ? "0px 0px 4px black" : "none",
              }}
              className="fa fa-star"
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default List;
