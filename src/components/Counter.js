import React, {useState} from "react";


function Counter(){
    // const [count, setCount] = useState(0);
    // const [name, setName] = useState("Gender Bender");
    // const [qual, setQual] = useState("CSS");

    //array deconstructor
    const [count, setCount]= useState(0);
    const handleAdd = () => {setCount(count +1)};
    const handleSub = () => {setCount(count -1)};


    return (
        <div>
          <span>Current Count: {count}</span>
          <section>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSub}>-</button>
          </section>
        </div>
      );
};

export default Counter;