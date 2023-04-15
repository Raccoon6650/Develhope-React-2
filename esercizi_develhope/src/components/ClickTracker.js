import React, { useState } from "react";

const ClickTracker = (props) => {
  const [lastClick, setLastClick] = useState(null);

  return (
    <>
      {['Tasto1', 'Tasto2', 'Tasto3'].map((el) => (
        <button
            onClick={(e) => setLastClick (e.target.innerHTML)}>
          {el}
        </button>
      ))}
      {lastClick && <h1>Last button clicked: {lastClick}</h1>}
    </>
  );
};

export default ClickTracker;