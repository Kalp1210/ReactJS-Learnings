import React, { useState } from "react";

const Counter = () => {
  let [counters, setCounters] = useState(15);

  //   let Counter = 15;

  const AddValue = () => {
    console.log("value added !", counters);
    counters = counters + 1;
    setCounters(counters);
  };

  const removeValue = () => {
    setCounters(counters - 1);
  };

  return (
    <div>
      <h4 className="bg-green-500">Counter Value : {counters}</h4>
      <button onClick={AddValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </div>
  );
};

export default Counter;
