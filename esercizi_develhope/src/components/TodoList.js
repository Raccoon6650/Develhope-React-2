import React, { useState } from "react";

const TodoList = () => {
  const [items, setItems] = useState([]); 
  const [newItem, setNewItem] = useState(""); 

  const addItem = () => { 
    setItems([...items, newItem]);
    setNewItem("");
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, i) => ( 
          <li key={i} style={{listStyleType: 'numb'}}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;