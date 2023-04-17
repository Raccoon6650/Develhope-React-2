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

  const deleteItem = (i) => {
    setItems(items.filter((item, index) => index !== i)); //per eliminare gli elementi con l'indice corrente
  };
  


  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <button onClick={resetList}>Reset</button>
      <ul>
        {items.map((item, i) => ( 
          <li key={i} style={{listStyleType: 'numb'}}>{item} <button onClick={() => deleteItem(i)}>Delite</button></li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;