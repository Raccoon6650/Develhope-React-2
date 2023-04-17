
const TodoList = (props) => {




  return (
    <div>
      <input
        type="text"
        value={props.newItem}
        onChange={props.clickToSet}
        onKeyDown = {props.onKeyDown}
      />
      <button onClick={props.addItem}>Add Item</button>
      <button onClick={props.resetList}>Reset</button>
      <ul>
        {props.List}
      </ul>
    </div>
  );
};



export default TodoList;

//Push fatto per sbaglio nel branch precedente, scusa Nino, i due esercizi saranno uguali ma conterranno la risoluzione di entrambi