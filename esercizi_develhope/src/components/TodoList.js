import React, { useState } from "react";

const TodoList = () => {
  const [items, setItems] = useState([]); 
  const [newItem, setNewItem] = useState(""); 

  const addItem = () => { 
    setItems([...items, newItem]);
    setNewItem("");
  };

  const resetList = () => { 
    setItems([]);
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}//il nuovo esercizio chiede di aggiungere questa stringa... Lo avevo già fatto.
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <button onClick={resetList}>Reset</button>
      <ul>
        {items.map((item, i) => ( 
          <li key={i} style={{listStyleType: 'numb'}}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;