import React, { useState } from 'react';
//import Login from './components/Login';
import TodoList from './components/TodoList';
//import CounterClick from './components/CounterClick';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState(""); 

  const addItem = () => { 
    setItems([...items, newItem]);
    setNewItem("");
  };

  function handleKeyDown(e) {//aggiunto perché odio dover andare a premere il tastino
    if (e.keyCode === 13) {
      addItem();
    }
  }

  const deleteItem = (i) => {
    setItems(items.filter((item, index) => index !== i));
  };

  const resetList = () => { 
    setItems([]);
  };

  const list = () => {

    return items.map((item, i) => ( 
    <li key={i} style={{listStyleType: 'numb'}}>{item} <button onClick={() => deleteItem(i)}>Delite</button></li>
))}

  return (
    <div className="App">
      <header className="App-header">
        <>
          <TodoList List ={list()} addItem= {addItem} resetList= {resetList} clickToSet = {(e) => setNewItem(e.target.value)} newItem = {newItem} onKeyDown={handleKeyDown}/>
        </>
      </header>
    </div>
  );
}

export default App;