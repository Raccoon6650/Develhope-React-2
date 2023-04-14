import React, { useState } from "react";

const ClickTracker = (props) => {
  const [lastClick, setLastClick] = useState(null);

  const ClickTracker = (name) => {
    setLastClick(name);
  };


  return (
    <>
      {['Tasto1', 'Tasto2', 'Tasto3'].map((el) => (
        <button
            onClick={() => ClickTracker(el)}>
          {el}
        </button>
      ))}
      {lastClick && <h1>Last button clicked: {lastClick}</h1>}
    </>
  );
};

export default ClickTracker;