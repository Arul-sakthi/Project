import React, { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";

const Content = (user) => {
  let [items, setItem] = useState([
    { id: 1, label: "", checked: true },
    { id: 2, label: "css", checked: true },
    { id: 3, label: "javascript" },
    { id: 4, label: "React js", checked: false },
  ]);

  let [newItems, setNewItem] = useState("");
  let [editing, setEditing] = useState(false);
  let [currentEle, setCurrentEle] = useState(null);

  let handleChecked = (id) => {
    let newListItem = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItem(newListItem);
  };
  let handleAddOrSave = () => {
    if (editing) {
      let newListItem = items.map((item) => {
        return item.id === currentEle ? { ...item, label: newItems } : item;
      });
      setItem(newListItem);
      setCurrentEle(null);
      setNewItem("");
      setEditing(false);
    } else {
      setItem([
        ...items,
        { id: items.length + 1, label: newItems, checked: false },
      ]);
      setNewItem("");
    }
  };

  let handleUpdate = (id) => {
    let listItem = items.find((item) => item.id === id);
    setNewItem(listItem.label);
    setEditing(true);
    setCurrentEle(id);
  };

  var handleDelete = (id) => {
    let newItems = items
      .filter((item) => item.id !== id)
      .map((item, index) => {
        return { ...item, id: index + 1 };
      });
    setItem(newItems);
  };
  return (
    <main>
      <div>
        <input
          className="input-box"
          type="text"
          value={newItems}
          onChange={(event) => {
            setNewItem(event.target.value);
          }}
        />
        <button onClick={handleAddOrSave}>{editing ? "save" : "add"}</button>
      </div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChecked(item.id)}
              />
              <label> {item.label} </label>

              <button onClick={() => handleUpdate(item.id)}>update</button>
              <button onClick={() => handleDelete(item.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Content;
