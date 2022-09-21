import React, {useState} from "react";


function Counter(){
    // const [count, setCount] = useState(0);
    // const [name, setName] = useState("Gender Bender");
    // const [qual, setQual] = useState("CSS");

    //array deconstructor
    const [count, setCount]= useState(0);



    return (
        <div>
          <span>Current Count: {count}</span>
          <section>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
          </section>
        </div>
      );
};

export default Counter;