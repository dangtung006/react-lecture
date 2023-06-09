import { useEffect, useState } from "react";
const CountTitle = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You have clicked ${count} times`;
    });

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increase</button>
        </div>
    )
}

export default CountTitle;