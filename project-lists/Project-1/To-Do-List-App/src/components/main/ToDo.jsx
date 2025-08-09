import React, { useEffect, useState } from "react";
import InputField from "./CreateList";
import List from "./TodoList";

function ToDo() {
  //set data list
  const [datas, setDatas] = useState(() => {
    // Load data from local storage if exists
    const savedDatas = localStorage.getItem("todolist");
    return savedDatas ? JSON.parse(savedDatas) : [];
  });

  // Add new data to datas or add with exiting data in local storage
  function fetchData(data) {
    const newData = {
      ...data,
      completed: false,
      starred: false,
    };
    setDatas((prev) => [...prev, newData]);
  }

  // Save data to localStorage whenever datas change
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(datas));
  }, [datas]);

  //adding complete button
  const toggleComplete = (id) => {
    setDatas((prev) =>
      prev.map((todo, index) =>
        index === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    if (!newText.trim()) {
      alert("Empty data cannot be saved. Please fill the input.");
      return; //return back to list
    }
    setDatas((prev) =>
      prev.map((todo, index) =>
        index === id ? { ...todo, content: newText, starred: false } : todo
      )
    );
  };

  //move the starred list to top of the list
  const toggleStar = (id) => {
    setDatas((prev) =>
      prev.map((todo, index) =>
        index === id ? { ...todo, starred: !todo.starred } : todo
      )
    );
  };

  // Delete the item from datas
  function deleteData(id) {
    setDatas((prevValue) => {
      return prevValue.filter((_, index) => index !== id);
    });
  }

  return (
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
              {datas.map((data, index) => {
                return (
                  <List
                    key={index}
                    count={index}
                    content={data.content}
                    onRemove={deleteData}
                    completed={data.completed}
                    onEdit={editTodo}
                    onToggleComplete={toggleComplete}
                    toggleStar={toggleStar}
                    starred={data.starred}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDo;
