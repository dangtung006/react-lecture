import { useRef, useState } from "react";

const Count = () => {
    var count = 0;
    const countRef = useRef(0);
    const [countState, setCountState] = useState(0);

    return (
        <div>
            <div>
                count : {count}
                <button onClick={() => { count += 1 }}>increase</button>
            </div>
            <div>
                count state : {countState}
                <button onClick={() => { setCountState(countState + 1) }}>increase</button>
            </div>
            <div>
                count ref" {countRef.current}
                <button onClick={() => { countRef.current++ }}>increase</button>
            </div>
        </div>
    )
}
export default Count;