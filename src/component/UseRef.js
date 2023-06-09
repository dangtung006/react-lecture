import { useRef } from "react";

const UseRef = () => {
    // const id = Math.floor(Math.random() * 10000);
    const inputRef = useRef(null);
    const handleFocus = () => {
        // console.log(document.getElementById(id));
        console.log(inputRef.current);
        //document.getElementById(id).focus();
        inputRef.current.focus();
    };
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleFocus}>Click me</button>
        </div>
    )
}

export default UseRef;