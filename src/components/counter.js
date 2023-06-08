import { useState } from "react";
const Counter = (props) => {
    // const CountState = useState(0);
    // const countState = countState[0];
    // const setCountState = countState[1];

    const [count, setCount] = useState(0);
    var count_1 = 0;

    const inCreaseCounter = function () {
        count_1 += 1;
        setCount(count + 1);
    }

    const decreaseCounter = function () {
        if (count === 0) return setCount(count)
        setCount(count - 1);
    }

    return (
        <div>
            <div>count : {count}</div>
            <div>count_1 : {count_1}</div>
            <button onClick={inCreaseCounter}>Increase me</button>
            <button onClick={decreaseCounter}>Decrease me</button>
        </div>
    )
}

export default Counter;