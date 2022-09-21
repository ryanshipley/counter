import React, {useState} from "react";


function Counter(){

    //array deconstructor
    const [count, setCount]= useState(0);

    //handles event listeners
    const Add = () => setCount(count +10);
    const Sub = () => setCount(count -1);


    return (
        <div>
          <span>Current Count: {count}</span>
          <section>
            <button onClick={Add}>+</button>
            <button onClick={Sub}>-</button>
          </section>
        </div>
      );
};

export default Counter;