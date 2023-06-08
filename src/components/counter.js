import { useState } from "react";
const Counter = (props) => {
    const [count, setCount] = useState(0);

    const inCreaseCounter = function () {
        return setCount(count + 1)
        console.log("increase");
    }


    return (
        <div>
            <div>{count}</div>
            <button onClick={inCreaseCounter}>Increase me</button>
        </div>
    )
}

export default Counter;