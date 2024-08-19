import React, { useState } from "react";

const Counter = () => {
  let [counters, setCounters] = useState(15);

  //   let Counter = 15;

  const AddValue = () => {
    console.log("value added !", counters);
    counters = counters + 1;
    setCounters(counters);
  };

  const AddThree = () => {
    console.log("value added !", counters);
    // counters = counters + 1;

    // prevcounter is like a callback arrow function ki ek khatam hoga toh dusra chalega or it is like then and catch
    setCounters((PrevCounter) => PrevCounter + 1);
    setCounters((PrevCounter) => PrevCounter + 1);
    setCounters((PrevCounter) => PrevCounter + 1);
  };

  const removeValue = () => {
    setCounters(counters - 1);
  };

  return (
    <div>
      <h4 className="bg-green-500  w-60 text-black p-1 rounded-xl">
        Counter Value : {counters}
      </h4>
      <button onClick={AddValue}>Add Value</button>
      <br />
      <button onClick={AddThree}>+ 3</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </div>
  );
};

export default Counter;
